import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Ip from "../../utils/IpAdress";
import logo from "../../assets/images/logo-removebg-preview.png";
import MockImages from "../../utils/mockImage";
import PostBox from "./PostBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UidContext } from "../../context/UID";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const FEED_REFRESH_INTERVAL = 2000;

const FeedUpper = () => {
  const value = useContext(UidContext);
  // const userId = useContext(idToken);
  const [post, setPost] = useState([]);
  const [poster, setPoster] = useState({});
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://nerdspace-backend.onrender.com/users/auth/feed`,
          {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        setPost(response.data.slice().reverse());
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle errors (e.g., show a user-friendly error message)
      }
    };

    // Perform the initial fetch only if 'value' is available
    if (value) {
      fetchData();
    }

    // Setup interval to periodically fetch data
    const interval = setInterval(fetchData, FEED_REFRESH_INTERVAL);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [value, Ip, FEED_REFRESH_INTERVAL]); // Make sure to include all dependencies

  console
    .log
    // "this is gonna be the best think to d h  this is gonna be the bes =t "
    ();
  return (
    <View style={{ backgroundColor: "#040a12" }}>
      <View
        style={{
          backgroundColor: "#040a12",
          position: "fixed",
          zIndex: 1000,
          top: 0,
          width: "100%",
          height: post && post.length > 0 ? height * 0.07 : height,
        }}
      >
        <View
          style={{
            paddingHorizontal: height * 0.017,
            paddingTop: height * 0.005,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <AntDesign
                name="bars"
                style={{
                  marginTop: height * 0.007,
                  color: "#7864f6",
                  fontSize: height * 0.04,
                  width: height * 0.043,
                  height: height * 0.045,
                  padding: height * 0.005,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>

            <View>
              <Image
                source={logo}
                style={{ height: width * 0.11, width: width * 0.13 }}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Test");
                }}
              >
                <Ionicons
                  name="notifications"
                  style={{
                    marginTop: height * 0.007,
                    color: "#7864f6",
                    fontSize: height * 0.034,
                    width: height * 0.05,
                    height: height * 0.05,
                    padding: height * 0.005,
                    justifyContent: "center",
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={
          {
            // height: height * 6,
            // height: post && post.length > 0 ? "max-content" : height,
          }
        }
      >
        <ScrollView style={{}}>
          {post?.map((posted) => {
            const {
              likes,
              content,
              imageUrl,
              comments,
              user_id,
              time_stamp,
              user,
            } = posted;

            // Calculate the relative time
            const currentTime = new Date();
            const postTime = new Date(time_stamp);
            const timeDifference = currentTime - postTime;

            let relativeTime;

            if (timeDifference < 60000) {
              relativeTime = "Just now";
              // clicking the data from the user feed
            } else if (timeDifference < 3600000) {
              const minutes = Math.floor(timeDifference / 60000);
              relativeTime = `${minutes} minutes ago`;
            } else if (timeDifference < 86400000) {
              const hours = Math.floor(timeDifference / 3600000);
              relativeTime = `${hours} hours ago`;
            } else {
              const days = Math.floor(timeDifference / 86400000);
              relativeTime = `${days} days ago`;
            }

            const likeCount = likes?.length;
            const commentCount = comments?.length;
            // const imageUpdate = `${imageUrl}.jpg`;
            const followers = user?.followers;

            return (
              <PostBox
                key={posted?._id}
                postId={posted?._id}
                content={content}
                img={imageUrl}
                like={likeCount}
                comment={commentCount}
                userId={user_id}
                timeStamp={relativeTime}
                poster={posted?.user}
                likes={likes}
                liked={liked}
                setLiked={setLiked}
                usen={user}
                // follower={followers}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default FeedUpper;
