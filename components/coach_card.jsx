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
        source={{ uri: uri }}
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
          <TouchableOpacity>
            <SvgXml xml={arrow_back}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={icon_share}/>
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
          source={{ uri: uri }}
          style={{
            width: 170,
            height: 170,
            borderRadius: "100%",
            borderWidth: 5,
            borderColor: "white",
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
          {coach}
        </Text>
        <Text style={{ marginTop: 30, fontFamily: "GeologicaLight" }}>
          {about_coach}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CoachScreen;
