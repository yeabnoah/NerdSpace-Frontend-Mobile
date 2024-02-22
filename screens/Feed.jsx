import { View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "../routes/Navigator";
import FeedUpper from "../components/Feed/FeedUpper";

const { width, height } = Dimensions.get("window");

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#040a12" }}>
        <StatusBar barStyle="light-content" backgroundColor="#040a12" />
        <View style={{ flex: 1, paddingBottom: 150 }}>
          <FeedUpper />
        </View>
        <View
          style={{
            // flex: 1,
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(4, 10, 18, .5)",
          }}
        >
          <Navigator />
        </View>
      </View>
      {/* this is is  */}
    </SafeAreaView>
  );
}
