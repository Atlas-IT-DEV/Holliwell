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

const CoachScreen = ({
  route,
  number = 1,
  name = "слушай",
  description = "неплохой урок",
  coach = "Фамилия Имя",
  about_coach = "Равным образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Разнообразный и богатый опыт сложившаяся структура организации представляет собой интересный эксперимент проверки форм развития.",
  uri = "http://legacy.reactjs.org/logo-og.png",
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: "http://154.194.52.246" + route.params.path_to_background,
        }}
        style={{ width: "100%", height: screenHeight / 2 }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginRight: 20,
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={arrow_back} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={icon_share} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 300,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "http://154.194.52.246" + route.params.path_to_avatar,
          }}
          style={{
            width: 170,
            height: 170,
            borderRadius: 170,
            borderWidth: 5,
            borderColor: "white",
            resizeMode: "stretch",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 100,
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
          {`${route.params.last_name} ${route.params.first_name}`}
        </Text>
        <Text style={{ marginTop: 30, fontFamily: "GeologicaLight" }}>
          {route.params.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CoachScreen;
