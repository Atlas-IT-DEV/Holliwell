import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  Image,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(1)).current;

  const toggleMenu = () => {
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  return (
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
        onPress={toggleMenu}
        style={{ marginTop: 40, alignSelf: "center", width: 28 }}
      >
        <Animated.View style={{ opacity, transform: [{ scale }] }}>
          <MaterialIcons name="menu" size={38} color="white" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={{
          opacity,
          transform: [{ scale }],
        }}
      >
        <MenuContent />
      </Animated.View>
    </View>
  );
};

const MenuContent = () => {
  return (
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <Text style={{ color: "black", fontSize: 60 }}>Hello</Text>
    </View>
  );
};
export default BurgerMenu;
