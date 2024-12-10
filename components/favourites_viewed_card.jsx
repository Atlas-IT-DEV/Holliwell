import { View, Image, Text, TouchableOpacity } from "react-native";

const FavouritesViewedCard = ({
  type_of_course = "Аудио-курс",
  name_course = "Название курса",
  uri = "https://legacy.reactjs.org/logo-og.png",
}) => {
  return (
    <TouchableOpacity>
      {<Image source={{ uri: uri }} style={{ width: 194, height: 194 }} />}
      <Text style={{ marginTop: 10, fontFamily: "GeologicaThin" }}>
        {type_of_course}
      </Text>
      <Text
        style={{ marginTop: 4, fontFamily: "GeologicaRegular", fontSize: 20 }}
      >
        {name_course}
      </Text>
    </TouchableOpacity>
  );
};

export default FavouritesViewedCard;
