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
import {
  arrow_back_black,
  lock_image,
  icon_share,
  icon_freeze_small,
  icon_freeze_big,
  icon_play,
} from "../../images/images";
import CoachMiniCard from "../../components/coaches/coach_mini_card";
import AudioCard from "../../components/listen/audio_card";
import AudioReview from "../../components/audio_review";

const AboutCourseListenScreen = ({ route }) => {
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

  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  console.log(route);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: "100%",
          }}
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgXml xml={arrow_back_black} />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={{ uri: route.params.path_to_cover }}
          style={{
            width: 220,
            height: 220,
            marginTop: 10,
            alignSelf: "center",
            resizeMode: "streatch",
          }}
        />
        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
          <Text style={{ fontFamily: "GeologicaThin", textAlign: "center" }}>
            Аудио-курс
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: "GeologicaRegular",
              fontSize: 28,
              textAlign: "center",
            }}
          >
            {route.params.title}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "GeologicaLight",
              textAlign: "center",
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
        </View>
        <View style={{ alignItems: "center", padding:20}}>
          <AudioReview uri={route.params.path_to_url_audio} text="Обзор курса"/>
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
            }}
          ></View>
          {route.params.lessons.map((elem, index) => {
            return (
              <AudioCard
                number={index + 1}
                name={elem.title}
                coach={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                time={elem.audio_length}
                lesson_obj={{ ...elem, number: index + 1 }}
                key={elem}
              />
            );
          })}
        </View>

        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
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
                        elem.trainer.path_to_avatar
                      }
                      key={elem}
                    />
                    <CoachMiniCard
                      coach={`${array[index + 1].trainer.last_name} ${
                        array[index + 1].trainer.first_name
                      }`}
                      uri={
                        
                        array[index + 1].trainer.path_to_avatar
                      }
                      key={elem}
                    />
                  </>
                ) : array.slice(index, index + 2).length == 1 ? (
                  <CoachMiniCard
                    coach={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                    uri={ elem.trainer.path_to_avatar}
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
        </View>
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

export default AboutCourseListenScreen;
