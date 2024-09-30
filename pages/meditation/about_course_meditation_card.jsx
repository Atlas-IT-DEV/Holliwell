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

const AboutCourseMeditationScreen = ({
  // uri = "http://legacy.reactjs.org/logo-og.png",
  route,
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  console.log(route.params.lessons);
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
            <TouchableOpacity
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
            </TouchableOpacity>
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
          <TouchableOpacity
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
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Text
            style={{
              marginTop: 30,
              fontFamily: "GeologicaLight",
            }}
          >
            {route.params.description}
          </Text>
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
              <LessonMeditationMiniCard
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

export default AboutCourseMeditationScreen;
