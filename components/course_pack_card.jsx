import { View, Text, Image } from "react-native";

const CoursePackCard = ({
  count = 5,
  name = "Рельеф как у Скалы",
  description = "Фамилия Имя",
  uri = "http://legacy.reactjs.org/logo-og.png",
}) => {
  return (
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
        <Text style={{ fontFamily: "GeologicaThin", color: "white" }}>{count} уроков</Text>
      </View>
    </View>
  );
};

export default CoursePackCard;
