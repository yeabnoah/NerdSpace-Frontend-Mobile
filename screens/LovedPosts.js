import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Navigator from "../routes/Navigator";
import LovedScreen from "../components/Loved/LovedScreen";

export default function LovedPosts() {
  return (
    <SafeAreaView style={{ backgroundColor: "#7864F6" }}>
      <View style={{ backgroundColor: "#040418" }}>
        <ScrollView>
          <LovedScreen />
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
