import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrivacyPolicyScreen from "../privacy_policy_screen";

const IntroScreen2 = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../images/fullscreen_woman.png")}
        style={{ height: screenHeight, width: "100%" }}
      >
        <Text
          style={{
            fontSize: 30,
            marginTop: 30,
            justifyContent: "center",
            alignSelf: "center",
            color: "white",
          }}
        >
          HOLIWELL
        </Text>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text
            style={{
              marginTop: 300,
              marginBottom: 20,
              fontSize: 40,
              color: "white",
              fontFamily: "GeologicaMedium"
            }}
          >
            Большой {"\n"}Заголовок {"\n"}в три строки
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontFamily: "GeologicaLight" }}>
            Описание приложения в три строки...
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontFamily: "GeologicaLight" }}>
            Описание приложения в три строки...
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontFamily: "GeologicaLight" }}>
            Описание приложения в три строки...
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(PrivacyPolicyScreen)}
            style={{
              marginTop: 20,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              paddingTop: 12,
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 12,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontFamily: "GeologicaRegular"
              }}
            >
              Продолжить
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  topImage: {
    width: "100%",
  },
});

export default IntroScreen2;
