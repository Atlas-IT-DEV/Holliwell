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

const MainScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { pageStore } = useStores();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          {
            // marginTop: 20,
            // width: "100%",
            // display: "flex",
            // alignContent: "center",
            // flexDirection: "column",
          }
        }
      >
        {/* <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            alignSelf: "center",
            color: "white",
            marginBottom: 60,
          }}
        >
          HOLIWELL
        </Text> */}
      </View>

      <ScrollView>
        <BurgerMenu />
        <ImageBackground
          source={require("./../../images/woman_main.png")}
          style={{ width: "100%", height: 600 }}
        >
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
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
          <Text
            style={{
              fontSize: 40,
              color: "white",
              alignSelf: "center",
              marginTop: 220,
              fontFamily: "GeologicaMedium",
            }}
          >
            МЕДИТИРУЙ
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "300",
              marginRight: 44,
              marginLeft: 44,
              textAlign: "center",
              fontFamily: "GeologicaLight",
            }}
          >
            Отличный способ научиться сосредоточиться, снизить стресс и улучшить
            свое общее самочувствие
          </Text>
        </ImageBackground>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 28,
              fontFamily: "GeologicaRegular",
            }}
          >
            ДОБРО ПОЖАЛОВАТЬ
            {pageStore.first_name != "" &&
              pageStore.first_name != null &&
              ","}{" "}
            {"\n"}
            {pageStore.first_name}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              fontFamily: "GeologicaLight",
            }}
          >
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

          <Image
            source={require("./../../images/listen.png")}
            style={{ marginTop: 40, width: "100%", resizeMode: "contain" }}
          />
          <Image
            source={require("./../../images/meditation.png")}
            style={{ marginTop: 40, width: "100%", resizeMode: "contain" }}
          />
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
          <Text
            style={{
              fontSize: 28,
              marginTop: 40,
              fontFamily: "GeologicaRegular",
            }}
          >
            О HOLIWELL
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              fontFamily: "GeologicaLight",
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <Text style={{ fontSize: 28, fontFamily: "GeologicaRegular" }}>
              КОМАНДА
            </Text>
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
                <Text style={{ fontSize: 14, fontFamily: "GeologicaRegular" }}>смотреть все</Text>
                <Image
                  source={require("./../../images/arrow_link.png")}
                  style={{ width: 10, height: 10 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={{ marginTop: 20, marginBottom: 30, paddingBottom: 10 }}
          >
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

export default MainScreen;
