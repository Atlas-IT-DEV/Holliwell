import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { arrow_back, arrow_back_black } from "../../images/images";
import CourseListenMiniCard from "../../components/listen/course_listen_mini_card";
import { useStores } from "../../store/store_context";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

const ListenScreen = observer(() => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { pageStore } = useStores();

  const [sort, setSort] = useState(0);
  const handleSort = () => {
    sort + 1 < 3 ? setSort(sort + 1) : setSort(0);
  };
  useEffect(() => {
    pageStore.getAllListening(sort);
  }, [sort]);
  useEffect(() => {
    pageStore.getAllListening();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              top: 5,
              backgroundColor: "rgba(18,18,18,1)",
              width: 35,
              height: 35,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <SvgXml xml={arrow_back} width={20} height={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              width: "100%",
              top: 10,
              textAlign: "center",
              position: "absolute",
              zIndex: -1,
              fontFamily: "GeologicaRegular",
            }}
          >
            СЛУШАЙ
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(217, 217, 217, 1)",
              width: 122,
              height: 30,
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            onPress={() => handleSort()}
          >
            {/* <Image
              style={{ width: 20, height: 20 }}
              source={require("../../images/filters.png")}
            /> */}
            <Text style={{ fontSize: 14, fontFamily: "GeologicaThin" }}>
              {sort == 0 ? "сортировка" : sort == 1 ? "популярное" : "новое"}
            </Text>
            {/* <Image
              style={{ width: 20, height: 20 }}
              source={require("../../images/arrow_down.png")}
            /> */}
          </TouchableOpacity>

          {pageStore.listening.reduce((rows, elem, index) => {
            if (index % 2 === 0) {
              // Создаем новую строку для пары элементов
              rows.push(
                <View
                  key={index}
                  style={{
                    marginTop: 20,
                    flexDirection: "row",
                    gap: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <CourseListenMiniCard
                    name={elem.title}
                    uri={elem.path_to_cover}
                    price={elem?.price}
                    course_obj={elem}
                    key={index}
                  />

                  {pageStore.listening[index + 1] ? (
                    // Если есть второй элемент в паре, отображаем его
                    <CourseListenMiniCard
                      name={pageStore.listening[index + 1].title}
                      uri={pageStore.listening[index + 1].path_to_cover}
                      price={pageStore.listening[index + 1]?.price}
                      course_obj={pageStore.listening[index + 1]}
                      key={index + 1}
                    />
                  ) : (
                    // Если второго элемента нет, оставляем пустое место для выравнивания
                    <View style={{ flex: 1 }} />
                  )}
                </View>
              );
            }
            return rows;
          }, [])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
  },
  topImage: {
    width: "100%",
  },
  grayButt: {
    backgroundColor: "rgba(217, 217, 217, 1)",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
  whiteButt: {
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
  },
});

export default ListenScreen;
