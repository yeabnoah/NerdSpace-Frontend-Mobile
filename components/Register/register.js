import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Ip from "../../utils/IpAdress";
import Logo from "../../assets/images/logo-removebg-preview.png";

const { width, height } = Dimensions.get("window");

export default function RegisterUi() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleRegister = () => {
    axios
      .post(`http://${Ip}:5000/users/register`, {
        name,
        username,
        password,
        phoneNo,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Successfully registered");
          navigation.navigate("Login");
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle registration error here
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#040418",
        // justifyContent: "center",
        paddingTop: height * 0.03,
        alignItems: "center",
      }}
    >
      <View
        style={{ width: width, marginTop: width * 0.2, alignItems: "center" }}
      >
        <Image
          source={Logo}
          style={{ height: width * 0.17, width: width * 0.21 }}
        />
        <View style={{ marginTop: width * 0.05, alignItems: "center" }}>
          <TextInput
            onChangeText={setName}
            placeholder="Enter your name here"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            onChangeText={setUsername}
            placeholder="Enter your username here"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            onChangeText={setPhoneNo}
            placeholder="Enter your phone number here"
            placeholderTextColor="gray"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            onChangeText={setPassword}
            placeholder="Enter your password here"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              Already have an account? Login Here
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nerdSpaceText}>Nerd Space</Text>
      </View>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#7D7DD3",
    width: width * 0.8,
    color: "white",
    borderRadius: width * 0.05,
    height: width * 0.15,
    fontFamily: "poppins",
    paddingHorizontal: width * 0.05,
    marginVertical: width * 0.02,
  },
  button: {
    backgroundColor: "#7D7DD3",
    borderRadius: width * 0.05,
    height: width * 0.13,
    width: width * 0.8,
    justifyContent: "center",
    marginVertical: width * 0.02,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "poppins",
    fontSize: width * 0.05,
  },
  loginText: {
    color: "white",
    marginTop: 10,
    fontFamily: "poppins",
  },
  nerdSpaceText: {
    color: "gray",
    marginTop: height * 0.02,
    fontFamily: "poppins",
  },
};
