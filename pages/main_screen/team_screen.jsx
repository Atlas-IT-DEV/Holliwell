import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CoachMiniCard from "../../components/coaches/coach_mini_card";
import { arrow_back_black } from "../../images/images";
import { SvgXml } from "react-native-svg";

const TeamScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{ top: 10 }}
            onPress={() => navigation.navigate("MainScreen")}
          >
            <SvgXml xml={arrow_back_black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "GeologicaRegular",
              width: "100%",
              top: 10,
              textAlign: "center",
              position: "absolute",
              zIndex: -1,
            }}
          >
            Команда
          </Text>
        </View>
        <View
          style={{
            marginTop: 66,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CoachMiniCard />
          <CoachMiniCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
  },
  topImage: {
    width: "100%",
  },
});

export default TeamScreen;
