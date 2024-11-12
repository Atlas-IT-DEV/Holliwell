import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import AudioReview from "../../components/audio_review";
import {
  arrow_back,
  lock_image,
  icon_share,
  icon_freeze_small,
  icon_freeze_big,
  icon_play,
  arrow_back_black,
  shareBlack,
} from "../../images/images";
import CourseCard from "../../components/train/train_mini_card";
import CoachMiniCard from "../../components/coaches/coach_mini_card";

const LessonsCourseScreen = ({
  name_course = "СТРОЙНОСТЬ И ЭНЕРГИЯ",
  about = "Откройте для себя преимущества регулярной медитации на нашем курсе, направленном на улучшение физического и эмоционального благополучия. ",
  uri = "http://legacy.reactjs.org/logo-og.png",
  route,
}) => {
  console.log(route.params.lessons);
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: route.params.path_to_cover }}
          style={{ width: "100%", height: screenHeight >= 902 ? 447 : 230 }}
        >
          {/* Разблокировать доступ */}

          {/* <View
            style={{
              width: "100%",
              height: screenHeight >= 902 ? 447 : 230,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgXml xml={arrow_back} />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgXml xml={icon_share} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <SvgXml xml={lock_image} />
              <Text
                style={{
                  fontFamily: "GeologicaRegular",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                РАЗБЛОКИРУЙТЕ ДОСТУП К ТРЕНИРОВКАМ
              </Text>
            </View>
          </View> */}

          <View
            style={{
              width: "100%",
              height: screenHeight >= 902 ? 447 : 230,
            }}
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
                <SvgXml xml={icon_share} width={20} height={20} />
              </TouchableOpacity> */}
            </View>
            {/* <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 5,
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
            >
              <Text style={{ fontFamily: "GeologicaRegular", color: "white" }}>
                ЗАМОРОЗИТЬ
              </Text>
              <SvgXml xml={icon_freeze_small} />
            </TouchableOpacity> */}
          </View>

          {/* РАЗМОРОЗИТЬ */}

          {/* <View
            style={{
              width: "100%",
              height: screenHeight >= 902 ? 447 : 230,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <SvgXml xml={arrow_back} />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgXml xml={icon_share} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <SvgXml xml={icon_freeze_big} />
              <Text
                style={{
                  fontFamily: "GeologicaRegular",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                РАЗМОРОЗИТЬ
              </Text>
            </View>
          </View> */}
        </ImageBackground>
        <View
          style={{
            alignItems: "center",
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Text style={{ fontSize: 28, fontFamily: "GeologicaRegular" }}>
            {route.params.title}
          </Text>
          <Text style={{ marginTop: 10, fontFamily: "GeologicaThin" }}>
            Курс тренировок
          </Text>
          <Text
            style={{
              fontFamily: "GeologicaLight",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Дисциплина - ключ к успеху
          </Text>

          {/* Кнопка АКТИВИРОВАТЬ ДОСТУП */}

          {/* <TouchableOpacity
            style={{
              backgroundColor: "rgba(48,48,48,1)",
              width: "100%",
              paddingHorizontal: 30,
              paddingVertical: 12,
              borderRadius: 5,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.button_text}>АКТИВИРОВАТЬ ДОСТУП</Text>
            <Text style={styles.button_text}>{price}₽</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
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
              fontFamily: "GeologicaRegular",
              fontSize: 20,
              marginTop: 30,
            }}
          >
            О курсе
          </Text>
          <Text style={{ marginTop: 10, fontFamily: "GeologicaLight" }}>
            {route.params.description}
          </Text>

          {/* <AudioReview uri={route.params.path_to_url_audio} /> */}
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
        <View style={{ marginTop: 40, gap: 20, padding: 20 }}>
          {route.params.lessons.map((elem, index) => {
            console.log(elem);
            return (
              <CourseCard
                number={index + 1}
                name={elem.title}
                uri={elem?.path_to_cover}
                description={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                time={elem.video_length}
                lesson_obj={elem}
                isPack={true}
                key={elem}
              />
            );
          })}
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
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
              fontFamily: "GeologicaRegular",
              fontSize: 28,
              marginTop: 40,
              textAlign: "center",
            }}
          >
            КОМАНДА
          </Text>
          {[
            ...new Map(
              route.params.lessons.map((lesson) => [
                `${lesson.trainer.first_name}-${lesson.trainer.last_name}`,
                lesson,
              ])
            ).values(),
          ].reduce((rows, elem, index, array) => {
            if (index % 2 === 0) {
              rows.push(
                <View
                  key={index}
                  style={{
                    marginTop: 40,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CoachMiniCard
                    coach={`${elem.trainer.last_name} ${elem.trainer.first_name}`}
                    uri={elem.trainer.path_to_avatar}
                    obj={elem}
                  />

                  {array[index + 1] && (
                    <CoachMiniCard
                      coach={`${array[index + 1].trainer.last_name} ${
                        array[index + 1].trainer.first_name
                      }`}
                      uri={array[index + 1].trainer.path_to_avatar}
                      obj={array[index + 1]}
                    />
                  )}
                </View>
              );
            }
            return rows;
          }, [])}

          <View
            style={{
              borderTopColor: "#D9D9D9",
              borderTopWidth: 1,
              borderStyle: "solid",
              width: "100%",
              marginTop: 40,
              marginBottom: 30,
            }}
          ></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button_text: {
    color: "white",
    fontFamily: "GeologicaRegular",
    fontSize: 20,
  },
});

export default LessonsCourseScreen;
