import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoursePackCard = ({
  count = 5,
  name = "Рельеф как у Скалы",
  description = "",
  uri = "http://legacy.reactjs.org/logo-og.png",
  course_obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("LessonsCourseScreen", course_obj)}
      style={{ width: "50%" }}
    >
      <View style={{ minWidth: "45%" }}>
        <Image
          source={{ uri: uri }}
          style={{ width: "45vw", resizeMode: "cover", height: 127 }}
        />
        <Text style={{ fontFamily: "GeologicaRegular", fontSize: 16 }}>
          {name}
        </Text>
        <Text style={{ fontFamily: "GeologicaThin" }}>{description}</Text>
        <View
          style={{
            width: 86,
            height: 28,
            backgroundColor: "black",
            position: "absolute",
            left: 20,
            top: 79,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {count == 0 && (
            <Text style={{ fontFamily: "GeologicaThin", color: "white" }}>
              Нет уроков
            </Text>
          )}
          {count >= 1 ? (
            <Text style={{ fontFamily: "GeologicaThin", color: "white" }}>
              {count} {count >= 2 ? "уроков" : "урок"}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoursePackCard;
