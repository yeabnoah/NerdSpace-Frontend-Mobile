import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-removebg-preview.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width, height } = Dimensions.get("window");
export default function RegisterUi() {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [done, setDone] = useState(false);

  const PostData = () => {
    axios
      .post("http://10.9.154.203:5000/users/register", {
        name,
        username,
        password,
        phoneNo,
      })
      .then(function (response) {
        if (response.status == 201) {
          console.log("successfully registered");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
            placeholder="Enter your name here"
            placeholderTextColor={"gray"}
            onChangeText={(event) => {
              setName(event);
            }}
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
              setPhoneNo(event);
            }}
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
              onPress={() => {
                PostData();
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
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={navigation.navigate("Login")}>
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
  );
}
