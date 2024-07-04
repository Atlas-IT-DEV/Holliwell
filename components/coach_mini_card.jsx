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
}) => {
  const navigation = useNavigation();
  return (
    <View >
        <Image source={{uri: uri}} style={{width: 170, height: 170, borderRadius: "100%"}}/>
        <Text style={{fontFamily: "GeologicaLight", textAlign: "center", marginTop: 10}}>{coach}</Text>
    </View>
  );
};

export default CoachMiniCard;
