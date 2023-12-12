import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import Ip from "../../utils/IpAdress";
import logo from "../../assets/images/logo-removebg-preview.png";
import MockImages from "../../utils/mockImage";
import PostBox from "./PostBox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function FeedUpper() {
  const [post, setPost] = useState([]);
  const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc2ZWU0ZGE3YTU1ODczOTU0OTQ1MTUiLCJpYXQiOjE3MDIzNjk3NzMsImV4cCI6MTcwMjcyOTc3M30.gTOfHEfwzotwUzDoYt7xKCAeV0Bbpeg-x-_kAL4ez4k";

  const [yeh, setyeh] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // const config = ;
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc2ZWU0ZGE3YTU1ODczOTU0OTQ1MTUiLCJpYXQiOjE3MDIzNjc1MzAsImV4cCI6MTcwMjM3MTEzMH0.SABQwvVQL2DU73Yk3ID39orjZxU4KvxhpTWBhYXYAIE";

    const fetchData = async () => {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log("Token fetched successfully:");
        // setyeh(true);

        axios
          .get(`http://${Ip}:5000/users/auth/feed`, {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // console.log(JSON.stringify(response.data));
            // const {like}
            setPost(
              response.data
                .slice()
                .reverse()
                .map((obj) => obj)
            );
          })
          .catch((error) => {
            console.error(error);
          });

        const interval = setInterval(fetchData, 30000);

        // Clean up the interval when the component unmounts
        return () => {
          clearInterval(interval);
        };
        // Code to redirect back
        // navigation.navigate("Login");
      } else {
        console.log("Token not found in storage");
        // Renders page normally
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      <View
        style={{
          backgroundColor: "#040418",
          height: height * 0.3,
        }}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: height * 0.019,
              paddingHorizontal: height * 0.017,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                name="bars"
                style={{
                  marginTop: height * 0.007,
                  color: "#7864F6",
                  fontSize: height * 0.04,
                  width: height * 0.047,
                  height: height * 0.047,
                  padding: height * 0.005,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>

            <View style={{ borderRadius: 100 }}>
              <Image
                source={logo}
                style={{ height: width * 0.12, width: width * 0.15 }}
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <AntDesign
                  name="plus"
                  style={{
                    marginTop: height * 0.007,
                    color: "#7864F6",
                    fontSize: height * 0.039,
                    width: height * 0.05,
                    height: height * 0.05,
                    padding: height * 0.005,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: height * 0.024,
            paddingVertical: height * 0.01,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: height * 0.033,
              fontFamily: "poppins",
            }}
          >
            Friends
          </Text>
        </View>
        <ScrollView
          horizontal
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: height * 0.006,
          }}
        >
          {MockImages.map((Post) => (
            <TouchableOpacity
              key={Post.id}
              style={{
                height: 120,
                width: 65,
                borderRadius: 30,
                borderColor: "#fff",
                marginHorizontal: width * 0.025,
              }}
            >
              <Image
                source={{
                  uri: `${Post.imageLink}`,
                }}
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
              />
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  padding: 5,
                  fontSize: 14,
                  fontFamily: "poppins",
                  marginLeft: width * 0.03,
                }}
              >
                {Post.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: width * 0.22,
          height: post.length > 0 ? "auto" : height,
        }}
      >
        <ScrollView>
          {post.map((posted) => {
            const { likes, content, imageUrl, comments, user_id, time_stamp } =
              posted;

            // Calculate the relative time
            const currentTime = new Date();
            const postTime = new Date(time_stamp);
            const timeDifference = currentTime - postTime;

            let relativeTime;

            if (timeDifference < 60000) {
              // Less than 1 minute
              relativeTime = "Just now";
            } else if (timeDifference < 3600000) {
              // Less than 1 hour
              const minutes = Math.floor(timeDifference / 60000);
              relativeTime = `${minutes} minutes ago`;
            } else if (timeDifference < 86400000) {
              // Less than 1 day
              const hours = Math.floor(timeDifference / 3600000);
              relativeTime = `${hours} hours ago`;
            } else {
              // More than 1 day
              const days = Math.floor(timeDifference / 86400000);
              relativeTime = `${days} days ago`;
            }

            // Calculate the like count
            const likeCount = likes.length;
            const commentCount = comments.length;

            return (
              <PostBox
                key={posted._id}
                content={content}
                img={imageUrl}
                like={likeCount} // Pass the like count as a prop
                comment={commentCount}
                userId={user_id}
                timeStamp={relativeTime}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
