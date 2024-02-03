import React, { useState, useEffect } from "react";
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
import { AntDesign, Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";

import Logo from "../../assets/images/logo-removebg-preview.png";
import Ip from "../../utils/IpAdress";
import user from "../../assets/images/user.jpg";

const { height, width } = Dimensions.get("window");

export default function LoginComp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Check if a token exists
      const existingToken = await AsyncStorage.getItem("token");

      if (existingToken) {
        // If a token exists, replace it
        await AsyncStorage.removeItem("token");
      }

      // Proceed with login
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
        backgroundColor: "#131313",
        paddingTop: height * 0.1,
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View style={{ padding: 20, borderRadius: 100 }}>
          <Image
            source={user}
            style={{
              height: height * 0.15,
              width: height * 0.15,
              borderRadius: 100,
              marginBottom: height * 0.01,
            }}
          />
        </View>

        <Text
          style={{
            color: "white",
            fontFamily: "poppinsBold",
            fontSize: width * 0.07,
          }}
        >
          Welcome Back!
        </Text>
      </View>
      <View style={{ alignItems: "center", paddingTop: height * 0.04 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#2e3233",
            height: width * 0.15,
            width: width * 0.8,
            borderRadius: width * 0.1,
            marginTop: height * 0.03,
          }}
        >
          <AntDesign
            name="user"
            style={{
              color: "white",
              fontSize: width * 0.05,
              marginTop: height * 0.023,
              marginLeft: width * 0.05,
            }}
          />
          <TextInput
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
            placeholderTextColor="white"
            style={{
              width: width * 0.75,
              color: "white",
              height: width * 0.15,
              fontFamily: "poppins",
              paddingHorizontal: width * 0.04,
              marginVertical: width * 0.002,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#2e3233",
            height: width * 0.15,
            width: width * 0.8,
            borderRadius: width * 0.1,
            marginVertical: height * 0.03,
          }}
        >
          <AntDesign
            name="unlock"
            style={{
              color: "white",
              fontSize: width * 0.05,
              marginTop: height * 0.023,
              marginLeft: width * 0.05,
            }}
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            style={{
              width: width * 0.75,
              color: "white",

              height: width * 0.15,
              fontFamily: "poppins",
              paddingHorizontal: width * 0.04,
              marginVertical: width * 0.002,
              // backgroundColor: "#2e3233",
              // backgroundColor: "red",
              // borderRadius: width * 0.1,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end !important",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "right",
              fontFamily: "poppins",
            }}
          >
            Forgot password?
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#2e3233",
            borderRadius: width * 0.1,
            width: width * 0.5,
            height: width * 0.15,
            justifyContent: "center",
            marginVertical: width * 0.06,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "poppinsBold",
              fontSize: width * 0.06,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(`Register`)}>
          <Text
            style={{
              color: "white",
              marginTop: height * 0.07,
              fontFamily: "poppins",
            }}
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
