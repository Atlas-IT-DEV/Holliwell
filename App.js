import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStore from "./store/root_store";
import { RootStoreContext } from "./store/store_context";
import LoginScreen from "./pages/login_screen/login_screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStoreContext.Provider value={new RootStore()}>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
      </RootStoreContext.Provider>
    </NavigationContainer>
  );
}

