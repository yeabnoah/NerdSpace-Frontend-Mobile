import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React from "react";
import TechNerd from "../../assets/images/technerd.jpg";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const { width, height } = Dimensions.get("window");

export default function ProfileCard() {
  return (
    <View
      style={{
        height: height * 0.34,
        marginTop: height * 0.018,
        borderRadius: 10,
        marginHorizontal: 12,
        marginHorizontal: 5,
        flex: 5,
      }}
    >
      <View
        style={{
          paddingTop: width * 0.08,
          paddingHorizontal: width * 0.06,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableOpacity onMagicTap={() => console.log("hello")}>
            <Image
              source={TechNerd}
              style={{
                height: height * 0.13,
                width: height * 0.13,
                borderRadius: 100,
                borderColor: "#fff",
                borderWidth: 0,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: width * 0.03,
              width: width * 0.6,
              marginTop: width * 0.01,
            }}
          >
            <View style={{ marginLeft: width * 0.02 }}>
              <Text
                style={{ color: "white", fontSize: 17, fontFamily: "poppins" }}
              >
                Tech Nerd
              </Text>
              <Text
                style={{ color: "gray", fontSize: 14, fontFamily: "poppins" }}
              >
                Programmer
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ marginRight: width * 0.063 }}>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  style={{
                    color: "#fff",
                    fontSize: width * 0.05,
                    paddingTop: width * 0.02,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingTop: width * 0.02,
              marginLeft: width * 0.03,
            }}
          >
            <TouchableOpacity
              style={{
                paddingRight: width * 0.03,
                paddingLeft: width * 0.01,
                paddingRight: width * 0.02,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.05,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  7
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.04,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Posts
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingRight: width * 0.05, paddingLeft: width * 0.07 }}
            >
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.05,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  24
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.04,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Followers
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingHorizontal: width * 0.02 }}>
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.05,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  14
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#A5A3F8",
                    fontSize: width * 0.04,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Following
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: width * 0.08,
          paddingTop: width * 0.04,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "poppins",
          }}
        >
          Tech Nerd
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "poppins",
          }}
        >
          GBBS'22 AAU'27
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "poppins",
          }}
        >
          Self Taught Developer
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: height * 0.025,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#7864F6",
            width: width * 0.44,
            justifyContent: "center",
            padding: width * 0.033,
            borderRadius: 50,
          }}
        >
          <Feather
            name="user-plus"
            color="white"
            size={19}
            style={{ paddingTop: width * 0.002 }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: width * 0.02,
              fontFamily: "poppins",
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#7864F6",
            width: width * 0.44,
            justifyContent: "center",
            padding: width * 0.03,
            borderRadius: 50,
          }}
        >
          <AntDesign
            name="message1"
            style={{ color: "#fff", fontSize: height * 0.025 }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: width * 0.02,
              fontSize: height * 0.02,
              fontFamily: "poppins",
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
