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
import { useStores } from "../../store/store_context";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import CourseCard from "../../components/train/train_mini_card";
import CoursePackCard from "../../components/train/train_pack_mini_card";
import { arrow_back, arrow_back_black } from "../../images/images";
import { SvgXml } from "react-native-svg";
const TrainScreen = observer(() => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  const { pageStore } = useStores();
  const [sort, setSort] = useState(0);
  const handleSort = () => {
    sort + 1 < 3 ? setSort(sort + 1) : setSort(0);
  };
  useEffect(() => {
    pageStore.getAllTraining(sort);
  }, [sort]);
  useEffect(() => {
    pageStore.getAllTraining();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <VideoPlayer/> */}
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
            ТРЕНИРУЙСЯ
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
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 47,
              borderRadius: 5,
              backgroundColor: "rgba(217, 217, 217, 1)",
              padding: 3,
            }}
          >
            <TouchableOpacity
              onPress={() => setSelected(0)}
              style={{ width: "50%" }}
            >
              <View style={selected == 1 ? styles.grayButt : styles.whiteButt}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    fontFamily: "GeologicaLight",
                  }}
                >
                  Уроки
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(1)}
              style={{ width: "50%" }}
            >
              <View style={selected == 0 ? styles.grayButt : styles.whiteButt}>
                <Text
                  style={{
                    textAlign: "center",

                    fontSize: 14,
                    fontFamily: "GeologicaLight",
                  }}
                >
                  Курсы
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
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
            <Text style={{ marginTop: 20 }}>
              Кол-во:{" "}
              {selected == 0
                ? pageStore.training.flatMap((course) => course.lessons).length
                : pageStore.training.length}
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            {selected === 0 ? (
              <>
                {pageStore.training
                  .flatMap((course) => course.lessons) // Объединяем все уроки в один массив
                  .reduce((rows, elem, index, array) => {
                    if (index % 2 === 0) {
                      rows.push(
                        <View
                          key={index}
                          style={{
                            marginTop: 20,
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <CourseCard
                            name={elem.title}
                            uri={elem.path_to_cover}
                            price={elem?.price}
                            lesson_obj={elem}
                            description={`${elem?.trainer?.first_name} ${elem?.trainer?.last_name}`}
                            time={elem?.video_length}
                          />
                          {array[index + 1] && (
                            <CourseCard
                              name={array[index + 1].title}
                              uri={array[index + 1].path_to_cover}
                              price={array[index + 1]?.price}
                              lesson_obj={array[index + 1]}
                              description={`${
                                array[index + 1]?.trainer?.first_name
                              } ${array[index + 1]?.trainer?.last_name}`}
                              time={array[index + 1]?.video_length}
                            />
                          )}
                        </View>
                      );
                    }
                    return rows;
                  }, [])}
              </>
            ) : (
              <>
                {pageStore.training.reduce((rows, elem, index, array) => {
                  if (index % 2 === 0) {
                    console.log(pageStore.training);
                    rows.push(
                      <View
                        key={index}
                        style={{
                          marginTop: 20,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          gap: 10,
                        }}
                      >
                        <CoursePackCard
                          name={elem.title}
                          uri={elem.path_to_cover}
                          price={elem?.price}
                          course_obj={elem}
                          count={elem.lessons.length}
                        />
                        {array[index + 1] && (
                          <CoursePackCard
                            name={array[index + 1].title}
                            uri={array[index + 1].path_to_cover}
                            price={array[index + 1]?.price}
                            course_obj={array[index + 1]}
                            count={array[index + 1].lessons.length}
                          />
                        )}
                      </View>
                    );
                  }
                  return rows;
                }, [])}
              </>
            )}
          </View>
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

export default TrainScreen;
