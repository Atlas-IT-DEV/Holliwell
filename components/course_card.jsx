import { View, Text, Image } from "react-native";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  uri = "http://legacy.reactjs.org/logo-og.png",
}) => {
  return (
    <View style={{ minWidth: "45%" }}>
      <Image
        source={{ uri: uri }}
        style={{ width: "45vw", resizeMode: "cover", height: 127 }}
      />
      <Text style={{ fontWeight: "bold" }}>
        Урок {number}: {name}
      </Text>
      <Text>{description}</Text>
    </View>
  );
};

export default CourseCard;
