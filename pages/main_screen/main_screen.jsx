import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Animated,
  Alert,
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainScreen = observer(({ route }) => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { pageStore } = useStores();
  const [info, setInfo] = useState({
    title: "Холи",
    text: "Велл",
    path_to_video:
      "https://holiwell.ru/files/sliders/cover/5puvjRJrZyHWYE5SXqujyN/4.jpg",
  });
  const [after, setAfter] = useState({});
  const getInfo = async () => {
    const response = await fetch(
      "https://holiwell.ru:8000/api/sliders/main?slider_id=1",
      { method: "GET", headers: { accept: "application/json" } }
    );
    const result = await response.json();
    setInfo(result);
    console.log(result);
  };
  const getAfter = async () => {
    const response = await fetch("https://holiwell.ru:8000/api/sliders/7", {
      method: "GET",
      headers: { accept: "application/json" },
    });
    const result = await response.json();
    setAfter(result);
    console.log(result);
  };
  const getLink = (data) => {
    console.log(data, "ХУЙ");
    if (data.includes("/profile")) {
      data.replace("/profile", "");
    }
    if (data.includes("/calendar")) {
      data.replace("/calendar", "");
    }
    if (data.includes("/meditate")) {
      data.replace("/meditate", "");
    }
    if (data.includes("/train")) {
      data.replace("/train", "");
    }
    if (data.includes("/listening")) {
      data.replace("/listening", "");
    }
    return data;
  };
  useEffect(() => {
    pageStore.getAllTrainers();
    getInfo();
    getAfter();
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

  const insets = useSafeAreaInsets();
  const safeAreaHeight = insets.top;

  const [scrollY, setScrollY] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          {
            marginTop: safeAreaHeight,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            top: 0,
            zIndex: 4,
            height: 60,
            // backgroundColor: {scrollY >= (screenHeight-320) ? {backgroundColor:"rgba(0,0,0,0.5)"} : null}
          },
          scrollY >= 50 ? { backgroundColor: "rgba(0,0,0,0.5)" } : null,
        ]}
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
        <BurgerMenu color_burger="rgba(255, 255, 255, 1)" />
      </View>
      <ScrollView
        onScroll={(event) => {
          setScrollY(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
      >
        <SliderComponent />

        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={[styles.headerText, { marginTop: 40 }]}>
            {pageStore.token && pageStore.first_name
              ? after.title_second?.replace(
                  "@user.first_name",
                  pageStore.first_name
                )
              : after.title_first}
          </Text>
          <Text style={[styles.mainText, { marginTop: 10 }]}>
            {pageStore.token
              ? after?.text_second?.replace("календаре/profile", "")
              : after.text_first}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Text style={[styles.mainText]}>календаре</Text>
          </TouchableOpacity>
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
              style={{
                marginTop: 40,
                width: "100%",
                height: 180,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ListenScreen")}>
            <Image
              source={require("./../../images/listen.png")}
              style={{
                marginTop: 15,
                width: "100%",
                height: 180,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("MeditationScreen")}
          >
            <Image
              source={require("./../../images/meditation.png")}
              style={{
                marginTop: 15,
                width: "100%",
                height: 180,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert("Раздел временно не работает")}
          >
            <Image
              source={require("./../../images/esh.jpg")}
              style={{
                marginTop: 15,
                width: "100%",
                height: 180,
                resizeMode: "contain",
              }}
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
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={[styles.headerText, { marginTop: 40 }]}>
              {info?.title}
            </Text>
            <Text style={[styles.mainText, { marginTop: 10 }]}>
              {info?.text}
            </Text>
          </View>
          <Image
            src={{ uri: info?.path_to_video }}
            style={{ resizeMode: "cover", width: 100, height: 100 }}
          />
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
            <View style={{ gap: 25, flexDirection: "row", marginBottom: 70 }}>
              {pageStore.trainers.map((elem) => {
                return (
                  <CoachMiniCard
                    coach={`${elem.last_name} ${elem.first_name}`}
                    uri={elem.path_to_background}
                    key={elem.description}
                    obj={elem}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomMenu route={route} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
