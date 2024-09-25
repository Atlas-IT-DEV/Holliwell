import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import BurgerMenu from "../main_screen/burger_menu";
import GetCalendar from "../../components/calendar";
import { useNavigation } from "@react-navigation/native";
import FavouritesViewedCard from "../../components/favourites_viewed_card";
import { useStores } from "../../store/store_context";
import BottomMenu from "../../components/bottom_menu";

const ProfileScreen = ({
  uri = "http://legacy.reactjs.org/logo-og.png",
  name_profile = "ФАМИЛИЯ ИМЯ",
}) => {
  const navigation = useNavigation();
  const { pageStore } = useStores();
  return (
    <SafeAreaView>
      <ScrollView>
        <BurgerMenu color_burger="rgba(18,18,18,1)" />
        <View
          style={{ marginTop: 100, alignItems: "center", marginHorizontal: 20 }}
        >
          <Image
            source={{
              uri: pageStore?.avatar_url ? pageStore?.avatar_url : uri,
            }}
            style={{ width: 90, height: 90, borderRadius: 90 }}
          />
          <Text
            style={{
              marginTop: 20,
              fontFamily: "GeologicaRegular",
              fontSize: 28,
              textAlign: "center",
            }}
          >
            {pageStore?.first_name} {pageStore?.last_name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfileScreen")}
            style={{
              marginTop: 32,
              backgroundColor: "rgba(48,48,48,1)",
              width: "100%",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 30,
                paddingVertical: 12,
                textAlign: "center",
                color: "white",
                fontFamily: "GeologicaRegular",
                fontSize: 20,
              }}
            >
              РЕДАКТИРОВАТЬ ПРОФИЛЬ
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 40,
            }}
          ></View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={{ fontSize: 20, fontFamily: "GeologicaRegular" }}>
            Календарь
          </Text>
          <Text style={{ marginTop: 10, fontFamily: "GeologicaLight" }}>
            Откройте для себя преимущества регулярной медитации на нашем курсе,
            направленном на улучшение физического и эмоционального
            благополучия...
          </Text>
          <View style={{ marginTop: 30 }}>
            <GetCalendar />
          </View>

          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
            }}
          ></View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
            ИЗБРАННОЕ
          </Text>
          <View
            style={{
              marginTop: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {/* <FavouritesViewedCard />
            <FavouritesViewedCard /> */}
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
            }}
          ></View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontFamily: "GeologicaRegular", fontSize: 20 }}>
            ПРОСМОТРЕННОЕ
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <FavouritesViewedCard />
            <FavouritesViewedCard /> */}
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginVertical: 40,
            }}
          ></View>
        </View>
      </ScrollView>
      <BottomMenu />
    </SafeAreaView>
  );
};

export default ProfileScreen;
