import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PostContext } from "../../context/UID";
import Ip from "../../utils/IpAdress";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function ProfileCard() {
  const navigation = useNavigation();
  const [follower, setFollower] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);
  const userData = useContext(PostContext);

  if (userData.coverImage) {
    if (userData.coverImage !== null) {
      userData.coverImage = userData.coverImage.replace(/\\/g, "/");
    } else {
      userData.coverImage = null;
    }
  }

  const urlCov = `http://${Ip}:5000/users/${userData.coverImage}`;

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
        height: height * 0.4,
        // marginTop: height * 0.005,
        borderRadius: 10,
        flex: 5,
      }}
    >
      <View style={{}}>
        <View
          onPress={Edit}
          style={{
            marginBottom: height * -0.2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={Edit}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "rgba(4, 4, 24,0.5)",
              marginHorizontal: width * 0.02,
              borderRadius: 5,
              height: "max-content",
              justifyContent: "center",
              paddingHorizontal: 5,
              paddingVertical: height * 0.005,
              marginTop: height * 0.02,
              zIndex: 1,
            }}
          >
            <Text
              style={{
                color: "#7864f6",
                fontSize: 16,
                fontFamily: "poppins",
                paddingHorizontal: 2,
                paddingTop: height * 0.005,
              }}
            >
              Edit
            </Text>
            <MaterialIcons
              name="edit"
              style={{
                color: "#7864f6",
                fontSize: 17,
                paddingTop: height * 0.005,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: height * 0.45,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
        />
        <LinearGradient
          style={{ height: height * 0.3 }}
          colors={["transparent", "#040418"]}
          start={{ x: 0.5, y: 0.1 }}
        >
          <Image
            source={{
              uri: urlCov,
            }}
            style={{ flex: 1, zIndex: -1 }}
          />
        </LinearGradient>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: width * 0.04,
            marginTop: height * -0.095,
          }}
        >
          <Image
            source={{ uri: url }}
            style={{
              height: height * 0.09,
              width: height * 0.09,
              borderRadius: 100,

              marginLeft: width * 0.05,
              borderColor: "#040418",
              borderWidth: 1,
            }}
          />
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.09,
                marginLeft: width * 0.06,
                fontFamily: "poppins",
              }}
            >
              {userData.name}
            </Text>
            <Text
              style={{
                color: "#7864f6",
                marginLeft: width * 0.065,
                fontFamily: "poppins",
                fontSize: width * 0.045,
                marginTop: -10,
              }}
            >
              nerd@programming
            </Text>
          </View>
        </View>

        {/* <TouchableOpacity style={{ marginTop: height * 0.02 }} onPress={Edit}>
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
        </TouchableOpacity> */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: height * 0.01,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.045,
                fontFamily: "poppinsBold",
                textAlign: "center",
              }}
            >
              {userData.followers}
            </Text>
            <Text
              style={{
                color: "#7864f6",
                fontSize: width * 0.053,
                fontFamily: "poppins",
                textAlign: "center",
              }}
            >
              Followers
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.045,
                fontFamily: "poppinsBold",
                textAlign: "center",
              }}
            >
              {/* {userData.post} */}
            </Text>
            <Text
              style={{
                color: "#7864f6",
                fontSize: width * 0.053,
                fontFamily: "poppins",
                textAlign: "center",
              }}
            >
              Posts
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.045,
                fontFamily: "poppinsBold",
                textAlign: "center",
              }}
            >
              {userData.following}
            </Text>
            <Text
              style={{
                color: "#7864f6",
                fontSize: width * 0.053,
                fontFamily: "poppins",
                textAlign: "center",
              }}
            >
              Following
            </Text>
          </View>
        </View>
        <View
          style={{
            color: "white",
            borderWidth: 1.5,
            height: height * 0.004,
            width: width * 0.9,
            marginHorizontal: width * 0.05,
            marginTop: height * 0.015,
            backgroundColor: "#7864f6",
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            marginTop: 10,
            marginLeft: width * 0.05,
          }}
        >
          <View>
            <Text
              style={{
                color: "#7864f6",
                fontFamily: "poppins",
                fontSize: width * 0.04,
                textAlign: "start",
              }}
            >
              @{userData.username}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: width * 0.04,
                fontFamily: "poppins",
                textAlign: "start",
              }}
            >
              {userData.bio}
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
    </View>
  );
}
