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
  name_course = "НУ ТЫ ПОМЕДИТИРУЙ",
  about = "Откройте для себя преимущества регулярной медитации на нашем курсе, направленном на улучшение физического и эмоционального благополучия. ",
  uri = "http://legacy.reactjs.org/logo-og.png",
  count_lessons = 13,
  time_course = "2 часа 13 мин",
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: uri }}
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgXml xml={arrow_back} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={icon_share} />
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
          {name_course}
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
            {about}
          </Text>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
              // marginHorizontal: 20,
            }}
          ></View>
        </View>
        <View style={{ gap: 30 }}>
          <LessonMeditationMiniCard />
          <LessonMeditationMiniCard />
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <CoachMiniCard />
            <CoachMiniCard />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <CoachMiniCard />
            <CoachMiniCard />
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
