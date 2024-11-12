import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { arrow_back, lock_image, icon_share } from "../../images/images";
import CoachMiniCard from "../../components/coaches/coach_mini_card";
import LessonMeditationMiniCard from "../../components/meditation/lesson_meditation_mini_card";
import AudioReview from "../../components/audio_review";

const AboutCourseMeditationScreen = ({
  // uri = "http://legacy.reactjs.org/logo-og.png",
  route,
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  console.log(route.params.lessons);
  const combineTimeStrings = (timeStrings) => {
    // Разделяем каждую строку времени на часы, минуты и секунды
    const times = timeStrings.map((str) => {
      const parts = str.split(":");
      return {
        hours: parseInt(parts[0], 10),
        minutes: parseInt(parts[1], 10),
        seconds: parseInt(parts[2], 10),
      };
    });

    // Суммируем часы, минуты и секунды
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;
    for (const time of times) {
      totalHours += time.hours;
      totalMinutes += time.minutes;
      totalSeconds += time.seconds;
    }

    // Приводим результаты к целым числам и форматируем результат
    const totalHoursString = ("0" + Math.floor(totalHours)).slice(-2);
    const totalMinutesString = ("0" + Math.floor(totalMinutes)).slice(-2);
    const totalSecondsString = ("0" + Math.floor(totalSeconds)).slice(-2);
    return `${totalHoursString}:${totalMinutesString}:${totalSecondsString}`;
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: route.params.path_to_cover }}
          style={{ width: "100%", height: screenHeight >= 902 ? 447 : 230 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "rgba(18,18,18,1)",
                width: 35,
                height: 35,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgXml xml={arrow_back} width={20} height={20} />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                backgroundColor: "rgba(18,18,18,1)",
                width: 35,
                height: 35,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgXml xml={icon_share} width={20} height={20} />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>

        <Text
          style={{
            marginTop: 40,
            fontFamily: "GeologicaRegular",
            fontSize: 28,
            textAlign: "center",
          }}
        >
          {route.params.title}
        </Text>
        <View
          style={{ marginHorizontal: 20, marginTop: 10, alignItems: "center" }}
        >
          <Text style={{ fontFamily: "GeologicaThin", textAlign: "center" }}>
            Курс медитаций
          </Text>
          <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
            <AudioReview
              uri={route.params.path_to_url_audio}
              text="Обзор медитации"
            />
          </View>
          {/* <TouchableOpacity
            style={{
              justifyContent: "center",
              backgroundColor: "rgba(48,48,48,1)",
              marginTop: 20,
              paddingHorizontal: 60,
              paddingVertical: 12,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "GeologicaRegular",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ОБЗОР КУРСА
            </Text>
          </TouchableOpacity> */}
          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
              alignItems: "flex-start",
            }}
          ></View>
          <Text
            style={{
              marginTop: 30,
              fontFamily: "GeologicaRegular",
              fontSize: 20,
              alignSelf: "flex-start",
            }}
          >
            ОПИСАНИЕ КУРСА
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: "GeologicaLight",
              lineHeight: 20,
            }}
          >
            {route.params.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 40,
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "GeologicaThin" }}>
              Занятий: {route.params.lessons.length}
            </Text>
            <Text style={{ fontFamily: "GeologicaThin" }}>
              {combineTimeStrings(
                route.params.lessons.map((elem) => {
                  return elem.audio_length;
                })
              )}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
            }}
          ></View>
        </View>
        <View style={{ gap: 30 }}>
          {route.params.lessons.map((elem, index) => {
            console.log(elem.title);
            return (
              <AudioReview
                uri={elem.path_to_audio}
                text={elem.title}
                length={elem?.audio_length}
                trainer={elem?.trainer}
              />
            );
          })}
        </View>
        {/* <View style={{ marginTop: 40, marginHorizontal: 20 }}>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 40,
            }}
          ></View>
          <Text
            style={{
              fontFamily: "GeologicaRegular",
              fontSize: 28,
              textAlign: "center",
            }}
          >
            КОМАНДА
          </Text>
          {route.params.lessons.map((elem, index, array) => {
            index *= 2;

            return (
              <View
                style={{
                  marginTop: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {array.slice(index, index + 2).length == 2 ? (
                  <>
                    <CoachMiniCard
                      coach={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                      uri={
                        "http://154.194.52.246" + elem.trainer.path_to_avatar
                      }
                      key={elem}
                    />
                    <CoachMiniCard
                      coach={`${array[index + 1].trainer.last_name} ${
                        array[index + 1].trainer.first_name
                      }`}
                      uri={
                        "http://154.194.52.246" +
                        array[index + 1].trainer.path_to_avatar
                      }
                      key={elem}
                    />
                  </>
                ) : array.slice(index, index + 2).length == 1 ? (
                  <CoachMiniCard
                    coach={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                    uri={"http://154.194.52.246" + elem.trainer.path_to_avatar}
                    key={elem}
                  />
                ) : null}
              </View>
            );
          })}
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
            }}
          ></View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button_text: {
    color: "white",
    fontFamily: "GeologicaRegular",
    fontSize: 20,
  },
});

export default AboutCourseMeditationScreen;
