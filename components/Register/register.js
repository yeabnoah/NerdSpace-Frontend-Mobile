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
import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

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
        backgroundColor: "#131313",
        marginHorizontal: width * 0.08,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <MaterialIcons
            name="keyboard-backspace"
            style={{
              color: "white",
              fontSize: width * 0.1,
              marginLeft: width * -0.03,
              marginTop: height * 0.02,
            }}
          />
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: height * 0.05 }}>
          <View></View>
          <Text
            style={{
              color: "white",
              fontFamily: "poppinsBold",
              fontSize: width * 0.08,
            }}
          >
            Let's Get Started!
          </Text>

          <Text
            style={{
              color: "white",
              fontFamily: "poppinsBold",
              fontSize: width * 0.025,
            }}
          >
            Create an account to get all the features
          </Text>
        </View>
        <View
          style={{
            marginTop: width * 0.05,
            alignItems: "center",
            // paddingHorizontal: 100,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#2e3233",
              borderRadius: width * 0.2,
              height: width * 0.15,
              marginVertical: height * 0.02,
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
              onChangeText={setName}
              placeholder="Full Name"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#2e3233",
              borderRadius: width * 0.2,
              height: width * 0.15,
              marginVertical: height * 0.02,
            }}
          >
            <AntDesign
              name="idcard"
              style={{
                color: "white",
                fontSize: width * 0.05,
                marginTop: height * 0.023,
                marginLeft: width * 0.05,
              }}
            />

            <TextInput
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="white"
              style={styles.input}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#2e3233",
              borderRadius: width * 0.2,
              height: width * 0.15,
              marginVertical: height * 0.02,
              // marginHorizontal: 100,
            }}
          >
            <Feather
              name="phone"
              style={{
                color: "white",
                fontSize: width * 0.05,
                marginTop: height * 0.023,
                marginLeft: width * 0.05,
              }}
            />
            <TextInput
              onChangeText={setPhoneNo}
              placeholder="Phone Number"
              placeholderTextColor="white"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#2e3233",
              borderRadius: width * 0.2,
              height: width * 0.15,
              marginVertical: height * 0.02,
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
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              Already have an account? Login Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#2e3233",
    width: width * 0.8,
    color: "white",
    borderRadius: width * 0.05,
    fontFamily: "poppins",
    paddingHorizontal: width * 0.05,
    marginVertical: width * 0.02,
  },
  button: {
    backgroundColor: "#2e3233",
    borderRadius: width * 0.1,
    height: width * 0.15,
    width: width * 0.5,
    justifyContent: "center",
    marginTop: width * 0.06,
    marginBottom: height * 0.1,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "poppinsBold",
    fontSize: width * 0.06,
    color: "white",
  },
  loginText: {
    color: "white",
    marginTop: 10,
    fontFamily: "poppins",
  },
  nerdSpaceText: {
    color: "white",
    marginTop: height * 0.02,
    // fontFamily: "poppinsBold",
  },
};
