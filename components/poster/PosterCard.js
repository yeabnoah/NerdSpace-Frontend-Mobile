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
import { PostContext, posterContext } from "../../context/UID";
import Ip from "../../utils/IpAdress";
const { width, height } = Dimensions.get("window");

export default function PosterCard({ userIdPoster }) {
  const navigation = useNavigation();
  const [follower, setFollower] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);
  // const posterData = useContext(posterContext);
  const { posterData, setPosterData } = useContext(posterContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Place the code you want to execute every 2 seconds here
      console.log("Refreshing every 2 seconds...");
      console.log("poster refreshed **************************");
      console.log(posterData);
    }, 2000);

    // Clear the interval when the component is unmounted or on cleanup
    return () => clearInterval(intervalId);
  }, [posterData]);

  if (posterData) {
    if (posterData.coverImage) {
      if (posterData.coverImage !== null) {
        posterData.coverImage = posterData.coverImage.replace(/\\/g, "/");
      } else {
        posterData.coverImage =
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D";
      }
    }
  }

  if (posterData) {
    if (posterData.avatarImage) {
      if (posterData.avatarImage !== null) {
        posterData.avatarImage = posterData.avatarImage.replace(/\\/g, "/");
      } else {
        posterData.avatarImage =
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D";
      }
    }
  }

  const urlCov = `http://${Ip}:5000/users/${posterData.coverImage}`;

  const url = `http://${Ip}:5000/users/${posterData.avatarImage}`;

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
        // marginTop: height * 0.005,
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
            uri: urlCov,
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
              source={{
                uri: url,
              }}
              style={{ flex: 1, borderRadius: 100 }}
            />
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
            @{posterData ? posterData.username : "username"}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.039,
              fontFamily: "poppins",
            }}
          >
            {posterData ? posterData.bio : "bio"}
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
              {posterData ? posterData.followers : 0} Following
            </Text>

            <Text style={{ color: "white", fontFamily: "poppins" }}>
              {posterData ? posterData.following : 0} Following
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
