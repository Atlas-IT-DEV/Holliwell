import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { arrow_back, icon_share } from "../../images/images";
import { SvgXml } from "react-native-svg";

const CourseListenMiniCard = ({
  name = "СЛУШАЙ",
  uri = "http://legacy.reactjs.org/logo-og.png",
  price = "1990",
  course_obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AboutCourseListenScreen", course_obj)}
    >
      <View>
        {<Image source={{ uri: uri }} style={{ height: 200, width: 170 }} />}
        {/* <View
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
      </View> */}
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontFamily: "GeologicaRegular",
            fontSize: 12,
            maxWidth: 170,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "GeologicaLight",
            fontSize: 18,
          }}
        >
          {price}₽
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AboutCourseListenScreen", course_obj)
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
    </TouchableOpacity>
  );
};

export default CourseListenMiniCard;
