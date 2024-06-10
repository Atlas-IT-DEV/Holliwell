import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BurgerMenu = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 90,
          marginRight: 20,
        }}
      >
        <Text
          style={{
            marginTop: 40,
            alignSelf: "center",
            fontSize: 30,
            color: "white",
          }}
        >
          HOLIWELL
        </Text>
        <TouchableOpacity
          style={{ marginTop: 40, alignSelf: "center", width: 28 }}
        >
          <Image source={require("./../../images/close_button.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
  },
});

export default BurgerMenu;
