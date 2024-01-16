import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";
import LovedPosts from "../screens/LovedPosts";
import Search from "../screens/Search";
import Chat from "../screens/Chat";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { PostContext, UidContext } from "../context/UID";
import Ip from "../utils/IpAdress";
import Test from "../test/Test";
import EditProfile from "../screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [idToken, setIdToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [refreshCount, setRefreshCount] = useState(0);
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        axios
          .get(`http://${Ip}:5000/users/auth/profile`, {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setUserData(response.data);
            console.log("user data is given here :", response.data);
          });
        setIdToken(value);
        setIsLoggedIn(true);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 5 seconds
      setRefreshCount((prevCount) => prevCount + 1);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [refreshCount]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UidContext.Provider value={idToken}>
      <PostContext.Provider value={userData}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={isLoggedIn ? "Feed" : "Register"}
            // initialRouteName="Feed"
            // initialRouteName="Edit"
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Loved" component={LovedPosts} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Edit" component={EditProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </PostContext.Provider>
    </UidContext.Provider>
  );
}
