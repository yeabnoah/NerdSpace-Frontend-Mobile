import React, { useState, useEffect, useContext } from "react";
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
import { UidContext } from "../../context/UID";

const { width, height } = Dimensions.get("window");
const FEED_REFRESH_INTERVAL = 2000;

const FeedUpper = () => {
  const value = useContext(UidContext);
  // const userId = useContext(idToken);
  const [post, setPost] = useState([]);
  const [poster, setPoster] = useState({});
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${Ip}:5000/users/auth/feed`, {
          headers: {
            authorization: value,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        setPost(response.data.slice().reverse());
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle errors (e.g., show a user-friendly error message)
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, FEED_REFRESH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(4, 4, 24, 1)" }}>
      <View style={{ backgroundColor: "#040418", height: height * 0.3 }}>
        <View
          style={{
            paddingHorizontal: height * 0.017,
            paddingTop: height * 0.019,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
          style={{ flexDirection: "row", marginHorizontal: height * 0.006 }}
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
                source={{ uri: `${Post.imageLink}` }}
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
              relativeTime = "Just now";
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

            const likeCount = likes.length;
            const commentCount = comments.length;
            const imageUpdate = `${imageUrl}.jpg`;

            return (
              <PostBox
                key={posted._id}
                postId={posted._id}
                content={content}
                img={imageUpdate}
                like={likeCount}
                comment={commentCount}
                userId={user_id}
                timeStamp={relativeTime}
                poster={posted.user}
                likes={likes}
                liked={liked}
                setLiked={setLiked}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default FeedUpper;
