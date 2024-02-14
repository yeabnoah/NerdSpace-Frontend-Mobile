import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMessage,
  faUserPlus,
  Ionicons,
} from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PostContext, posterContext } from "../../context/UID";
import Ip from "../../utils/IpAdress";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

function PosterCard({ userIdPoster }) {
  const navigation = useNavigation();
  const [follower, setFollower] = useState("");
  const [refreshCount, setRefreshCount] = useState(0);
  // const posterData = useContext(posterContext);
  const { posterData, setPosterData } = useContext(posterContext);
  const [setting, setSetting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Place the code you want to execute every 2 seconds here
      console.log("Refreshing every 2 seconds...");
      console.log("poster refreshed **************************");
      console.log(posterData);
    }, 2000);

    // Clear the interval when the component is unmounted or on cleanup
    return () => clearInterval(intervalId);
  }, [posterData]);

  if (posterData) {
    if (posterData?.coverImage) {
      if (posterData.coverImage !== null) {
        posterData.coverImage = posterData.coverImage.replace(/\\/g, "/");
      } else {
        posterData.coverImage =
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D";
      }
    }
  }

  if (posterData) {
    if (posterData?.avatarImage) {
      if (posterData.avatarImage !== null) {
        posterData.avatarImage = posterData.avatarImage.replace(/\\/g, "/");
      } else {
        posterData.avatarImage =
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D";
      }
    }
  }

  const urlCov = `http://${Ip}:5000/users/${posterData.coverImage}`;

  const url = `http://${Ip}:5000/users/${posterData.avatarImage}`;

  const Edit = () => {
    navigation.navigate("Edit");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSetting(false);
      }}
    >
      <View
        style={{
          height: height * 0.4,
          borderRadius: 10,
          flex: 5,
        }}
      >
        <View style={{}}>
          <View
            style={{
              marginBottom: height * -0.2,
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              alignItems: "flex-end",
              alignContent: "space-around",
            }}
          >
            {setting && (
              <View
                style={{
                  backgroundColor: "rgba(4, 4, 24,0.5)",
                  marginHorizontal: 10,
                  justifyContent: "flex-start",
                  padding: 5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  transition: "0.3s",
                }}
              >
                <TouchableOpacity
                  onPress={Edit}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginHorizontal: width * 0.02,
                    borderRadius: 5,
                    height: "max-content",
                    justifyContent: "center",
                    paddingHorizontal: 5,
                    paddingTop: height * 0.005,
                    marginTop: height * 0.02,
                    backgroundColor: "rgba(4, 4, 24,0.65)",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontFamily: "poppinsBold",
                      paddingHorizontal: 2,
                      textAlign: "left",
                      paddingTop: height * 0.005,
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={async () => {
                    try {
                      await AsyncStorage.removeItem("token");
                      console.log("Data removed");
                      console.log("user successfully logged out");
                      navigation.navigate("Login");
                    } catch (exception) {
                      console.log(exception);
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginHorizontal: width * 0.02,
                    borderRadius: 5,
                    height: "max-content",
                    justifyContent: "center",
                    paddingHorizontal: 5,
                    paddingVertical: height * 0.005,
                    zIndex: 1,
                    backgroundColor: "rgba(4, 4, 24,0.65)",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontFamily: "poppinsBold",
                      paddingHorizontal: 2,
                      textAlign: "center",
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* <View
          style={{
            height: height * 0.45,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            source={{
              uri: urlCov,
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
                source={{
                  uri: url,
                }}
                style={{ flex: 1, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: width * 0.045 }}>
            <Text
              style={{
                color: "white",
                fontFamily: "poppins",
                fontSize: width * 0.05,
              }}
            >
              @{posterData ? posterData.username : "username"}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.039,
                fontFamily: "poppins",
              }}
            >
              {posterData ? posterData.bio : "bio"}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: height * 0.008,
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginRight: width * 0.035,
                  fontFamily: "poppins",
                }}
              >
                {posterData ? posterData.followers : 0} Following
              </Text>

              <Text style={{ color: "white", fontFamily: "poppins" }}>
                {posterData ? posterData.following : 0} Following
              </Text>
            </View>
          </View>
        </View> */}

        <View
          style={{
            height: height * 0.45,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
          />
          <LinearGradient
            style={{ height: height * 0.3 }}
            colors={["transparent", "#040418"]}
            start={{ x: 0.5, y: 0.1 }}
          >
            <Image
              source={{
                uri: urlCov,
              }}
              style={{ flex: 1, zIndex: -1 }}
            />
          </LinearGradient>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: width * 0.04,
              marginTop: height * -0.095,
            }}
          >
            <Image
              source={{ uri: url }}
              style={{
                height: height * 0.09,
                width: height * 0.09,
                borderRadius: 100,

                marginLeft: width * 0.05,
                borderColor: "#040418",
                borderWidth: 1,
              }}
            />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.09,
                  marginLeft: width * 0.06,
                  fontFamily: "poppins",
                }}
              >
                {posterData?.name}
              </Text>
              <Text
                style={{
                  color: "#7864f6",
                  marginLeft: width * 0.065,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                  marginTop: -10,
                }}
              >
                {`nerd@${posterData?.nerd}`}
              </Text>
            </View>
          </View>

          {/* <TouchableOpacity style={{ marginTop: height * 0.02 }} onPress={Edit}>
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
        </TouchableOpacity> */}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: height * 0.01,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.045,
                  fontFamily: "poppinsBold",
                  textAlign: "center",
                }}
              >
                {posterData?.followers}
              </Text>
              <Text
                style={{
                  color: "#7864f6",
                  fontSize: width * 0.053,
                  fontFamily: "poppins",
                  textAlign: "center",
                }}
              >
                Followers
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.045,
                  fontFamily: "poppinsBold",
                  textAlign: "center",
                }}
              >
                {/* {posts?.length} */}
                10
              </Text>
              <Text
                style={{
                  color: "#7864f6",
                  fontSize: width * 0.053,
                  fontFamily: "poppins",
                  textAlign: "center",
                }}
              >
                Posts
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.045,
                  fontFamily: "poppinsBold",
                  textAlign: "center",
                }}
              >
                {posterData?.following}
              </Text>
              <Text
                style={{
                  color: "#7864f6",
                  fontSize: width * 0.053,
                  fontFamily: "poppins",
                  textAlign: "center",
                }}
              >
                Following
              </Text>
            </View>
          </View>
          <View
            style={{
              color: "white",
              borderWidth: 1.5,
              height: height * 0.004,
              width: width * 0.9,
              marginHorizontal: width * 0.05,
              marginTop: height * 0.015,
              backgroundColor: "#7864f6",
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              marginTop: 10,
              marginLeft: width * 0.05,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#7864f6",
                  fontFamily: "poppins",
                  fontSize: width * 0.04,
                  textAlign: "left",
                }}
              >
                @{posterData?.username}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: width * 0.04,
                  fontFamily: "poppins",
                  textAlign: "left",
                }}
              >
                {posterData?.bio}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

module.exports = PosterCard;
