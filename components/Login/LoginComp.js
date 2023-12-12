import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Logo from "../../assets/images/logo-removebg-preview.png";
import Ip from "../../utils/IpAdress";

const { height, width } = Dimensions.get("window");

export default function LoginComp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${Ip}:5000/users/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        await AsyncStorage.setItem("token", token);
        navigation.navigate("Feed");
        console.log("Successfully logged in");
      } else {
        console.log("Failed to login. Please check your credentials.");
      }
    } catch (error) {
      console.log("An error occurred while logging in:", error.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#040418",
        paddingTop: height * 0.25,
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
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter your username here"
          placeholderTextColor="gray"
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
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password here"
          placeholderTextColor="gray"
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
        <TouchableOpacity
          onPress={handleLogin}
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
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{ color: "white", marginTop: 10, fontFamily: "poppins" }}
          >
            Don't have an account? Register Here
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
  );
}
