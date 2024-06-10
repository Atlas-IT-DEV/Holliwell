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
import BurgerMenu from "./burger_menu";
import { useState } from "react";

const MainScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("./../../images/woman_main.png")}
          style={{ width: "100%", height: screenHeight }}
        >
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
              <Image source={require("./../../images/bar_button.png")} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 40,
              color: "white",
              alignSelf: "center",
              marginTop: 250,
            }}
          >
            Медитируй
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 300,
              marginRight: 44,
              marginLeft: 44,
              textAlign: "center",
            }}
          >
            Отличный способ научиться сосредоточиться, снизить стресс и улучшить
            свое общее самочувствие
          </Text>
        </ImageBackground>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={{ marginTop: 40, fontSize: 28 }}>
            Добро пожаловать, {"\n"}Name
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14 }}>
            Не ограничивай себя в движении, {"\n"}
            {"\n"}В здоровом теле здоровый дух. Регулярная практика и позитивный
            настрой дадут тебе энергию для реализации твоей цели 🎯
          </Text>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Image
            source={require("./../../images/train.png")}
            style={{ marginTop: 40, width: "100%" }}
          />
          <Image
            source={require("./../../images/listen.png")}
            style={{ marginTop: 40, width: "100%" }}
          />
          <Image
            source={require("./../../images/meditation.png")}
            style={{ marginTop: 40, width: "100%" }}
          />
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Text style={{ fontSize: 28, marginTop: 40 }}>О HOLIWELL</Text>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: 300 }}>
            Равным образом дальнейшее развитие различных форм деятельности
            влечет за собой процесс внедрения и модернизации соответствующий
            условий активизации. Разнообразный и богатый опыт сложившаяся
            структура организации представляет собой интересный эксперимент
            проверки форм развития.
          </Text>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Text style={{ fontSize: 28, marginTop: 40 }}>КОМАНДА</Text>
          <ScrollView horizontal style={{ marginTop: 20, marginBottom: 30 }}>
            <View style={{ gap: 20, flexDirection: "row" }}>
              <View style={{ gap: 10 }}>
                <Image source={require("./../../images/team1.png")} />
                <Text style={{ alignSelf: "center" }}>Фамилия и имя</Text>
              </View>
              <View style={{ gap: 10 }}>
                <Image source={require("./../../images/team1.png")} />
                <Text style={{ alignSelf: "center" }}>Фамилия и имя</Text>
              </View>
              <View style={{ gap: 10 }}>
                <Image source={require("./../../images/team1.png")} />
                <Text style={{ alignSelf: "center" }}>Фамилия и имя</Text>
              </View>
              <View style={{ gap: 10 }}>
                <Image source={require("./../../images/team1.png")} />
                <Text style={{ alignSelf: "center" }}>Фамилия и имя</Text>
              </View>
            </View>
          </ScrollView>
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
  },
  topImage: {
    width: "100%",
  },
});

export default MainScreen({});
