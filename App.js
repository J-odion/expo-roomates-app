import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/homescreen";
import Login from "./screen/login";
import SignUp from "./screen/signup";
import PickmePremium from "./screen/pickmepremium";
import Steps1 from "./screen/steps1";
import Step2 from "./screen/step2";
import Step3 from "./screen/step3";
import Step4 from "./screen/step4";
import Step5 from "./screen/step5";
import Step6 from "./screen/step6";
import Step7 from "./screen/step7";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Pickme" component={PickmePremium} />
        <Stack.Screen name="Steps1" component={Steps1} />
        <Stack.Screen name="Steps2" component={Step2} />
        <Stack.Screen name="Steps3" component={Step3} />
        <Stack.Screen name="Steps4" component={Step4} />
        <Stack.Screen name="Steps5" component={Step5} />
        <Stack.Screen name="Steps6" component={Step6} />
        <Stack.Screen name="Steps7" component={Step7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
