import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "./login_form";

const LoginScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../images/login_boobs.png")}
        style={{ height: screenHeight >= 902 ? 447 : 250 }}
      />
      <LoginForm />
      {/* <TouchableOpacity onPress={() => navigation('LoginScreen')}></TouchableOpacity> */}
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

export default LoginScreen;
