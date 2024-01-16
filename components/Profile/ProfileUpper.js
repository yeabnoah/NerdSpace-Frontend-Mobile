import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import ProfileCard from "./ProfileCard";
import Myposts from "./Myposts";

export default function ProfileUpper() {
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <ProfileCard />
      <Myposts />
    </View>
  );
}
