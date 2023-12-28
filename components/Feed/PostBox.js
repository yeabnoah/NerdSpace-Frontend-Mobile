import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { useContext, useState } from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Ip from "../../utils/IpAdress";
import MockImages from "../../utils/mockImage";
import Modals from "./Modal";
import { PostContext, UidContext } from "../../context/UID";
import axios from "axios";

const { width, height } = Dimensions.get("window");

export default function PostBox({
  content,
  img,
  like,
  comment,
  userId,
  timeStamp,
  poster,
  postId,
  likes,
}) {
  const userData = useContext(PostContext);
  const value = useContext(UidContext);

  const UId = userData.userId;
  // const userPic = userData.avatarImage;
  // console.log(userData);
  // console.log(userPic);
  const [aboutPost, setAboutPost] = useState(false);
  const [liked, setLiked] = useState(
    likes.some((postUserId) => postUserId._id === userId)
  );

  const [followed, setFollowed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [commenter, setCommenter] = useState("");

  const likePost = () => {
    axios
      .post(
        `http://${Ip}:5000/users/auth/post/like/${postId}`, // Corrected URL for liking
        {},
        {
          headers: {
            authorization: value,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("successfully liked");
        setLiked(true);
      })
      .catch((error) => {
        console.error("Error liking the post:", error);
      });
  };

  const unlikePost = () => {
    axios
      .post(
        `http://${Ip}:5000/users/auth/post/like/${postId}`, // Corrected URL for liking
        {},
        {
          headers: {
            authorization: value,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLiked(false);
        console.log("un liked successfully");
      })
      .catch((error) => {
        console.error("Error liking the post:", error);
      });
  };

  const postComment = () => {
    axios
      .post(
        `http://${Ip}:5000/users/auth/post/comment/${postId})`,
        {
          content: commenter,
        },
        {
          headers: {
            authorization: value,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("commented successfully: ");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View
      style={{
        marginTop: width * 0.02,
        marginBottom: 10,
        backgroundColor: "#181428",
        margin: width * 0.01,
        borderRadius: 10,
        // height: width * 0.825,
        height: "max-width",
        paddingBottom: width * 0.02,
      }}
    >
      <Modals aboutPost={aboutPost} setAboutPost={setAboutPost} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: height * 0.018,
          justifyContent: "space-between",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View>
            <Image
              source={{ uri: poster.avatar_image }}
              alt="hello"
              style={{
                height: height * 0.05,
                width: height * 0.05,
                borderRadius: height * 0.02,
                marginRight: height * 0.02,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: height * 0.023,
                color: "#fff",
                fontFamily: "poppins",
                paddingTop: width * 0.007,
              }}
            >
              {poster.username}
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {followed ? (
            <TouchableOpacity
              onPress={() => {
                setFollowed(!followed);
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 0,
                height: height * 0.04,
                paddingHorizontal: width * 0.02,
              }}
            >
              <Text
                style={{
                  color: "#745FF4",
                  marginTop: width * 0.01,
                  paddingLeft: width * 0.01,
                  fontFamily: "poppins",
                }}
              >
                Following
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setFollowed(!followed);
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 0,
                height: height * 0.04,
                paddingHorizontal: width * 0.02,
              }}
            >
              <AntDesign
                name="plus"
                style={{
                  color: "#745FF4",
                  fontSize: height * 0.0225,
                  paddingTop: width * 0.01,
                }}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: width * 0.01,
                  paddingLeft: width * 0.01,
                  fontFamily: "poppins",
                }}
              >
                Follow
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => setAboutPost(true)}>
            <Feather
              name="more-vertical"
              style={{ color: "#745FF4", fontSize: height * 0.036 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: height * 0.02 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: height * 0.021,
            paddingHorizontal: width * 0.017,
            fontFamily: "poppins",
          }}
        >
          {/* This is going to be the first post on this social media platform.
          Welcome to Nerd Space! I am the developer of Nerd Space and I wanted
          to thank all of you for joining the community and using this app... */}
          {content}
        </Text>
        {img && (
          <View style={{ flex: 1, alignItems: "baseline", paddingVertical: 3 }}>
            <Image
              source={{ uri: img }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: width * 0.7,
                width: width * 0.75,
                borderRadius: width * 0.025,
              }}
            />
          </View>
        )}
      </View>
      {/* post Content */}
      <View style={{ paddingHorizontal: height * 0.02 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: height * 0.04,
            }}
          ></View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: height * 0.008,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{ marginRight: height * 0.03, marginLeft: height * 0.01 }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: height * 0.005,
                }}
              >
                {liked ? (
                  <TouchableOpacity
                    onPress={() => {
                      unlikePost();
                    }}
                  >
                    <AntDesign
                      name="heart"
                      style={{
                        color: "#745FF4",
                        fontSize: height * 0.024,
                        marginRight: height * 0.006,
                        marginTop: height * 0.0022,
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      likePost();
                    }}
                  >
                    <AntDesign
                      name="hearto"
                      style={{
                        color: "gray",
                        fontSize: height * 0.024,
                        marginRight: height * 0.006,
                        marginTop: height * 0.0022,
                      }}
                    />
                  </TouchableOpacity>
                )}

                <Text style={{ color: "gray", fontSize: height * 0.02 }}>
                  {/* {like.map(() => {
                    setCounter(count + 1);
                    console.log(counter);
                  })} */}
                  {like}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: height * 0.005,
                }}
              >
                <MaterialCommunityIcons
                  name="message-badge-outline"
                  style={{
                    color: "gray",
                    fontSize: height * 0.024,
                    marginRight: height * 0.006,
                    marginTop: height * 0.003,
                  }}
                />
                <Text style={{ color: "gray", fontSize: height * 0.02 }}>
                  {comment}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                color: "gray",
                // fontWeight: "900",
                marginTop: height * 0.004,
                fontSize: height * 0.018,
                marginRight: 10,
                fontFamily: "poppins",
              }}
            >
              {timeStamp}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#040418",
          width: width * 0.94,
          marginHorizontal: width * 0.018,
          padding: height * 0.01,
          borderRadius: height * 0.04,
          display: "flex",
          flexDirection: "row",
          // marginVertical: 10
        }}
      >
        <Image
          source={{ uri: userData.avatarImage }}
          style={{
            height: height * 0.055,
            width: height * 0.055,
            borderRadius: 100,
          }}
        />
        <TextInput
          onChange={(event) => {
            setCommenter(event);
          }}
          placeholder="Enter Your Comment here"
          placeholderTextColor="gray"
          style={{
            flex: 1,
            borderRadius: height * 0.02,
            paddingHorizontal: width * 0.03,
            color: "#fff",
            fontSize: height * 0.021,
            fontFamily: "poppins",
          }}
        />

        <TouchableOpacity
          onPress={() => {
            postComment();
          }}
          style={{
            backgroundColor: "#7864F6",
            height: height * 0.04,
            width: height * 0.04,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            borderRadius: 100,
            marginVertical: height * 0.009,
          }}
        >
          <FontAwesome
            name="send-o"
            style={{ fontSize: height * 0.02, color: "#fff" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
