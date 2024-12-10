import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoachMiniCard = ({
  coach = "Фамилия Имя",
  uri = "http://legacy.reactjs.org/logo-og.png",
  obj = {},
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CoachScreen", obj)}>
      <View style={{ alignItems: "center" }}>
        {
          <Image
            source={{ uri: uri }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 170,
              resizeMode: "stretch",
            }}
          />
        }
        <Text
          style={{
            fontFamily: "GeologicaLight",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {coach}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoachMiniCard;
