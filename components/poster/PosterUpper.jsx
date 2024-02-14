import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Posts from "./posts";
import PosterCard from "./PosterCard";

export default function PosterUpper() {
  const [userIdPoster, setUserIdPoster] = useState("");
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <PosterCard userId={userIdPoster} />
      <Posts userId={userIdPoster} />
    </View>
  );
}
