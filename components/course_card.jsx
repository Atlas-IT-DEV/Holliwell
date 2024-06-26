import { View, Text, Image } from "react-native";

const CourseCard = ({
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40"
}) => {
  return (
    <View style={{ minWidth: "45%" }}>
      <Image
        source={{ uri: uri }}
        style={{ width: "45vw", resizeMode: "cover", height: 127 }}
      />
      <Text style={{ fontFamily: "GeologicaRegular", fontSize: 16 }}>
        Урок {number}: {name}
      </Text>
      <Text style={{fontFamily: "GeologicaThin"}}>{description}</Text>
      <View style={{width: 53, height: 28, backgroundColor: "white", position: "absolute", left: 20, top: 79, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontFamily: "GeologicaThin"}}>
          {time}
        </Text>
      </View>
    </View>
  );
};

export default CourseCard;
