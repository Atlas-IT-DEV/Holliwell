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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStoreContext.Provider value={new RootStore()}>
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
        </Stack.Navigator>
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}
