import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStore from "./store/root_store";
import { RootStoreContext } from "./store/store_context";
import LoginScreen from "./pages/login_screen/login_screen";
import RegistrationScreen from "./pages/login_screen/registration_screen";
import RecoveryPasswordScreen from "./pages/login_screen/recovery_password_screen";
import IntroScreen1 from "./pages/login_screen/intro_screen1";
import IntroScreen2 from "./pages/login_screen/intro_screen2";
import PrivacyPolicyScreen from "./pages/login_screen/privacy_policy_screen";

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
          <Stack.Screen
            name="IntroScreen1"
            component={IntroScreen1}
          />
          <Stack.Screen
            name="IntroScreen2"
            component={IntroScreen2}
          />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
        </Stack.Navigator>
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}
