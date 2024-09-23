import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CourseMeditationMiniCard = ({
  name = "Медитация 1",
  uri = "http://legacy.reactjs.org/logo-og.png",
  price = "1990",
  course_obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={{ uri: uri }} style={{ height: 235, width: 175 }} />
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: "rgba(48, 48, 48, 1)",
          paddingHorizontal: 8,
          paddingVertical: 5,
        }}
      >
        <Text style={{ color: "white", fontFamily: "GeologicaThin" }}>
          для дома
        </Text>
      </View>
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontFamily: "GeologicaRegular",
          fontSize: 16,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "GeologicaLight",
          fontSize: 20,
        }}
      >
        {price}₽
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AboutCourseMeditationScreen", course_obj)
        }
        style={{
          borderColor: "black",
          borderWidth: 2,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 30,
            paddingVertical: 12,
            textAlign: "center",
            fontFamily: "GeologicaRegular",
            fontSize: 20,
          }}
        >
          КУПИТЬ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourseMeditationMiniCard;
