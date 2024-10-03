import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { homeAct, profileAct } from "../images/images";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = ({ active, inactive }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        borderTopColor: "rgba(217, 217, 217, 1)",
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 70,
        borderTopWidth: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center", gap: 3 }}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <SvgXml xml={homeAct} />
        <Text>Домой</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", gap: 3 }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <SvgXml xml={profileAct} />
        <Text>Профиль</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
