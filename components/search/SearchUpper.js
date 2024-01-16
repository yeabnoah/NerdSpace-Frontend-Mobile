import {
  View,
  Text,
  Dimensions,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function SearchUpper() {
  return (
    <View style={{ height: height, backgroundColor: "#000000" }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          placeholder="who do you wanna find ?"
          placeholderTextColor={"gray"}
          style={{
            backgroundColor: "#000000",
            width: width * 0.7,
            paddingLeft: width * 0.05,
            margin: width * 0.06,
            borderRadius: 15,
            borderColor: "gray",
            borderWidth: 0.3,
            color: "#fff",
            fontSize: width * 0.043,
            fontFamily: "poppins",
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: width * 0.085,
            height: width * 0.18,
            width: width * 0.18,
          }}
        >
          <AntDesign
            name="search1"
            style={{
              color: "gray",
              fontSize: width * 0.09,
            }}
          />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}
