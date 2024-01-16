import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "../routes/Navigator";
import FeedUpper from "../components/Feed/FeedUpper";

export default function Feed() {
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
            backgroundColor: "#000000",
          }}
        >
          <Navigator />
        </View>
      </View>
    </SafeAreaView>
  );
}
