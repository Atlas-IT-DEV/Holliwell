import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40",
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("LessonScreen")}>
      <View style={{ minWidth: "45%" }}>
        <Image
          source={{ uri: uri }}
          style={{ width: "45vw", resizeMode: "cover", height: 127 }}
        />
        <Text style={{ fontFamily: "GeologicaRegular", fontSize: 16 }}>
          Урок {number}: {name}
        </Text>
        <Text style={{ fontFamily: "GeologicaThin" }}>{description}</Text>
        <View
          style={{
            width: 53,
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
