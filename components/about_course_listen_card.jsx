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
} from "../images/images";
import CourseCard from "./course_card";
import CoachMiniCard from "./coach_mini_card";

const AboutCourseListenScreen = ({
  name_course = "ВЫДАЮЩИЙСЯ РЕЛЬЕФ",
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
            <TouchableOpacity>
              <SvgXml xml={arrow_back_black} />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={{ uri: uri }}
          style={{
            width: 220,
            height: 220,
            marginTop: 10,
            alignSelf: "center",
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
            {name_course}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "GeologicaLight",
              textAlign: "center",
            }}
          >
            {about}
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
              Занятий: {count_lessons}
            </Text>
            <Text style={{ fontFamily: "GeologicaThin" }}>{time_course}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
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
