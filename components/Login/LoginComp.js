import {
  View,
  Text,
  BackHandler,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/logo-removebg-preview.png";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

const { height, width } = Dimensions.get("window");
export default function LoginComp() {
  const navigation = useNavigation();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const postData = () => {
    axios
      .post("http://192.168.214.83:5000/users/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          storeData(token); // Call the function to store the token

          navigation.navigate("Feed");
          console.log("Login successful.");
        } else {
          console.log("Login failed.");
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      console.log(`Token saved: ${token}`);
    } catch (error) {
      console.log("Error saving the token:", error);
    }
  };

  return (
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
            onChangeText={(event) => {
              setUsername(event);
            }}
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
            onChangeText={(event) => {
              setPassword(event);
            }}
            placeholder="Enter your password here"
            placeholderTextColor={"gray"}
            secureTextEntry={true}
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                postData();
              }}
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
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{ color: "white", marginTop: 10, fontFamily: "poppins" }}
            >
              {/* Don't have an account ? Register Here */}
              {username} {password}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "gray",
            marginTop: height * 0.4,
            fontFamily: "poppins",
          }}
        >
          Nerd Space
        </Text>
      </View>
    </View>
  );
}
