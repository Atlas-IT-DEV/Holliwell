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
import RegistrationForm from "./registration_form";

const RegistrationScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../images/woman.png")}
        style={{ height: screenHeight >= 902 ? 447 : 230, width: "100%" }}
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
      </ImageBackground>
      <RegistrationForm />
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

export default RegistrationScreen;
