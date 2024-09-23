import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { icon_continue, icon_play } from "../../images/images";
import LessonListenScreen from "../../pages/listen/lesson_listen_screen";


const AudioCard = ({
  number = 1,
  name = "НУ ТЫ ПОСЛУШАЙ",
  coach = "Фамилия Имя",
  time = "13:30",
  lesson_obj = {}
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("LessonListenScreen", lesson_obj)}>
      <Text
        style={{
          position: "absolute",
          right: 0,
          top: 10,
          fontFamily: "GeologicaThin",
        }}
      >
        {time}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <SvgXml xml={icon_play} />
          <View>
            <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
              Урок {number}: {name}
            </Text>
            <Text style={{ fontFamily: "GeologicaThin" }}>{coach}</Text>
          </View>
        </View>
        <SvgXml xml={icon_continue} />
      </View>
      <View
        style={{
          borderBottomColor: "#D9D9D9",
          borderBottomWidth: 1,
          width: "100%",
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default AudioCard;
