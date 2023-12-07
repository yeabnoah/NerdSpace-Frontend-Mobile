import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "../routes/Navigator";
import FeedUpper from "../components/Feed/FeedUpper";
import { useFonts } from "expo-font";

export default function Feed() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBoldPoppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    BoldBoldPoppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Bolder: require("../assets/fonts/Poppins-Italic.ttf"),
  });
  return (
    <SafeAreaView style={{ backgroundColor: "#7864F6" }}>
      <View style={{ backgroundColor: "#040418" }}>
        <ScrollView style={{}}>
          <FeedUpper />
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
