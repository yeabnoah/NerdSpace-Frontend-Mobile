import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import TechNerd from "../../assets/images/technerd.jpg";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { PostContext } from "../../context/UID";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function ProfileCard() {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Data removed");
      console.log("user successfully logged out");
      navigation.navigate("Login");
    } catch (exception) {
      console.log(exception);
    }
  };
  const userData = useContext(PostContext);
  return (
    <View
      style={{
        height: height * 0.37,
        marginTop: height * 0.005,
        borderRadius: 10,
        // marginHorizontal: 12,
        // marginHorizontal: 5,
        flex: 5,
      }}
    >
      <View
        style={{
          height: height * 0.45,
          // backgroundColor: "aqua",
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
              source={{ uri: userData.avatarImage }}
              style={{ flex: 1, borderRadius: 100 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: height * 0.02 }}
            onPress={logout}
          >
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
              fontSize: width * 0.065,
            }}
          >
            {userData.username}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "poppins",
            }}
          >
            {userData.bio}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: height * 0.005,
            }}
          >
            <Text
              style={{
                color: "white",
                marginRight: width * 0.035,
                fontFamily: "poppins",
              }}
            >
              {userData.following} Following
            </Text>

            <Text style={{ color: "white", fontFamily: "poppins" }}>
              {userData.following} Following
            </Text>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: height * 0.025,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#7864F6",
            width: width * 0.42,
            justifyContent: "center",
            padding: width * 0.025,
            borderRadius: 50,
          }}
        >
          <Feather
            name="user-plus"
            color="white"
            size={19}
            style={{ paddingTop: width * 0.002 }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: width * 0.02,
              fontFamily: "poppins",
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#7864F6",
            width: width * 0.42,
            justifyContent: "center",
            padding: width * 0.025,
            borderRadius: 50,
          }}
        >
          <AntDesign
            name="message1"
            style={{ color: "#fff", fontSize: height * 0.025 }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: width * 0.02,
              fontSize: height * 0.02,
              fontFamily: "poppins",
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          color: "white",
          borderWidth: 1,
          height: height * 0.004,
          width: width * 0.9,
          marginHorizontal: width * 0.05,
          marginTop: height * 0.015,
          backgroundColor: "#7864F6",
        }}
      ></View>
    </View>
  );
}
