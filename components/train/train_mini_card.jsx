import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { icon_continue, icon_play, videoIcon } from "../../images/images";
import { SvgXml } from "react-native-svg";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40",
  coach = "",
  lesson_obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("LessonScreen", lesson_obj)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <SvgXml xml={videoIcon} />
          <View>
            <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
              Урок {number}: {name}
            </Text>
            <Text style={{ fontFamily: "GeologicaThin" }}>{coach}</Text>
          </View>
        </View>
        <SvgXml xml={icon_continue} />
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
