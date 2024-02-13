import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import Myposts from "./Myposts";

export default function ProfileUpper() {
  const [posts, setPosts] = useState([]);
  const [setting, setSetting] = useState(false);
  return (
    <View style={{ backgroundColor: "#040a12", flex: 1 }}>
      <ProfileCard
        posts={posts}
        setPosts={setPosts}
        setSetting={setSetting}
        setting={setting}
      />
      <Myposts
        posts={posts}
        setPosts={setPosts}
        setSetting={setSetting}
        setting={setting}
      />
    </View>
  );
}
