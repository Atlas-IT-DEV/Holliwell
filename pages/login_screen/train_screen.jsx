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
import { useState } from "react";
import CourseCard from "../../components/course_card";
import CoursePackCard from "../../components/course_pack_card";

const TrainScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
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
            style={{ top: 10 }}
            onPress={() => navigation.navigate("MainScreen")}
          >
            <Image
              source={require("./../../images/arrow_back.png")}
              style={{ width: 28, height: 28 }}
            />
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
            Тренируйся
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
              backgroundColor: "rgba(217, 217, 217, 1)",
              height: 40,
              borderRadius: 3,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 72,
                    paddingRight: 72,
                    fontSize: 14,
                    fontFamily: "GeologicaLight",
                  }}
                >
                  Уроки
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 72,
                    paddingRight: 72,
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
              source={require("./../../images/filters.png")}
            />
            <Text style={{ fontSize: 14, fontFamily: "GeologicaThin" }}>
              Новое
            </Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./../../images/arrow_down.png")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("LessonScreen")}>
                <CourseCard />
              </TouchableOpacity>

              <CourseCard />
            </View>
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CoursePackCard />
                <CoursePackCard />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
});

export default TrainScreen;