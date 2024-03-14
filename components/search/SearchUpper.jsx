import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import {
  AntDesign,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import logo from "../../assets/images/technerd.jpg";
import axios from "axios";
import { PostContext, UidContext } from "../../context/UID";
import Ip from "../../utils/IpAdress";

const { height, width } = Dimensions.get("window");

export default function SearchUpper() {
  const [isClicked, setIsClicked] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [followedTwo, setFollowedTwo] = useState(false);

  const userData = useContext(PostContext);
  const value = useContext(UidContext);

  console.log("0000000000000000000000000000000", userData);

  const followHandler = (id) => {
    setFollowedTwo(true);
    console.log(id);

    axios
      .post(
        `https://nerdspace-backend.onrender.com/users/auth/follow/${id}`,
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
        console.log("this is follower function", response);
      });
  };

  const unFollowHandler = (id) => {
    setFollowedTwo(false);
    console.log(id);

    axios
      .post(
        `https://nerdspace-backend.onrender.com/users/auth/follow/${id}`,
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
        console.log("this is follower function", response);
      });
  };

  const handleSubmit = () => {
    setUserList([]);
    console.log("search btn clicked");
    setIsTrue(true);
    isClicked
      ? axios
          .post(
            `https://nerdspace-backend.onrender.com/users/auth/user/findByUserName`,
            { username: userInput },
            {
              headers: {
                authorization: value,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (!(response.data.userData.length === 0)) {
              setUserList((prev) => [...prev, response.data.userData]);
            }
            console.log(userList);
          })
          .catch((err) => {
            console.error(err);
          })
      : axios
          .post(
            `https://nerdspace-backend.onrender.com/users/auth/user/findByName`,
            // JSON.stringify(userInput),
            { name: userInput },
            {
              headers: {
                authorization: value,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (!(response.data.userData.length === 0)) {
              setUserList((prev) => [...prev, response.data.userData]);
            }
          })
          .catch((err) => {
            console.error(err);
          });
  };

  useEffect(() => {
    console.log("refreshed");
  }, [userList]);

  return (
    <View style={{ height: height, backgroundColor: "#040a12" }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          onChangeText={(input) => {
            setUserInput(input);
          }}
          placeholder="who do you wanna find ?"
          placeholderTextColor={"gray"}
          style={{
            backgroundColor: "#000000",
            width: width * 0.7,
            paddingLeft: width * 0.05,
            margin: width * 0.06,
            borderRadius: 15,
            borderColor: "#7864f6",
            borderWidth: 0.3,
            color: "#fff",
            fontSize: width * 0.043,
            fontFamily: "poppins",
          }}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            marginTop: width * 0.085,
            height: height * 0.087,
            width: width * 0.18,
            paddingLeft: width * 0.04,
            marginLeft: width * -0.05,
          }}
        >
          <AntDesign
            name="search1"
            style={{
              color: "#7864f6",
              fontSize: height * 0.035,
              // backgroundColor: "#040418",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: width * 0.1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="filter-variant"
          style={{
            color: "white",
            fontSize: 17,
            marginRight: width * 0.015,
            marginTop: height * 0.002,
          }}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "poppins",
            fontSize: 17,
            paddingBottom: height * 0.01,
          }}
        >
          Filters
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: width * 0.7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#7864f6",
            flex: 1,
            marginLeft: width * 0.08,
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsClicked(true);
            }}
            style={{
              flex: 1,
              padding: height * 0.012,
              backgroundColor: isClicked ? "#040418" : "#7864f6",
              borderColor: "#7864f6",
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "poppins",
                textAlign: "center",
                fontSize: 13,
              }}
            >
              Username
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsClicked(false);
            }}
            style={{
              flex: 1,
              padding: height * 0.012,
              borderColor: "#7864f6",
              backgroundColor: isClicked ? "#7864f6" : "#040418",
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "poppins",
                textAlign: "center",
                fontSize: 13,
              }}
            >
              Name
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: width * 0.1,
          display: "flex",
          flexDirection: "row",
          marginTop: height * 0.01,
        }}
      >
        <Foundation
          name="results"
          style={{
            color: "white",
            fontSize: 17,
            marginRight: width * 0.015,
            marginTop: height * 0.002,
          }}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "poppins",
            fontSize: 17,
            paddingBottom: height * 0.01,
          }}
        >
          Results
        </Text>
      </View>

      {userList.length > 0 ? (
        userList?.map((each) => {
          if (each[0]?.avatar_image) {
            if (each[0].avatar_image !== null) {
              each[0].avatar_image = each[0].avatar_image.replace(/\\/g, "/");
            } else {
              img = null;
            }
          }

          // const compare = userData.followingN;
          // const cc = each[0]._id;

          // if (userData.followingN.includes(each[0]._id)) {
          //   setFollowedTwo(true);
          // }

          const url = `https://nerdspace-backend.onrender.com/users/${each[0]?.avatar_image}`;
          // console.log("Image URL &&&&&&&&&&&&&&:", compare, cc);

          return (
            <View
              key={userList.indexOf(each)}
              style={{ marginTop: height * 0.01 }}
            >
              <View
                style={{
                  marginLeft: width * 0.1,
                  width: width * 0.804,
                  display: "flex",
                  flexDirection: "row",
                  borderColor: "#7864f6",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    width: width * 0.5,
                    height: "max-content",
                    paddingHorizontal: width * 0.04,
                    paddingVertical: height * 0.015,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      name :
                    </Text>
                    <Text
                      style={{
                        color: "#7864f6",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      {each[0]?.name}
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      Username :
                    </Text>
                    <Text
                      style={{
                        color: "#7864f6",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      {each[0]?.username}
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      Nerd @ :
                    </Text>
                    <Text
                      style={{
                        color: "#7864f6",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      Programming
                    </Text>
                  </View>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      Bio :
                    </Text>
                    <Text
                      style={{
                        color: "#7864f6",
                        fontFamily: "poppins",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      {each[0]?.bio}
                    </Text>
                  </View>
                  {/* <View>
                    {followed || followedTwo ? (
                      <TouchableOpacity
                        onPress={() => {
                          unFollowHandler(each[0]._id);
                        }}
                        style={{
                          // backgroundColor: "#7864f6",
                          display: "flex",
                          flexDirection: "row",
                          paddingVertical: height * 0.005,
                          justifyContent: "center",
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#7864f6",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "poppinsBold",
                            color: "#7864f6",
                          }}
                        >
                          Follow
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          followHandler(each[0]._id);
                        }}
                        style={{
                          backgroundColor: "#7864f6",
                          display: "flex",
                          flexDirection: "row",
                          paddingVertical: height * 0.005,
                          justifyContent: "center",
                          borderRadius: 10,
                        }}
                      >
                        <Text style={{ fontFamily: "poppinsBold" }}>
                          Followed
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View> */}
                </View>
                <Image
                  source={{ uri: url }}
                  style={{
                    height: "max-content",
                    width: width * 0.3,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    // marginLeft: width * 0.02,
                  }}
                />
              </View>
            </View>
          );
        })
      ) : (
        <View>
          {isTrue && (
            <Text
              style={{
                color: "#7864f6",
                marginLeft: width * 0.335,
                marginTop: height * 0.25,
                fontFamily: "poppinsBold",
                fontSize: 19,
              }}
            >
              User Not Found
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
