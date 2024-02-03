import {
  View,
  Text,
  Dimensions,
  BackHandler,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo-removebg-preview.png";
import { useNavigation } from "@react-navigation/native";
import LoginComp from "../components/Login/LoginComp";

const { height, width } = Dimensions.get("window");
export default function Login() {
  return (
    <SafeAreaView style={{ backgroundColor: "#131313", color: "white" }}>
      <View style={{ backgroundColor: "#131313", height: height }}>
        <StatusBar barStyle="light-content" backgroundColor="#131313" />
        <LoginComp />
      </View>
    </SafeAreaView>
  );
}
