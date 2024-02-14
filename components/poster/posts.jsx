import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
// import yoo from "https://ibb.co/bPpLtQv";
import MockData from "../../utils/MockData";
import Ip from "../../utils/IpAdress";
import { PostContext, UidContext, posterContext } from "../../context/UID";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function Posts() {
  const userData = useContext(PostContext);
  const userId = userData.userId;
  const value = useContext(UidContext);
  const posterData = useContext(posterContext);
  const [x, setX] = useState();

  const FEED_REFRESH_INTERVAL = 5000;
  const [posts, setPosts] = useState([]);

  if (userData.avatarImage) {
    if (userData.avatarImage !== null) {
      userData.avatarImage = userData.avatarImage.replace(/\\/g, "/");
    } else {
      userData.avatarImage = null;
    }
  }

  const urlAvatar = `http://${Ip}:5000/users/${userData.avatarImage}`;

  console.log(userId);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Place the code you want to execute every 2 seconds here
  //     console.log("Refreshing every 2 seconds...");

  //     // setX(Data.posterData.userId);

  //     console.log(posterData);
  //   }, 2000);

  //   axios
  //     .get(`http://${Ip}:5000/users/auth/post/comment/${userId}`, {
  //       headers: {
  //         authorization: value,
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });

  //   return () => clearInterval(intervalId);
  // }, [posterData]);

  return (
    <ScrollView
      style={{
        flex: 5,
        marginTop: height * 0.13,
      }}
    >
      <Text
        style={{
          color: "gray",
          fontFamily: "poppins",
          marginHorizontal: width * 0.06,
          fontSize: width * 0.05,
        }}
      >
        My Posts
      </Text>

      <View
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
        <TouchableOpacity
          onPress={() => {
            console.log("am clicked");
          }}
          style={{
            color: "white",
            backgroundColor: "#7864f6",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>click me</Text>
        </TouchableOpacity>
        {/* {posts.map((yu) => {
          // console.log(yu);

          if (yu.imageUrl) {
            if (yu.imageUrl !== null) {
              yu.imageUrl = yu.imageUrl.replace(/\\/g, "/");
            } else {
              img = null;
            }
          }

          const url = `http://${Ip}:5000/users/${yu.imageUrl}`;

          return (
            <View
              key={yu._id}
              style={{
                // backgroundColor: "#040418",
                padding: width * 0.02,
                display: "flex",
                borderBottomWidth: 0.7,
                // borderColor: "#7864",
                borderBottomColor: "#7864",
                marginHorizontal: 15,
                width: width * 0.9,
                borderRadius: 10,
                marginBottom: 10,
                height: "max-height",
                paddingBottom: 20,
                // marginBottom: 210,
                // borderStyle: "dashed",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={{
                    uri: urlAvatar,
                  }}
                  style={{
                    height: height * 0.044,
                    width: height * 0.05,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    marginLeft: 10,
                    fontFamily: "poppins",
                    fontSize: width * 0.045,
                  }}
                >
                  @Nerd_{userData.username}
                </Text>
              </View>
              <Text
                style={{
                  color: "#c9c9c9",
                  fontFamily: "poppins",
                  fontSize: width * 0.04,
                  marginRight: 10,
                  marginLeft: 40,
                  marginBottom: 10,
                  marginTop: 5,
                }}
              >
                {yu.content}
              </Text>

              <Image
                source={{
                  uri: url,
                }}
                style={{
                  width: height * 0.36,
                  borderRadius: 10,
                  height: 200,
                  marginLeft: 40,
                }}
              />
            </View>
          );
        })} */}
      </View>
    </ScrollView>
  );
}
