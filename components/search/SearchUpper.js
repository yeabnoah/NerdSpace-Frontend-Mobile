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
    <View style={{ height: height, backgroundColor: "#040418" }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          placeholder="who do you wanna find ?"
          placeholderTextColor={"gray"}
          style={{
            backgroundColor: "#1C1C37",
            width: width * 0.7,
            padding: width * 0.03,
            margin: width * 0.06,
            borderRadius: 15,
            borderColor: "#1C1C37",
            borderWidth: 1.5,
            color: "#fff",
            fontSize: width * 0.043,
            fontFamily: "Poppins",
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
              color: "#7864F6",
              fontSize: width * 0.09,
            }}
          />
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}
