import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
// import yoo from "https://ibb.co/bPpLtQv";
import MockData from "../../utils/MockData";
import Ip from "../../utils/IpAdress";
import { PostContext, UidContext } from "../../context/UID";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Myposts({ posts, setPosts, setSetting }) {
  const userData = useContext(PostContext);
  const userId = userData.userId;
  const value = useContext(UidContext);
  const FEED_REFRESH_INTERVAL = 5000;
  // const [posts, setPosts] = useState([]);

  if (userData.avatarImage) {
    if (userData.avatarImage !== null) {
      userData.avatarImage = userData.avatarImage.replace(/\\/g, "/");
    } else {
      userData.avatarImage = null;
    }
  }

  const urlAvatar = `https://nerdspace-backend.onrender.com/users/${userData.avatarImage}`;

  console.log(userId);
  // const submitNow = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://nerdspace-backend.onrender.com/users/auth/post/comment/${userId}`,
  //       {
  //         headers: {
  //           authorization: value,
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     // Additional logic based on the response if needed
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://nerdspace-backend.onrender.com/users/auth/post/${userId}`,
          {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        setPosts(response.data.data);
        // console.log(posts.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (value) {
      fetchData();
    }

    const interval = setInterval(fetchData, FEED_REFRESH_INTERVAL);

    // this should be the best thing to ever happen working in the best thing this is the
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSetting(false);
      }}
    >
      <ScrollView
        style={{
          flex: 5,
          marginTop: height * 0.13,
        }}
      >
        <Text
          style={{
            color: "gray",
            fontFamily: "poppinsBold",
            marginHorizontal: width * 0.06,
            fontSize: width * 0.05,
          }}
        >
          My Posts
        </Text>

        <ScrollView
          horizontal={true}
          style={{
            flex: 5,
            marginTop: 10,
            marginHorizontal: height * 0.0085,
            flexWrap: "wrap",
            display: "flex",
            flexDirection: "row",
            marginBottom: 100,
            height: posts.length > 0 ? "max-height" : height * 0.4,
          }}
        >
          {posts?.map((yu) => {
            // console.log(yu);

            if (yu?.imageUrl) {
              if (yu.imageUrl !== null) {
                yu.imageUrl = yu.imageUrl.replace(/\\/g, "/");
              } else {
                img = null;
              }
            }

            const url = `https://nerdspace-backend.onrender.com/users/${yu?.imageUrl}`;

            return (
              <View
                horizontal={true}
                key={yu?._id}
                style={{
                  display: "flex",
                  borderBottomWidth: 0.7,
                  width: "max-content",
                  borderRadius: 10,
                  // height: "max-height",
                  paddingBottom: 20,
                  marginHorizontal: width * 0.045,
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["rgba(0,0,0,0.8)", "transparent"]}
                />
                <LinearGradient
                  style={{
                    height: width * 0.627,
                  }}
                  colors={["transparent", "#040418"]}
                  start={{ x: 0.5, y: 0.1 }}
                >
                  <Image
                    source={{
                      uri: url,
                    }}
                    style={{
                      width: height * 0.29,
                      height: height * 0.31,
                      borderRadius: 10,
                      zIndex: -1,
                    }}
                  />
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: height * -0.03,
                      justifyContent: "space-evenly",
                      marginHorizontal: 10,
                      width: 50,
                    }}
                  >
                    <AntDesign
                      name="heart"
                      style={{ fontSize: 16, color: "#7864f6" }}
                    />
                    <Text
                      style={{
                        color: "#7864f6",
                        fontFamily: "poppinsBold",
                        fontSize: 18,
                        textAlign: "center",
                        marginTop: height * -0.004,
                      }}
                    >
                      {yu.likes.length}
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
