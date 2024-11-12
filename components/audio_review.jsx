import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import {
  arrow_back,
  arrow_link,
  icon_calendar,
  icon_share,
} from "../images/images";
import { icon_play, icon_stop } from "../images/images";
import { SvgXml } from "react-native-svg";
const AudioReview = ({
  uri,
  text = "Аудиозапись",
  length = "0",
  trainer = {},
}) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Функция для загрузки и проигрывания звука
  const loadAndPlayAudio = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync({
        uri: uri,
      });
      setSound(newSound);

      newSound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish) {
          await newSound.stopAsync();
          await newSound.unloadAsync();
          setSound(null);
          setIsPlaying(false);
        }
      });

      await newSound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.log("Ошибка при загрузке/проигрывании аудио:", error);
    }
  };

  // Функция для остановки звука
  const pauseAudio = async () => {
    try {
      if (sound && isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log("Ошибка при остановке аудио:", error);
    }
  };

  // Основная функция для проигрывания/остановки аудио
  const playPauseAudio = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await pauseAudio();
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      } else {
        await loadAndPlayAudio();
      }
    } catch (error) {
      console.log("Ошибка при управлении воспроизведением аудио:", error);
    }
  };

  // Очистка ресурса звука при размонтировании компонента
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderTopColor: "rgba(217,217,217,1)",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(217,217,217,1)",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
      }}
      onPress={playPauseAudio}
    >
      <SvgXml xml={isPlaying ? icon_stop : icon_play} />
      <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
        {text}
      </Text>
      <Text
        style={{ position: "absolute", top: 5, right: 15, fontWeight: 300 }}
      >
        {length?.slice(4, length.length)}
      </Text>
      <Text
        style={{ position: "absolute", bottom: 1, left: 80, fontWeight: 300 }}
      >
        {trainer?.first_name} {trainer?.last_name}
      </Text>
    </TouchableOpacity>
  );
};

export default AudioReview;
