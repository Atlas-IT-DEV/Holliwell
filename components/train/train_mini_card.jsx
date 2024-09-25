import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40",
  isPack = false,
  lesson_obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(lesson_obj);
        navigation.navigate("LessonScreen", lesson_obj[0]);
      }}
    >
      <View style={{ minWidth: "45%" }}>
        <Image
          source={{ uri: uri }}
          style={{
            width: isPack ? "100%" : "45vw",
            resizeMode: "cover",
            height: 127,
          }}
        />
        <Text style={{ fontFamily: "GeologicaRegular", fontSize: 16 }}>
          Урок {number}: {name}
        </Text>
        <Text style={{ fontFamily: "GeologicaThin" }}>{description}</Text>
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
