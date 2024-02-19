import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import logo from "../../assets/images/logo-removebg-preview.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";
// import PostComponent from "../check/check";

const { height, width } = Dimensions.get("window");
export default function ChatUpper() {
  const [exists, setExists] = useState(true);

  return (
    <View
      style={{
        height: height,
        backgroundColor: "#040a12",
        // width: "max-content",
      }}
    >
      {exists && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{ marginTop: height * 0.3 }}>
            <Text
              style={{
                paddingTop: height * 0.016,
                color: "gray",
                fontFamily: "poppins",
                textAlign: "center",
                fontSize: 45,
              }}
            >
              Talk with Nerdai
            </Text>
            <TouchableOpacity
              onPress={() => {
                setExists(false);
              }}
              style={{
                backgroundColor: "#7864f6",
                marginLeft: width * 0.03,
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
                paddingLeft: 20,
              }}
            >
              <Text style={{ color: "white", fontFamily: "poppins" }}>
                Start Talking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!exists && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextInput
            onChangeText={(input) => {
              // setUserInput(input);
            }}
            placeholder="Ask Nerdai ..."
            placeholderTextColor={"gray"}
            style={{
              backgroundColor: "#000000",
              width: width * 0.7,
              paddingLeft: width * 0.05,
              margin: width * 0.06,
              borderRadius: 5,
              borderColor: "#7864f6",
              borderWidth: 0.3,
              color: "#fff",
              fontSize: width * 0.043,
              fontFamily: "poppins",
            }}
          />
          <TouchableOpacity
            // onPress={handleSubmit}
            style={{
              marginTop: width * 0.085,
              height: height * 0.087,
              width: width * 0.18,
              paddingLeft: width * 0.04,
              marginLeft: width * -0.05,
            }}
          >
            <Ionicons
              name="send"
              style={{
                color: "#7864f6",
                fontSize: height * 0.035,
                // backgroundColor: "#040418",
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginHorizontal: width * 0.07,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "poppins",
            backgroundColor: "rgba(118, 100, 246, 0.15)",
            padding: 8,
            width: "max-content",
          }}
        >
          Me: What is the capital city of Ethiopia?
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "poppins",
            backgroundColor: "rgba(118, 100, 246, 0.15)",
            padding: 8,
            width: "max-content",
            marginTop: 5,
            textAlign: "right",
          }}
        >
          Me: What is the capital city of Ethiopia?
        </Text>
      </View>
    </View>
  );
}
