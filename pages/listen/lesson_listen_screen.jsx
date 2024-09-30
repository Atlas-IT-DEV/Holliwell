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
} from "../../images/images";
import { SvgXml } from "react-native-svg";
import { useStores } from "../../store/store_context";

const LessonListenScreen = ({ route }) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const { pageStore } = useStores();

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Функция для загрузки и проигрывания звука
  const loadAndPlayAudio = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync({
        uri: route.params.path_to_audio,
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
  useEffect(() => {
    console.log(pageStore.liked);
  }, [pageStore.liked]);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: route.params.path_to_cover }}
          style={{ width: "100%", height: screenHeight >= 902 ? 447 : 230 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginRight: 20,
              marginLeft: 20,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "rgba(18,18,18,1)",
                width: 35,
                height: 35,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgXml xml={arrow_back} width={20} height={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(18,18,18,1)",
                width: 35,
                height: 35,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgXml xml={icon_share} width={20} height={20} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontFamily: "GeologicaRegular" }}>
            Урок {route.params.number}: {route.params.title}
          </Text>
          <View style={{ flexDirection: "row", gap: 30, marginTop: 30 }}>
            <Text
              style={{ fontFamily: "GeologicaThin" }}
            >{`${route.params.trainer.last_name} ${route.params.trainer.first_name}`}</Text>
            <Text style={{ fontFamily: "GeologicaThin" }}>
              {route.params.audio_length}
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: 20,
              marginRight: 20,
              gap: 20,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                backgroundColor: "rgba(48, 48, 48, 1)",
                width: "45%",
                borderRadius: 5,
              }}
              onPress={playPauseAudio}
            >
              <Text style={{ color: "white" }}>
                {isPlaying ? "ОСТАНОВИТЬ" : "СЛУШАТЬ"}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                borderColor: "rgba(18, 18, 18, 1)",
                borderStyle: "solid",
                borderWidth: 2,
                borderRadius: 5,
                width: "45%",
              }}
              onPress={() => {
                console.log(route.params.id);
                pageStore.likeLesson(route.params.id);
              }}
            >
              <Text>В ИЗБРАННОЕ</Text>
            </TouchableOpacity> */}
          </View>
          {/* <TouchableOpacity
            style={{ flexDirection: "row", gap: 5, marginTop: 30 }}
          >
            <Text
              style={{
                fontFamily: "GeologicaRegular",
                color: "rgba(162, 162, 162, 1)",
              }}
            >
              ЗАПЛАНИРОВАТЬ
            </Text>
            <SvgXml xml={icon_calendar} />
          </TouchableOpacity> */}
        </View>
        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
            }}
          ></View>
          <Text
            style={{
              marginTop: 30,
              fontFamily: "GeologicaRegular",
              fontSize: 20,
            }}
          >
            ОПИСАНИЕ УРОКА
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: "GeologicaLight",
              lineHeight: 20,
            }}
          >
            {route.params.description}
          </Text>
          {/* <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: "underline",
                marginTop: 10,
                fontFamily: "GeologicaThin",
              }}
            >
              Читать дальше
            </Text>
          </TouchableOpacity> */}

          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
              marginTop: 30,
            }}
          ></View>
        </View>

        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../images/team1.png")} />
            <View>
              <Text
                style={{
                  fontFamily: "GeologicaLight",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Тренер урока
              </Text>
              <Text
                style={{
                  fontFamily: "GeologicaLight",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                {`${route.params.trainer.last_name} ${route.params.trainer.first_name}`}
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, fontFamily: "GeologicaLight" }}>
            {route.params.trainer.description}
          </Text>

          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() =>
              navigation.navigate("CoachScreen", route.params.trainer)
            }
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                borderBottomColor: "black",
                borderBottomWidth: 1.2,
                width: 107,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: "GeologicaRegular" }}>
                ПОДРОБНЕЕ
              </Text>
              <SvgXml xml={arrow_link} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
              marginTop: 30,
              marginBottom: 30,
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonListenScreen;
