import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import Navigator from "../routes/Navigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatUpper from "../components/Chat/ChatUpper";

const { width, height } = Dimensions.get("window");

export default function Chat() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBoldPoppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    BoldBoldPoppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Bolder: require("../assets/fonts/Poppins-Italic.ttf"),
  });
  return (
    <SafeAreaView style={{ backgroundColor: "#22222C", color: "#fff" }}>
      <View>
        <ScrollView style={{}}>
          <ChatUpper />
          <View style={{ flex: 1, backgroundColor: "#040418" }}></View>
        </ScrollView>
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
      </View>
    </SafeAreaView>
  );
}
