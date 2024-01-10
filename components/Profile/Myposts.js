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
import { PostContext, UidContext } from "../../context/UID";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function Myposts() {
  const userData = useContext(PostContext);
  const userId = userData.userId;
  const value = useContext(UidContext);
  const FEED_REFRESH_INTERVAL = 5000;
  const [posts, setPosts] = useState(null);

  console.log(userId);
  // const submitNow = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://${Ip}:5000/users/auth/post/comment/${userId}`,
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
          `http://${Ip}:5000/users/auth/post/comment/${userId}`,
          {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (value) {
      fetchData();
    }

    const interval = setInterval(fetchData, FEED_REFRESH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [value, Ip, FEED_REFRESH_INTERVAL]);

  return (
    <View
      style={{
        flex: 5,
        marginTop: height * 0.1,
      }}
    >
      <View
        style={{
          flex: 5,
          marginTop: 10,
          marginHorizontal: height * 0.0085,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          height: height,
        }}
      >
        {/* <TouchableOpacity
          onPress={() => {
            submitNow();
          }}
        >
          <Text
            style={{
              color: "gray",
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: width * 0.04,
              padding: width * 0.35,
            }}
          >
            No posts yet!
          </Text>
        </TouchableOpacity> */}

        {setPosts.length > 0 ? (
          <View>
            {posts.map((post) => {
              console.log(post);
              // <View
              //   style={{
              //     // backgroundColor: "red",
              //     padding: width * 0.02,
              //     display: "flex",
              //     marginHorizontal: 10,
              //   }}
              // >
              //   <View
              //     style={{
              //       display: "flex",
              //       flexDirection: "row",
              //     }}
              //   >
              //     <Image
              //       source={{
              //         uri: "https://i.pinimg.com/1200x/a0/97/24/a0972432d09bb57d471b5992ad5586c6.jpg",
              //       }}
              //       style={{
              //         height: height * 0.044,
              //         width: height * 0.05,
              //         borderRadius: 10,
              //       }}
              //     />
              //     <Text
              //       style={{
              //         color: "white",
              //         marginLeft: 10,
              //         fontFamily: "poppins",
              //         fontSize: 18,
              //       }}
              //     >
              //       UserName
              //     </Text>
              //   </View>
              //   <Text
              //     style={{
              //       color: "white",
              //       fontFamily: "poppins",
              //       fontSize: height * 0.02,
              //       marginRight: 10,
              //       marginBottom: 15,
              //     }}
              //   >
              //     {post.content}
              //   </Text>
              //   <Image
              //     source={{ uri: "https://i.quotev.com/3ud4dcdyurra.jpg" }}
              //     style={{
              //       height: height * 0.3,
              //       width: height * 0.4,
              //       borderRadius: 10,
              //     }}
              //   />
              // </View>;
            })}
          </View>
        ) : (
          <View>
            <Text style={{ color: "white" }}>No Posts</Text>
          </View>
        )}
      </View>
    </View>
  );
}
