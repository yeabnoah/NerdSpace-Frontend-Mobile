import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
// import yoo from "https://ibb.co/bPpLtQv";
import MockData from "../../utils/MockData";
const { width, height } = Dimensions.get("window");

export default function Myposts() {
  return (
    <View
      style={{
        flex: 5,
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity>
          <MaterialIcons
            name="grid-on"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.03,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6" }}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.03,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6", textAlign: "center" }}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="bookmark"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.03,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6" }}>Saved</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          color: "white",
          borderWidth: 1,
          height: height * 0.002,
          width: width * 0.91,
          marginHorizontal: width * 0.05,
          backgroundColor: "white",
        }}
      ></View>
      <View
        style={{
          flex: 5,
          marginTop: 10,
          marginHorizontal: height * 0.0085,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {MockData.map((posts) => {
          const ImageLink = posts.imagesLink;

          return (
            <View
              key={posts.id}
              style={{
                height: height * 0.14,
                width: height * 0.15,
                // borderRadius: height * 0.023,
                margin: height * 0.005,
                // borderWidth: 0.7,
                // borderColor: "white",
              }}
            >
              <Image
                source={{
                  uri: `${ImageLink}`,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  // borderRadius: height * 0.023,
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
