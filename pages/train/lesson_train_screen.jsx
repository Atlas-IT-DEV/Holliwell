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
import {
  arrow_back,
  arrow_back_black,
  arrow_link,
  icon_calendar,
  icon_share,
  shareBlack,
} from "../../images/images";
import { SvgXml } from "react-native-svg";
import { useEffect } from "react";
import { useStores } from "../../store/store_context";

const LessonScreen = ({
  number = 1,
  name = "Название урока",
  description = "В бар заходит лошадь. Снимает пальто, шляпу. Вешает на вешалку. Подходит стойке и говорит бармену...",
  about = "Откройте для себя преимущества регулярной медитации на нашем курсе, направленном на улучшение физического и эмоционального благополучия. ",
  coach = "Фамилия имя",
  uri = "http://legacy.reactjs.org/logo-og.png",
  time = "22:40",
  route,
}) => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  const { pageStore } = useStores();
  useEffect(() => {
    console.log(route.params);
  }, [route]);
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: route.params?.path_to_cover }}
          style={{ width: "100%", height: screenHeight >= 902 ? 447 : 230 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginHorizontal: 20,
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
            {/* <TouchableOpacity
              style={{
                backgroundColor: "rgba(18,18,18,1)",
                width: 35,
                height: 35,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgXml xml={icon_share} width={20} />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "GeologicaRegular",
              textAlign: "left",
              paddingHorizontal: 20,
            }}
          >
            {route.params.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "GeologicaThin",
                textAlign: "left",
                display: "flex",
                alignSelf: "center",
              }}
            >
              Тренер:{" "}
            </Text>
            <Text
              style={{
                fontFamily: "GeologicaThin",
                textAlign: "left",
                display: "flex",
                alignSelf: "center",
                textDecorationLine: "underline",
              }}
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
              onPress={() => navigation.navigate("VideoScreen")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                СМОТРЕТЬ
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
        {/* <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
            До тренировки
          </Text>
          <Image
            source={require("../../images/woman_card.png")}
            style={{ width: "100%", marginTop: 30 }}
          />
          <Text style={{ fontFamily: "GeologicaLight", marginTop: 10 }}>
            Разминка 1
          </Text>
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
          <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
            После тренировки
          </Text>
          <Image
            source={require("../../images/woman_card.png")}
            style={{ width: "100%", marginTop: 30 }}
          />
          <Text style={{ fontFamily: "GeologicaLight", marginTop: 10 }}>
            Разминка 2
          </Text>
          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
              marginTop: 30,
            }}
          ></View>
        </View> */}
        <View style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: route.params.trainer.path_to_avatar }}
              style={{
                width: 200,
                resizeMode: "stretch",
                height: 200,
                borderRadius: 100,
              }}
            />
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

export default LessonScreen;
