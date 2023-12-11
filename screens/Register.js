import {
  View,
  Text,
  Dimensions,
  BackHandler,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo-removebg-preview.png";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
export default function Register() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: height * 2, backgroundColor: "#7D7DD3" }}>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#040418",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // height: width,
            width: width,
            marginTop: width * 0.2,
            alignItems: "center",
          }}
        >
          <Image
            source={Logo}
            style={{
              height: width * 0.17,
              width: width * 0.21,
            }}
          />

          <View style={{ marginTop: width * 0.05, alignItems: "center" }}>
            <TextInput
              placeholder="Enter your name here"
              placeholderTextColor={"gray"}
              style={{
                borderWidth: 1,
                borderColor: "#7D7DD3",
                width: width * 0.8,
                color: "white",
                borderRadius: width * 0.05,
                height: width * 0.15,
                fontFamily: "poppins",
                paddingHorizontal: width * 0.05,
                marginVertical: width * 0.02,
              }}
            />
            <TextInput
              placeholder="Enter your username here"
              placeholderTextColor={"gray"}
              style={{
                borderWidth: 1,
                borderColor: "#7D7DD3",
                width: width * 0.8,
                color: "white",
                borderRadius: width * 0.05,
                height: width * 0.15,
                fontFamily: "poppins",
                paddingHorizontal: width * 0.05,
                marginVertical: width * 0.02,
              }}
            />
            <TextInput
              placeholder="Enter your phone number here"
              placeholderTextColor={"gray"}
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: "#7D7DD3",
                width: width * 0.8,
                color: "white",
                fontFamily: "poppins",
                borderRadius: width * 0.05,
                height: width * 0.15,
                paddingHorizontal: width * 0.05,
                marginVertical: width * 0.02,
              }}
            />
            <TextInput
              placeholder="Enter your password here"
              placeholderTextColor={"gray"}
              secureTextEntry={true}
              style={{
                borderWidth: 1,
                borderColor: "#7D7DD3",
                width: width * 0.8,
                color: "white",
                borderRadius: width * 0.05,
                height: width * 0.15,
                fontFamily: "poppins",
                paddingHorizontal: width * 0.05,
                marginVertical: width * 0.02,
              }}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                  backgroundColor: "#7D7DD3",
                  borderRadius: width * 0.05,
                  height: width * 0.13,
                  width: width * 0.8,
                  justifyContent: "center",
                  marginVertical: width * 0.02,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "poppins",
                    fontSize: width * 0.05,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ color: "white", marginTop: 10, fontFamily: "poppins" }}
              >
                have an account ? Login here
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "gray",
              marginTop: height * 0.2,
              fontFamily: "poppins",
            }}
          >
            Nerd Space
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
