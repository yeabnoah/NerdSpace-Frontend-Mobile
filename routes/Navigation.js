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

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Feed"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Loved" component={LovedPosts} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
