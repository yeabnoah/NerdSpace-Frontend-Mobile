import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import logo from "../../assets/images/logo-removebg-preview.png";

const { height, width } = Dimensions.get("window");
export default function ChatUpper() {
  return (
    <View
      style={{
        height: height,
        backgroundColor: "#040418",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={{ marginTop: height * 0.3 }}>
        <Image
          source={logo}
          style={{
            height: width * 0.33,
            width: width * 0.4,
            marginLeft: width * 0.05,
          }}
        />
        <Text
          style={{
            color: "#7864F6",
            fontSize: width * 0.09,
            marginTop: height * 0.02,
            // fontWeight: "800",
            fontFamily: "Poppins",
          }}
        >
          Coming Soon
        </Text>
      </View>
    </View>
  );
}
