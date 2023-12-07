import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MockImages from "../../utils/mockImage";

const { width, height } = Dimensions.get("window");
// let counter = 0;
export default function PostBox() {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#181428",
        margin: height * 0.006,
        borderRadius: 10,
        height: height * 0.42,
        paddingBottom: width * 0.07,
      }}
    >
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
              source={Technerd}
              alt="hello"
              style={{
                height: height * 0.07,
                width: height * 0.07,
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
                fontFamily: "Poppins",
              }}
            >
              Tech Nerd
            </Text>
            <Text
              style={{
                fontSize: height * 0.021,
                color: "#745FF4",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Mobile Developer
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather
            name="more-vertical"
            style={{ color: "#745FF4", fontSize: height * 0.036 }}
          />
        </TouchableOpacity>
      </View>
      {/* post Content */}
      <View style={{ padding: height * 0.016 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: height * 0.024,
            // fontWeight: "800",
            fontFamily: "Poppins",
          }}
        >
          #Back-end Projects
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: height * 0.02,
            paddingVertical: width * 0.01,
            fontFamily: "Poppins",
          }}
        >
          hey guys I've recently pushed my project to GitHub and its open-source
          ....
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: height * 0.0,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: height * 0.04,
            }}
          >
            <Entypo
              name="location"
              style={{
                color: "#745FF4",
                fontSize: height * 0.022,
                marginRight: height * 0.01,
              }}
            />
            <Text
              style={{
                color: "#745FF4",
                fontFamily: "Poppins",
              }}
            >
              @Addis City
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#745FF4",
                fontFamily: "Poppins",
              }}
            >
              | 10 Minutes ago
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height * 0.03,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: height * 0.03 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: height * 0.005,
                }}
              >
                <AntDesign
                  name="hearto"
                  style={{
                    color: "#fff",
                    fontSize: height * 0.027,
                    marginRight: height * 0.006,
                    marginTop: height * 0.003,
                  }}
                />
                <Text style={{ color: "#fff", fontSize: height * 0.023 }}>
                  22
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
                    color: "#fff",
                    fontSize: height * 0.027,
                    marginRight: height * 0.006,
                    marginTop: height * 0.003,
                  }}
                />
                <Text style={{ color: "#fff", fontSize: height * 0.023 }}>
                  22
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
                color: "#fff",
                // fontWeight: "900",
                marginTop: height * 0.004,
                fontSize: height * 0.022,
                marginRight: 10,
                fontFamily: "Poppins",
              }}
            >
              Liked By 210
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: height * 0.02,
              }}
            >
              {MockImages.map((image) => {
                // counter = counter + 1;
                return (
                  <Image
                    key={image.id}
                    source={Technerd}
                    style={{
                      height: height * 0.035,
                      width: height * 0.035,
                      borderRadius: 100,
                      marginRight: -15,
                    }}
                  />
                );
              })}
            </View>
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
        }}
      >
        <Image
          source={Technerd}
          style={{
            height: height * 0.055,
            width: height * 0.055,
            borderRadius: 100,
          }}
        />
        <TextInput
          placeholder="Enter Your Comment here"
          placeholderTextColor="gray"
          style={{
            flex: 1,
            borderRadius: height * 0.02,
            paddingHorizontal: width * 0.03,
            color: "#fff",
            fontSize: height * 0.021,
            fontFamily: "Poppins",
          }}
        />

        <TouchableOpacity
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
