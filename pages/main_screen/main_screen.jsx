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
import { useStores } from "../../store/store_context";
import BurgerMenu from "./burger_menu";
import CoachMiniCard from "../../components/coaches/coach_mini_card";
import { SvgXml } from "react-native-svg";
import { arrow_link } from "../../images/images";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import SliderComponent from "../../components/slider";
import BottomMenu from "../../components/bottom_menu";

const MainScreen = observer(() => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { pageStore } = useStores();
  const [info, setInfo] = useState({ title: "Холи", text: "Велл" });
  const getInfo = async () => {
    const response = await fetch(
      "https://holiwell.ru:8000/api/sliders/main?slider_id=1",
      { method: "GET", headers: { accept: "application/json" } }
    );
    const result = await response.json();
    setInfo(result);
  };
  useEffect(() => {
    pageStore.getAllTrainers();
    getInfo();
    pageStore.login({ email: "user1212@example.com", password: "12345" });
    //Только для тестов убрать потом !!!!!!!
  }, []);
  useEffect(() => {
    console.log(pageStore.trainers);
  }, [pageStore.trainers]);
  useEffect(() => {
    if (pageStore.token) {
      pageStore.getMe();
    }
  }, [pageStore.token]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BurgerMenu color_burger="rgba(255, 255, 255, 1)" />
        <SliderComponent />

        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              width: "100%",
            }}
          >
            HOLIWELL
          </Text>
        </View>

        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={[styles.headerText, { marginTop: 40 }]}>
            ДОБРО ПОЖАЛОВАТЬ
            {pageStore.first_name != "" &&
              pageStore.first_name != null &&
              ","}{" "}
            {"\n"}
            {pageStore.first_name}
          </Text>
          <Text style={[styles.mainText, { marginTop: 10 }]}>
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
          <TouchableOpacity onPress={() => navigation.navigate("TrainScreen")}>
            <Image
              source={require("./../../images/train.png")}
              style={{ marginTop: 40, width: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ListenScreen")}>
            <Image
              source={require("./../../images/listen.png")}
              style={{ marginTop: 40, width: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("MeditationScreen")}
          >
            <Image
              source={require("./../../images/meditation.png")}
              style={{ marginTop: 40, width: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Text style={[styles.headerText, { marginTop: 40 }]}>
            {info?.title}
          </Text>
          <Text style={[styles.mainText, { marginTop: 10 }]}>{info?.text}</Text>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <Text style={styles.headerText}>КОМАНДА</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TeamScreen")}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  borderBottomColor: "black",
                  borderBottomWidth: 1.2,
                }}
              >
                <Text style={{ fontSize: 14, fontFamily: "GeologicaRegular" }}>
                  смотреть все
                </Text>
                <SvgXml xml={arrow_link} />
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={{ marginTop: 20, marginBottom: 30, paddingBottom: 10 }}
          >
            <View style={{ gap: 20, flexDirection: "row", marginBottom: 70}}>
              {pageStore.trainers.map((elem) => {
                return (
                  <CoachMiniCard
                    coach={`${elem.last_name} ${elem.first_name}`}
                    uri={elem.path_to_background}
                    key={elem.description}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomMenu />
    </SafeAreaView>
  );
});

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
  headerText: {
    fontSize: 28,
    fontFamily: "GeologicaRegular",
  },
  mainText: {
    fontSize: 14,
    fontFamily: "GeologicaLight",
  },
});

export default MainScreen;
