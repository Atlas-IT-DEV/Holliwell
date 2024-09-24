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
import TeamScreen from "./pages/main_screen/team_screen";
import TrainScreen from "./pages/train/train_screen";
import LessonScreen from "./pages/train/lesson_train_screen";
import CoachScreen from "./pages/coach_screen";
import LessonsCourseScreen from "./pages/train/train_pack_screen";
import ListenScreen from "./pages/listen/listen_screen";
import MeditationScreen from "./pages/meditation/meditation_screen";
import AboutCourseMeditationScreen from "./pages/meditation/about_course_meditation_card";
import AboutCourseListenScreen from "./pages/listen/about_course_listen_screen";
import LessonListenScreen from "./pages/listen/lesson_listen_screen";
import LessonMeditationScreen from "./pages/meditation/lesson_meditation_screen";
import ProfileScreen from "./pages/profile_screen/profile_screen";
import EditProfileScreen from "./pages/profile_screen/edit_profile_screen";
import VideoScreen from "./components/video_screen";

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
            <Stack.Screen
              name="MeditationScreen"
              component={MeditationScreen}
            />
            <Stack.Screen
              name="AboutCourseMeditationScreen"
              component={AboutCourseMeditationScreen}
            />
            <Stack.Screen
              name="LessonListenScreen"
              component={LessonListenScreen}
            />
            <Stack.Screen
              name="LessonMeditationScreen"
              component={LessonMeditationScreen}
            />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
            />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
          </Stack.Navigator>
        )}
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}
