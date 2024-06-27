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
            <Image
              source={require("./../../images/arrow_back.png")}
              style={{ width: 28, height: 28 }}
            />
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
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Image source={require("./../../images/team1.png")} />
            <Text style={{ textAlign: "center" }}>Фамилия Имя</Text>
          </View>
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
    height:'100%'
  },
  topImage: {
    width: "100%",
  },
});

export default TeamScreen;
