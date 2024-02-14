import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "../routes/Navigator";
import FeedUpper from "../components/Feed/FeedUpper";

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#040a12" />
        <View style={{ flex: 1 }}>
          <FeedUpper />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(4, 10, 18, .5)",
          }}
        >
          <Navigator />
        </View>
      </View>
    </SafeAreaView>
  );
}
