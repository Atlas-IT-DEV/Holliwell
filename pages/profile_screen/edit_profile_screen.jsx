import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrow_back_black, icon_eye } from "../../images/images";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../store/store_context";
import { observer } from "mobx-react-lite";

const EditProfileScreen = observer(
  ({
    uri = "http://legacy.reactjs.org/logo-og.png",
    name = "Ваше имя",
    surname = "Ваша фамилия",
    mail = "mail@mail.ru",
    password = "12345",
  }) => {
    const navigation = useNavigation();
    const { pageStore } = useStores();

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{ top: 10 }}
            onPress={() => navigation.goBack()}
          >
            <SvgXml xml={arrow_back_black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              width: "100%",
              top: 10,
              textAlign: "center",
              position: "absolute",
              zIndex: -1,
              fontFamily: "GeologicaRegular",
            }}
          >
            Редактирование профиля
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 70 }}>
          <Image
            source={{
              uri: pageStore?.avatar_link ? pageStore?.avatar_link : uri,
            }}
            style={{ width: 90, height: 90 }}
          />
          <TouchableOpacity >
            <Text style={{ marginTop: 20, fontFamily: "GeologicaRegular" }}>
              СМЕНИТЬ ФОТО
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 30,
              marginBottom: 20,
            }}
          ></View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Имя</Text>
            <Text style={styles.inputData}>{pageStore?.first_name}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>фамилия</Text>
            <Text style={styles.inputData}>{pageStore?.last_name}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <Text style={styles.inputData}>{pageStore?.email}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          {/* <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Пароль</Text>
          <Text style={styles.inputData}>{password}</Text>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <SvgXml xml={icon_eye} />
          </TouchableOpacity>
        </View> */}
          <View
            style={{
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputText: {
    color: "rgba(162,162,162,1)",
    width: 100,
    textAlign: "left",
    fontFamily: "GeologicaLight",
    fontSize: 20,
  },
  inputData: {
    textAlign: "left",
    fontFamily: "GeologicaLight",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
  },
});

export default EditProfileScreen;
