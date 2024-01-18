import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import Posts from "./posts";
import PosterCard from "./PosterCard";

export default function PosterUpper() {
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <PosterCard />
      <Posts />
    </View>
  );
}
