import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PostContext } from "../../context/UID";
import Ip from "../../utils/IpAdress";
const { width, height } = Dimensions.get("window");

export default function ProfileCard() {
  const navigation = useNavigation();
  const [follower, setFollower] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);
  const userData = useContext(PostContext);

  if (userData.avatarImage) {
    if (userData.avatarImage !== null) {
      userData.avatarImage = userData.avatarImage.replace(/\\/g, "/");
    } else {
      userData.avatarImage = null;
    }
  }

  const url = `http://${Ip}:5000/users/${userData.avatarImage}`;

  const Edit = () => {
    // try {
    //   await AsyncStorage.removeItem("token");
    //   console.log("Data removed");
    //   console.log("user successfully logged out");
    //   navigation.navigate("Login");
    // } catch (exception) {
    //   console.log(exception);
    // }

    navigation.navigate("Edit");
  };

  return (
    <View
      style={{
        height: height * 0.37,
        marginTop: height * 0.005,
        borderRadius: 10,
        flex: 5,
      }}
    >
      <View
        style={{
          height: height * 0.45,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          source={{
            uri: "https://static.invenglobal.com/upload/image/2020/08/13/o1597361719998783.jpeg",
          }}
          style={{ flex: 1 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: width * 0.04,
          }}
        >
          <TouchableOpacity
            style={{
              height: height * 0.12,
              width: height * 0.12,
              backgroundColor: "black",
              borderRadius: 100,
              marginTop: height * -0.053,
              marginLeft: width * 0.035,
              borderWidth: 4,
              borderColor: "#040418",
            }}
          >
            <Image
              source={{ uri: url }}
              style={{ flex: 1, borderRadius: 100 }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: height * 0.02 }} onPress={Edit}>
            <Text
              style={{
                color: "white",
                paddingHorizontal: width * 0.035,
                paddingTop: width * 0.017,
                paddingBottom: width * 0.01,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                fontFamily: "poppins",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: width * 0.045 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "poppins",
              fontSize: width * 0.05,
            }}
          >
            @{userData.username}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.039,
              fontFamily: "poppins",
            }}
          >
            {userData.bio}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: height * 0.008,
            }}
          >
            <Text
              style={{
                color: "white",
                marginRight: width * 0.035,
                fontFamily: "poppins",
              }}
            >
              {userData.followers} Following
            </Text>

            <Text style={{ color: "white", fontFamily: "poppins" }}>
              {userData.following} Following
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        onPress={async () => {
          try {
            await AsyncStorage.removeItem("token");
            console.log("Data removed");
            console.log("user successfully logged out");
            navigation.navigate("Login");
          } catch (exception) {
            console.log(exception);
          }
        }}
      >
        <Text style={{ color: "white" }}>logout</Text>
      </TouchableOpacity>
      <View
        style={{
          color: "white",
          borderWidth: 1,
          height: height * 0.004,
          width: width * 0.9,
          marginHorizontal: width * 0.05,
          marginTop: height * 0.015,
          backgroundColor: "#7864",
        }}
      ></View>
    </View>
  );
}
