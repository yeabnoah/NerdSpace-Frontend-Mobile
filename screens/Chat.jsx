import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import Navigator from "../routes/Navigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatUpper from "../components/Chat/ChatUpper";

const { width, height } = Dimensions.get("window");

export default function Chat() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#858cac", color: "#fff", flex: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#040a12" />
      <View style={{ flex: 1 }}>
        <ChatUpper />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#040418",
        }}
      >
        <Navigator />
      </View>
    </SafeAreaView>
  );
}
