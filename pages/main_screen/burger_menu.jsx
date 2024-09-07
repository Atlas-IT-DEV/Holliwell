import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useStores } from "../../store/store_context";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const BurgerMenu = ({ color_burger = "" }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const animationValue = useState(new Animated.Value(0))[0];
  const { pageStore } = useStores();
  const navigation = useNavigation();

  const toggleMenu = () => {
    if (isMenuVisible) {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start(() => setIsMenuVisible(false));
    } else {
      setIsMenuVisible(true);
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  };

  const menuHeight = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height + 50],
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!isMenuVisible ? (
        <TouchableOpacity style={styles.burgerButton} onPress={toggleMenu}>
          <Text style={[styles.burgerText, { color: color_burger }]}>☰</Text>
        </TouchableOpacity>
      ) : null}
      {isMenuVisible && (
        <Animated.View style={[styles.menuContainer, { height: menuHeight }]}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.menuContent}>
            <Text
              style={{
                fontSize: 30,
                justifyContent: "center",
                alignSelf: "center",
                color: "white",
                marginBottom: 50,
              }}
            >
              HOLIWELL
            </Text>
            <TouchableOpacity style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "black",
                  paddingHorizontal: 30,
                  paddingVertical: 12,
                  backgroundColor: "white",
                  borderRadius: 5,
                  fontFamily: "GeologicaRegular",
                }}
              >
                АКТИВИРОВАТЬ ДОСТУП
              </Text>
            </TouchableOpacity>
            <View style={styles.menuLinks}>
              <TouchableOpacity
                onPress={() => navigation.navigate("TrainScreen")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                  }}
                >
                  ТРЕНИРУЙСЯ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("ListenScreen")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                  }}
                >
                  СЛУШАЙ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("MeditationScreen")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                  }}
                >
                  МЕДИТИРУЙ
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuLinks}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                    color: "rgba(162, 162, 162, 1)",
                  }}
                >
                  О HOLIWELL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                    color: "rgba(162, 162, 162, 1)",
                  }}
                >
                  ПОДПИСКА
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                    color: "rgba(162, 162, 162, 1)",
                  }}
                >
                  ПОДДЕРЖКА
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuLinks}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                    color: "rgba(162, 162, 162, 1)",
                  }}
                >
                  ТЕЛЕГРАММ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  display: "flex",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    fontFamily: "GeologicaRegular",
                    color: "rgba(162, 162, 162, 1)",
                  }}
                >
                  САЙТ
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileScreen")}
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  marginTop: 30,
                  fontFamily: "GeologicaRegular",
                  color: "rgba(162, 162, 162, 1)",
                }}
              >
                ПРОФИЛЬ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                display: "flex",
                alignContent: "center",
                alignSelf: "center",
              }}
              onPress={() => {
                pageStore.logout();
                navigation.navigate("LoginScreen");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  marginTop: 30,
                  fontFamily: "GeologicaRegular",
                  color: "rgba(162, 162, 162, 1)",
                }}
              >
                ВЫЙТИ
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
  },
  burgerButton: {
    position: "absolute",
    top: 40,
    right: 15,
    zIndex: 2,
  },
  burgerText: {
    fontSize: 30,
  },
  menuContainer: {
    position: "absolute",
    top: 34,
    left: 0,
    width: width,
    backgroundColor: "rgb(48, 48, 48)",
    zIndex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 26,
    right: 20,
  },
  closeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  menuContent: {
    marginTop: 26,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 99999,
  },
  menuItem: {
    fontSize: 24,
    color: "#fff",
    marginVertical: 10,
  },
  menuLinks: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: 230,
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});

export default BurgerMenu;
