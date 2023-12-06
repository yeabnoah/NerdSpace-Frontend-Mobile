import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Technerd from "../../assets/images/technerd.jpg";
import MockData from "../../utils/MockData";
import MockImages from "../../utils/mockImage";
import PostBox from "./PostBox";
import logo from "../../assets/images/logo-removebg-preview.png";

const { width, height } = Dimensions.get("window");

export default function FeedUpper() {
  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      <View
        style={{
          backgroundColor: "#040418",
          height: height * 0.45,
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
            <AntDesign
              name="bars"
              style={{
                marginTop: height * 0.007,
                // color: "#201C34",
                color: "#7864F6",
                fontSize: height * 0.04,
                width: height * 0.047,
                height: height * 0.047,
                padding: height * 0.005,
                // backgroundColor: "#7864F6",
                borderRadius: 10,
              }}
            />
            {/* <Text
              style={{
                color: "#fff",
                paddingHorizontal: height * 0.019,
                fontSize: height * 0.03,
                fontWeight: "900",
                color: "#fff",
                marginTop: height * 0.012,
              }}
            >
              Nerd Space
            </Text> */}
            <View
              style={{
                // backgroundColor: "#7864F6",
                // height: width * 0.08,
                // width: width * 0.08,
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
                  // backgroundColor: "#7864F6",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ padding: height * 0.024 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: height * 0.035,
              // fontWeight: "600",
            }}
          >
            TimeLine
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: height * 0.023,
              fontWeight: "400",
              paddingHorizontal: 2,
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
            margin: height * 0.006,
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
                  marginHorizontal: 7,
                }}
              >
                <Image
                  source={{
                    uri: `${Post.imageLink}`,
                  }}
                  style={{
                    height: 120,
                    width: 65,
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: 5,
                    fontSize: 14,
                  }}
                >
                  {Post.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginBottom: width * 0.22 }}>
        <ScrollView style={{}}>
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
        </ScrollView>
      </View>
    </View>
  );
}
