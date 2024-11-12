import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const IntroScreen1 = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Функция для получения данных с сервера с помощью fetch
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://holiwell.ru:8000/api/sliders/all",
          {
            headers: {
              accept: "application/json",
            },
          }
        );
        const result = await response.json();
        // console.log(result);

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
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("./../../images/fullscreen_woman.png")}
          style={{ height: screenHeight, width: "100%" }}
        >
          <Text
            style={{
              fontSize: 30,
              marginTop: 30,
              justifyContent: "center",
              alignSelf: "center",
              color: "white",
            }}
          >
            HOLIWELL
          </Text>
          <View style={{ marginHorizontal: 20, marginTop: "90%" }}>
            <View>
              <Text
                style={{
                  marginBottom: 20,
                  fontSize: 40,
                  color: "white",
                  fontFamily: "GeologicaMedium",
                }}
              >
                {data[0] == undefined ? "Заголовок" : data[0].title}
              </Text>

              <Text style={styles.aboutText}>
                {data[0] == undefined ? "Текст1" : data[0].text}
              </Text>
              <Text style={styles.aboutText}>
                {data[0] == undefined ? "Текст2" : data[0].text}
              </Text>
              <Text style={styles.aboutText}>
                {data[0] == undefined ? "Текст3" : data[0].text}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("IntroScreen2")}
              style={{
                marginTop: 20,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                paddingTop: 12,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 12,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontFamily: "GeologicaRegular",
                }}
              >
                Продолжить
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  aboutText: {
    color: "white",
    fontSize: 20,
    fontFamily: "GeologicaLight",
  },
});

export default IntroScreen1;
