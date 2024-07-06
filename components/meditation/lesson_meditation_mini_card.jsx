import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";


const LessonMeditationMiniCard = ({
  uri = "http://legacy.reactjs.org/logo-og.png",
  number_lesson = "1",
  time = "34:44",
  name = "ПОМЕДИТИРУЙ",
  coach = "Фамилия Имя",
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("LessonMeditationScreen")}>
        <Image source={{ uri: uri }} style={{ width: "100%", height: 251 }} />
        <View
          style={{
            backgroundColor: "white",
            width: 30,
            height: 30,
            position: "absolute",
            top: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "GeologicaLight" }}>{number_lesson}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 5,
            position: "absolute",
            bottom: 20,
            left: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "GeologicaLight" }}>{time}</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontFamily: "GeologicaRegular",
          fontSize: 20,
        }}
      >
        Медитация {number_lesson}: {name}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontFamily: "GeologicaThin",
        }}
      >
        {coach}
      </Text>
    </View>
  );
};

export default LessonMeditationMiniCard;
