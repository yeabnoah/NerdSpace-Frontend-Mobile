import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Technerd from "../../assets/images/technerd.jpg";
import MockData from "../../utils/MockData";
import MockImages from "../../utils/mockImage";
import PostBox from "./PostBox";
import logo from "../../assets/images/logo-removebg-preview.png";
import axios from "axios";
import { useEffect } from "react";
import Ip from "../../utils/IpAdress";

const { width, height } = Dimensions.get("window");

export default function FeedUpper() {
  const [post, setPost] = useState([]);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("token");
  //     if (value !== null) {
  //       // value previously stored
  //       this.props.navigation.navigate("Login");
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  useEffect(() => {
    axios
      .get(`http://192.168.214.83:5000/users/mock`)
      .then((response) => {
        setPost(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      <View
        style={{
          backgroundColor: "#040418",
          height: height * 0.3,
          // height: height,
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
                  // backgroundColor: "#7864F6",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                borderRadius: 100,
              }}
            >
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
                    // color: "#fff",
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
          {MockImages.map((Post) => {
            return (
              <TouchableOpacity
                key={Post.id}
                style={{
                  height: 120,
                  // backgroundColor: "#7864F6",
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
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: width * 0.22,
          height: post ? "max-width" : height,
        }}
      >
        <ScrollView style={{}}>
          {post.map((posted) => {
            return (
              <View key={posted.id}>
                <PostBox
                  key={posted.id}
                  content={posted.content}
                  img={posted.imageUrl}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
