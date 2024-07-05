import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import 'react-native-gesture-handler';
import RootStore from "./store/root_store";
import { RootStoreContext } from "./store/store_context";
// import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from "./pages/login_screen/login_screen";
import RegistrationScreen from "./pages/registration_screen/registration_screen";
import RecoveryPasswordScreen from "./pages/recovery_password_screen/recovery_password_screen";
import IntroScreen1 from "./pages/intro_screen/intro_screen1";
import IntroScreen2 from "./pages/intro_screen/intro_screen2";
import PrivacyPolicyScreen from "./pages/privacy_policy_screen";
import MainScreen from "./pages/main_screen/main_screen";
import BurgerMenu from "./pages/main_screen/burger_menu";
import { useFonts } from "expo-font";
import TeamScreen from "./pages/team_screen";
import TrainScreen from "./pages/train_screen";
import LessonScreen from "./components/lesson_card";
import CoachScreen from "./components/coach_card";
import LessonsCourseScreen from "./components/lessons_course_card";
import ListenScreen from "./pages/listen_screen";
import AboutCourseListenScreen from "./components/about_course_listen_card";

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
            initialRouteName="MainScreen"
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
            <Stack.Screen name="CoachScreen" component={CoachScreen} />
            <Stack.Screen
              name="LessonsCourseScreen"
              component={LessonsCourseScreen}
            />
            <Stack.Screen name="ListenScreen" component={ListenScreen} />
            <Stack.Screen
              name="AboutCourseListenScreen"
              component={AboutCourseListenScreen}
            />
          </Stack.Navigator>
        )}
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}
