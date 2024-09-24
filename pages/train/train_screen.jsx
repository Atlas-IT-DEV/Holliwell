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
import { arrow_back_black } from "../../images/images";
import { SvgXml } from "react-native-svg";

import VideoPlayer from "../../components/video_screen";
const TrainScreen = observer(() => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  const { pageStore } = useStores();
  const [cards, setCards] = useState([]);
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
            style={{ top: 10 }}
            onPress={() => navigation.goBack()}
          >
            <SvgXml xml={arrow_back_black} />
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
              backgroundColor: "rgba(217, 217, 217, 1)",
              width: 122,
              height: 30,
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../images/filters.png")}
            />
            <Text style={{ fontSize: 14, fontFamily: "GeologicaThin" }}>
              Новое
            </Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../images/arrow_down.png")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
              <>
                {pageStore.training.map((elem, index, array) => {
                  index *= 2;
                  return (
                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: "row",
                        gap: 20,
                      }}
                    >
                      {array.slice(index, index + 2).length == 2 ? (
                        <>
                          <CourseCard
                            name={elem.title}
                            uri={elem.path_to_cover}
                            price={elem?.price}
                            course_obj={elem}
                            key={elem}
                          />
                          <CourseCard
                            name={array[index + 1].title}
                            uri={array[index + 1].path_to_cover}
                            price={array[index + 1]?.price}
                            course_obj={array[index + 1]}
                            key={array[index + 1]}
                          />
                        </>
                      ) : array.slice(index, index + 2).length == 1 ? (
                        <CourseCard
                          name={elem.title}
                          uri={elem.path_to_cover}
                          price={elem?.price}
                          course_obj={elem}
                          key={elem}
                        />
                      ) : null}
                    </View>
                  );
                })}
              </>
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
