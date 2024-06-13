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
import MainScreen from "./main_screen";

const PrivacyPolicyScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={{ fontSize: 28 }}>
            Политика в отношении обработки персональных данных
          </Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>
            1. Общие положения
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '300' }}>
            Настоящая политика обработки персональных данных составлена в
            соответствии с требованиями Федерального закона от 27.07.2006. №
            152-ФЗ «О персональных данных» (далее — Закон о персональных данных)
            и определяет порядок обработки персональных данных и меры по
            обеспечению безопасности персональных данных, предпринимаемые
            Михайловым Иваном Сергеевичем (далее — Оператор). {"\n"} {"\n"}
            1.1. Оператор ставит своей важнейшей целью и условием осуществления
            своей деятельности соблюдение прав и свобод человека и гражданина
            при обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну. 1.2.
            Настоящая политика Оператора в отношении обработки персональных
            данных (далее — Политика) применяется ко всей информации, которую
            Оператор может получить о посетителях веб-сайта
            httpsː//thismywebsite·com.
          </Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>
            2. Основные понятия, используемые в Политике
          </Text>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '300' }}>
            2.1. Автоматизированная обработка персональных данных — обработка
            персональных данных с помощью средств вычислительной техники. {"\n"}{" "}
            {"\n"}2.2. Блокирование персональных данных — временное прекращение
            обработки персональных данных (за исключением случаев, если
            обработка необходима для уточнения персональных данных). {"\n"}{" "}
            {"\n"}2.3. Веб-сайт — совокупность графических и информационных
            материалов, а также программ для ЭВМ и баз данных, обеспечивающих их
            доступность в сети интернет по сетевому адресу
            httpsː//thismywebsite·com. {"\n"} {"\n"}2.4. Информационная система
            персональных данных — совокупность содержащихся в базах данных
            персональных данных и обеспечивающих их обработку информационных
            технологий и технических средств.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(MainScreen)}
          style={{
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 30,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: 20,
              paddingTop: 12,
              paddingBottom: 12,
              paddingRight: 50,
              paddingLeft: 50,
            }}
          >
            Принять
          </Text>
        </TouchableOpacity>
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

export default PrivacyPolicyScreen;
