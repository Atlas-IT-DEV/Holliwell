import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { arrow_back, icon_share } from "../images/images";
import { SvgXml } from "react-native-svg";

const CourseListenMiniCard = ({
  name = "Выдающийся рельеф",
  uri = "http://legacy.reactjs.org/logo-og.png",
  price = "1990",
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <Image source={{ uri: uri }} style={{ height: 235 }} />
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
        onPress={() => navigation.navigate("AboutCourseListenScreen")}
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

export default CourseListenMiniCard;
