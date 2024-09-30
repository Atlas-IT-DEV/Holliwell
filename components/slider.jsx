import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const { height: screenHight } = Dimensions.get("window");

const SliderComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Функция для получения данных с сервера с помощью fetch
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://154.194.52.246:8000/api/sliders/all",
          {
            headers: {
              accept: "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result);

        const sliderData = [
          {
            title: result[0].title_first,
            text: result[0].text_first,
            image: result[0].path_to_cover_first,
          },
          {
            title: result[0].title_second,
            text: result[0].text_second,
            image: result[0].path_to_cover_second,
          },
          {
            title: result[0].title_third,
            text: result[0].text_third,
            image: result[0].path_to_cover_third,
          },
        ];

        setData(sliderData);
        // console.log(sliderData);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных слайдера:", error);
        setLoading(false);
        // console.log(fetchData());
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Меняем слайд каждые 3 секунды

      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: screenWidth * currentSlideIndex,
        animated: true,
      });
    }
    // console.log(currentSlideIndex);
  }, [currentSlideIndex]);

  const renderSlides = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    ));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={true}
      scrollEnabled={false} // отключаем ручную прокрутку
    >
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
  image: {
    width: screenWidth,
    height: screenHight - 320,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    fontFamily: "GeologicaMedium",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "GeologicaLight",
  },
});

export default SliderComponent;
