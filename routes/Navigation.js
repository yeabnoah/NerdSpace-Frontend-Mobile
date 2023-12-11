import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";
import LovedPosts from "../screens/LovedPosts";
import Search from "../screens/Search";
import Chat from "../screens/Chat";
import { useFonts } from "expo-font";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Loved" component={LovedPosts} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
