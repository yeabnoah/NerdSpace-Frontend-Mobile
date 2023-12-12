import {
  View,
  Text,
  Dimensions,
  BackHandler,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo-removebg-preview.png";
import { useNavigation } from "@react-navigation/native";
import LoginComp from "../components/Login/LoginComp";

const { height, width } = Dimensions.get("window");
export default function Login() {
  return (
    <SafeAreaView style={{ height: height * 2, backgroundColor: "#7D7DD3" }}>
      <LoginComp />
    </SafeAreaView>
  );
}
