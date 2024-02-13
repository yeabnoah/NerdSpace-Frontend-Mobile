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
import React, { useContext, useEffect, useState } from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Ip from "../../utils/IpAdress";
import MockImages from "../../utils/mockImage";
import Modals from "./Modal";
import { PostContext, UidContext, posterContext } from "../../context/UID";
import axios from "axios";
import logger from "../Chat/image-1703760243066.jpg";
import { useNavigation } from "@react-navigation/native";

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
  usen,
}) {
  const userData = useContext(PostContext);
  const value = useContext(UidContext);
  const [commentOn, setCommentOn] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [commenter, setCommenter] = useState("");
  const [allComments, setAllComments] = useState();
  const [samePoster, setSamePoster] = useState(false);
  const [userImage, setUserImage] = useState(userData.avatarImage);
  const followers = usen?.followers;
  const navigation = useNavigation();
  const { posterData, setPosterData } = useContext(posterContext);

  const [showFullContent, setShowFullContent] = useState(false);
  const truncatedContent = content.split(" ").slice(0, 20).join(" ");

  useEffect(() => {
    followers?.map((id) => {
      if (userData.userId === id) {
        setFollowed(true);
      }
    });

    if (userData.userId === usen?._id) {
      setSamePoster(true);
    }
  }, []);

  if (userData.avatarImage) {
    if (userData.avatarImage !== null) {
      userData.avatarImage = userData.avatarImage.replace(/\\/g, "/");
    } else {
      userData.avatarImage = null;
    }
  }

  const urlAv = `http://${Ip}:5000/users/${userData.avatarImage}`;

  if (usen?.avatar_image) {
    if (usen.avatar_image !== null) {
      usen.avatar_image = usen.avatar_image.replace(/\\/g, "/");
    } else {
      usen.avatar_image = null;
    }

    const urlAvatar = `http://${Ip}:5000/users/${usen?.avatar_image}`;

    if (img !== null) {
      img = img.replace(/\\/g, "/");
    } else {
      img = null;
    }

    const url = `http://${Ip}:5000/users/${img}`;

    const UId = userData.userId;

    const [aboutPost, setAboutPost] = useState(false);
    const [liked, setLiked] = useState(
      likes.some((postUserId) => postUserId?._id === userId)
    );

    const followHandler = () => {
      setFollowed(!followed);
      console.log(userId);

      axios
        .post(
          `http://${Ip}:5000/users/auth/follow/${userId}`,
          { userIdToken: userData.userId },
          {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          // console.log(response);
        });
    };

    const commentHandler = () => {
      setCommentOn(!commentOn);

      if (!commentOn) {
        axios
          .get(`http://${Ip}:5000/users/auth/post/comment/${postId}`, {
            headers: {
              authorization: value,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // console.log(response.data);
            setAllComments(response.data);
          });

        console.log("Comment clicked!!");
      } else {
        setAllComments([]);
      }
    };

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
      const requestData = {
        content: commenter,
      };

      setCommentOn(false);
      axios
        .post(
          `http://${Ip}:5000/users/auth/post/comment/${postId}`,
          JSON.stringify(requestData),
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

    const fetchUser = () => {
      console.log("its not you who posted the data ...");

      axios
        .get(`http://${Ip}:5000/users/auth/profile/user/${userId}`, {
          headers: {
            authorization: value,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          const responseData = response.data.data;
          setPosterData({
            userId: "65a79a2f425a60c3b70a3f35",
            name: responseData?.name,
            username: responseData?.username,
            phoneNumber: responseData?.phoneNumber,
            avatarImage: responseData?.avatarImage,
            joinedOn: "2024-01-17T09:13:19.380Z",
            followers: responseData?.followers,
            following: responseData?.following,
            coverImage: responseData?.coverImage,
          });
          console.log("#####", response.data);
          // this.data = "userData_posted ";
          navigation.navigate("Poster");
        })
        .catch(function (error) {
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$", error);
          console.log("user Data is not loaded...");
        });
    };

    return (
      <View
        style={{
          marginTop: width * 0.014,
          marginBottom: 10,
          // backgroundColor: "#",
          // borderColor: "#968fe9",
          // borderWidth: 0.3,
          margin: width * 0.01,
          height: "max-width",
          paddingBottom: width * 0.02,
          borderBottomColor: "#524e80",
          borderBottomWidth: 0.25,
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
            <TouchableOpacity
              onPress={async () => {
                if (samePoster) {
                  navigation.navigate("Profile");
                } else {
                  await fetchUser();
                }
              }}
            >
              <Image
                source={{ uri: urlAvatar }}
                alt="hello"
                style={{
                  height: height * 0.056,
                  width: height * 0.056,
                  borderRadius: height * 0.01,
                  marginLeft: height * 0.01,
                  marginRight: height * 0.01,
                }}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: height * 0.025,
                  color: "#8c52ff",
                  fontFamily: "poppins",
                }}
              >
                {poster.username}
              </Text>
              <Text
                style={{
                  fontSize: height * 0.018,
                  color: "#6b6868",
                  fontFamily: "poppins",
                  marginTop: width * -0.015,
                }}
              >
                Nerd@Hardware
              </Text>
            </View>
          </View>
          {!samePoster ? (
            <View style={{ display: "flex", flexDirection: "row" }}>
              {followed ? (
                <TouchableOpacity
                  onPress={() => followHandler()}
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
                      color: "#7864f6",
                      marginTop: width * 0.01,
                      fontFamily: "poppins",
                      marginRight: 26,
                    }}
                  >
                    Following
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => followHandler()}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 0,
                    height: height * 0.04,
                    paddingHorizontal: width * 0.02,
                  }}
                >
                  <FontAwesome5
                    name="user-plus"
                    style={{
                      color: "#7864f6",
                      fontSize: height * 0.016,
                      paddingTop: width * 0.014,
                      paddingHorizontal: 4,
                    }}
                  />

                  <Text
                    style={{
                      color: "#fff",
                      marginTop: width * 0.01,
                      fontFamily: "poppins",
                      marginRight: 26,
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => setAboutPost(true)}>
                <Feather
                  name="more-vertical"
                  style={{
                    color: "#968fe9",
                    fontSize: height * 0.025,
                    marginTop: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 0,
                height: height * 0.04,
                paddingHorizontal: width * 0.02,
                width: width * 0.3,
              }}
            >
              <Text style={{}}>{/* Edit */}</Text>
            </TouchableOpacity>
          )}
        </View>

        {img ? (
          <View style={{ paddingHorizontal: height * 0.02 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View>
                {img !== null && (
                  <View
                    style={{
                      flex: 1,
                      alignItems: "baseline",
                      paddingVertical: 3,
                    }}
                  >
                    <Image
                      source={{
                        uri: url,
                      }}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: width * 0.78,
                        width: width * 0.78,
                        borderRadius: width * 0.045,
                      }}
                    />
                  </View>
                )}
              </View>
              <View style={{ marginHorizontal: 13, paddingTop: 10 }}>
                {liked ? (
                  <TouchableOpacity
                    onPress={() => {
                      unlikePost();
                    }}
                    style={{
                      backgroundColor: "#8c52ff",
                      padding: 10,
                      borderRadius: 100,
                    }}
                  >
                    <AntDesign
                      name="heart"
                      size={16}
                      style={{ color: liked ? "white" : "white" }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      likePost();
                    }}
                    style={{
                      backgroundColor: "#8c52ff",
                      padding: 10,
                      borderRadius: 100,
                    }}
                  >
                    <AntDesign
                      name="heart"
                      size={16}
                      style={{ color: liked ? "white" : "black" }}
                    />
                  </TouchableOpacity>
                )}

                <Text
                  style={{
                    color: "#8c52ff",
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: 3,
                    marginTop: 3,
                    fontFamily: "poppins",
                  }}
                >
                  {like}
                </Text>

                <TouchableOpacity
                  onPress={commentHandler}
                  style={{
                    backgroundColor: "#8c52ff",
                    padding: 10,
                    borderRadius: 100,
                  }}
                >
                  <FontAwesome name="comment" size={15} color="black" />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#8c52ff",
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: 3,
                    marginTop: 3,
                    fontFamily: "poppins",
                  }}
                >
                  {comment}
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#8c52ff",
                    padding: 10,
                    borderRadius: 100,
                  }}
                >
                  <FontAwesome5 name="share" size={16} color="black" />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#8c52ff",
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: 3,
                    marginTop: 3,
                    fontFamily: "poppins",
                  }}
                >
                  {/* {comment} */}
                  65
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: "#b6b6b6",
                fontSize: height * 0.02,
                paddingHorizontal: width * 0.015,
                fontFamily: "poppins",
                width: width * 0.9,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {showFullContent ? `${content}.` : `${truncatedContent} ...`}
              {content.split(" ").length > 10 && (
                <Text
                  style={{
                    color: "#8c52ff",
                    fontFamily: "poppins",
                  }}
                  onPress={() => setShowFullContent(!showFullContent)}
                >
                  {showFullContent ? " Read Less" : " Read More"}
                </Text>
              )}
            </Text>
          </View>
        ) : (
          <View style={{ paddingHorizontal: height * 0.02 }}>
            <Text
              style={{
                color: "#b6b6b6",
                fontSize: height * 0.02,
                paddingHorizontal: width * 0.015,
                fontFamily: "poppins",
                width: width * 0.9,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              {showFullContent ? `${content}.` : `${truncatedContent} ...`}
              {content.split(" ").length > 10 && (
                <Text
                  style={{
                    color: "#8c52ff",
                    fontFamily: "poppins",
                  }}
                  onPress={() => setShowFullContent(!showFullContent)}
                >
                  {showFullContent ? " Read Less" : " Read More"}
                </Text>
              )}
            </Text>

            <View style={{}}>
              <View
                style={{
                  marginHorizontal: 13,
                  paddingTop: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    marginRight: width * 0.06,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#8c52ff",
                      fontSize: 18,
                      textAlign: "center",
                      marginBottom: 3,
                      marginTop: 3,
                      fontFamily: "poppins",
                      paddingTop: height * 0.008,
                    }}
                  >
                    {like}
                  </Text>
                  {liked ? (
                    <TouchableOpacity
                      onPress={() => {
                        unlikePost();
                      }}
                      style={{
                        backgroundColor: "#8c52ff",
                        padding: 10,
                        borderRadius: 100,
                        marginLeft: width * 0.03,
                      }}
                    >
                      <AntDesign
                        name="heart"
                        size={16}
                        style={{ color: liked ? "white" : "white" }}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        likePost();
                      }}
                      style={{
                        backgroundColor: "#8c52ff",
                        padding: 10,
                        borderRadius: 100,
                        marginLeft: width * 0.03,
                      }}
                    >
                      <AntDesign
                        name="heart"
                        size={16}
                        style={{ color: liked ? "white" : "black" }}
                      />
                    </TouchableOpacity>
                  )}
                </View>

                <View
                  style={{
                    marginRight: width * 0.06,
                    display: "flex",
                    flexDirection: "row",
                    height: "max-content",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#8c52ff",
                      fontSize: 18,
                      textAlign: "center",
                      marginBottom: 3,
                      marginTop: 3,
                      fontFamily: "poppins",
                      paddingTop: height * 0.008,
                    }}
                  >
                    {comment}
                  </Text>
                  <TouchableOpacity
                    onPress={commentHandler}
                    style={{
                      backgroundColor: "#8c52ff",
                      padding: 10,
                      borderRadius: 100,
                      height: height * 0.05,
                      marginLeft: width * 0.03,
                    }}
                  >
                    <FontAwesome name="comment" size={15} color="black" />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    marginRight: width * 0.06,
                    display: "flex",
                    flexDirection: "row",
                    height: "max-content",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#8c52ff",
                      fontSize: 18,
                      textAlign: "center",
                      marginBottom: 3,
                      marginTop: 3,
                      fontFamily: "poppins",
                      paddingTop: height * 0.008,
                    }}
                  >
                    65
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#8c52ff",
                      padding: 10,
                      borderRadius: 100,
                      height: height * 0.05,
                      marginLeft: 10,
                    }}
                  >
                    <FontAwesome5 name="share" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}

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
          ></View>
        </View>
        {commentOn && (
          <View
            style={{
              borderTopWidth: 0.4,
              marginHorizontal: width * 0.04,
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: width * 0.87,
                marginLeft: width * 0.028,
                marginRight: 40,
                // paddingRight: height * 0.04,
                paddingLeft: 10,
                borderRadius: height * 0.02,
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "rgba(42, 37, 71,0.5)",
              }}
            >
              <Image
                source={{
                  uri: urlAv,
                }}
                style={{
                  height: height * 0.04,
                  width: height * 0.04,
                  borderRadius: 10,
                  marginTop: height * 0.015,
                }}
              />
              <TextInput
                onChangeText={(event) => {
                  setCommenter(event);
                }}
                placeholder="Enter Your Comment here"
                placeholderTextColor="gray"
                style={{
                  flex: 1,
                  paddingHorizontal: width * 0.03,
                  color: "#968fe9",
                  fontSize: height * 0.02,
                  fontFamily: "poppins",
                  paddingTop: 2,
                  marginLeft: 10,
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  postComment();
                }}
                style={{
                  // backgroundColor: "#968fe9",
                  height: height * 0.05,
                  width: height * 0.05,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 100,
                  marginVertical: height * 0.009,
                }}
              >
                <MaterialCommunityIcons
                  name="send"
                  style={{ fontSize: height * 0.025, color: "#7864f6" }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingHorizontal: width * 0.05,
                paddingVertical: width * 0.02,
              }}
            >
              {allComments &&
                allComments?.map((coma) => {
                  if (coma.userImage !== null) {
                    coma.userImage = coma.userImage.replace(/\\/g, "/");
                  } else {
                    coma.userImage = null;
                  }

                  const urlx = `http://${Ip}:5000/users/${coma?.userImage}`;
                  return (
                    <View
                      key={coma?._id}
                      style={{
                        height: "max-height",
                        borderRadius: 9,
                        paddingVertical: width * 0.04,
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >
                      <Image
                        style={{
                          height: height * 0.035,
                          width: height * 0.04,
                          borderRadius: 10,
                          marginRight: width * 0.05,
                        }}
                        source={{
                          uri: urlx,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            color: "#7864f6",
                            fontFamily: "poppins",
                            marginRight: width * 0.2,
                            fontSize: width * 0.032,
                            marginTop: height * -0.005,
                          }}
                        >
                          @{coma.username}
                        </Text>
                        <Text
                          style={{
                            color: "gray",
                            fontFamily: "poppins",
                            marginRight: width * 0.2,
                            fontSize: width * 0.038,
                          }}
                        >
                          {coma.content}
                        </Text>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        )}
      </View>
    );
  }
}
