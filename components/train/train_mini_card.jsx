import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40",
  isPack = false,
  lesson_obj = {},
  coach,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(lesson_obj);
        navigation.navigate("LessonScreen", lesson_obj);
      }}
    >
      <View style={{ minWidth: "45%" }}>
        <Image
          source={{ uri: uri }}
          style={{
            width: isPack ? 350 : 170,
            resizeMode: "cover",
            height: 127,
          }}
        />
        <Text
          style={{
            fontFamily: "GeologicaRegular",
            fontSize: 16,
            width: isPack ? 350 : 170,
          }}
        >
          {name}
        </Text>
        <Text
          style={{ fontFamily: "GeologicaThin", width: isPack ? 350 : 170 }}
        >
          {description}
        </Text>
        <View
          style={{
            width: 80,
            maxWidth: 100,
            height: 28,
            backgroundColor: "white",
            position: "absolute",
            left: 20,
            top: 79,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "GeologicaThin" }}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
