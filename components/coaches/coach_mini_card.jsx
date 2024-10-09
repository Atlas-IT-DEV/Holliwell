import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";

const CoachMiniCard = ({
  coach = "Фамилия Имя",
  uri = "http://legacy.reactjs.org/logo-og.png",
}) => {
  return (
    <View style={{alignItems:"center"}}>
        <Image source={{uri: uri}} style={{width: 100, height: 100, borderRadius: 170, resizeMode:'cover'}}/>
        <Text style={{fontFamily: "GeologicaLight", textAlign: "center", marginTop: 10}}>{coach}</Text>
    </View>
  );
};

export default CoachMiniCard;
