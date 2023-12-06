import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Navigator from "../routes/Navigator";
import ProfileUpper from "../components/Profile/ProfileUpper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {
  return (
    <SafeAreaView style={{ backgroundColor: "#7D7DD3", color: "#fff" }}>
      <View>
        <ScrollView style={{}}>
          <ProfileUpper />
          <View style={{ flex: 1, backgroundColor: "#040418" }}>
            {/* Content of your feed */}
          </View>
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
