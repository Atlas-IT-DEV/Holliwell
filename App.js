import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import 'react-native-gesture-handler';
import RootStore from "./store/root_store";
import { RootStoreContext } from "./store/store_context";
// import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from "./pages/login_screen/login_screen";
import RegistrationScreen from "./pages/login_screen/registration_screen";
import RecoveryPasswordScreen from "./pages/login_screen/recovery_password_screen";
import IntroScreen1 from "./pages/login_screen/intro_screen1";
import IntroScreen2 from "./pages/login_screen/intro_screen2";
import PrivacyPolicyScreen from "./pages/login_screen/privacy_policy_screen";
import MainScreen from "./pages/login_screen/main_screen";
import BurgerMenu from "./pages/login_screen/burger_menu";
import { useFonts } from "expo-font";
import TeamScreen from "./pages/login_screen/team_screen";
import TrainScreen from "./pages/login_screen/train_screen";
import LessonScreen from "./components/lesson_card";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    GeologicaMedium: require("./assets/fonts/Geologica-Medium.ttf"),
    GeologicaRegular: require("./assets/fonts/Geologica-Regular.ttf"),
    GeologicaLight: require("./assets/fonts/Geologica-Light.ttf"),
    GeologicaThin: require("./assets/fonts/Geologica-Thin.ttf"),
  });
  return (
    <NavigationContainer>
      <RootStoreContext.Provider value={new RootStore()}>
        {fontsLoaded && (
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <Stack.Screen
              name="RecoveryPasswordScreen"
              component={RecoveryPasswordScreen}
            />
            <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
            <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
            <Stack.Screen
              name="PrivacyPolicyScreen"
              component={PrivacyPolicyScreen}
            />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="BurgerMenu" component={BurgerMenu} />
            <Stack.Screen name="TeamScreen" component={TeamScreen} />
            <Stack.Screen name="TrainScreen" component={TrainScreen} />
            <Stack.Screen name="LessonScreen" component={LessonScreen} />
          </Stack.Navigator>
        )}
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}
