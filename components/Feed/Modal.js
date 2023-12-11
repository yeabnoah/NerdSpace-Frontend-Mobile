import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");
export default function Modals({ aboutPost, setAboutPost }) {
  return (
    <View>
      {/* Modal */}
      <Modal
        visible={aboutPost}
        // animationType="fade"
        transparent={true}
        onRequestClose={() => setAboutPost(false)}
      >
        <TouchableOpacity
          onPress={() => setAboutPost(false)}
          style={{ backgroundColor: "transparent", flex: 1 }}
        >
          <View
            style={{
              backgroundColor: "rgba(4, 4, 24, 1)",
              height: width * 0.5,
              width: width * 0.5,
              marginTop: width * 0.65,
              marginLeft: width * 0.47,
              borderWidth: 1,
              // borderColor: "white",
              borderRadius: width * 0.02,
            }}
          >
            <TouchableOpacity
              style={{
                // backgroundColor: "#181428",
                marginTop: width * 0.05,
                paddingHorizontal: width * 0.01,
                paddingHorizontal: width * 0.05,
                borderRadius: width * 0.05,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="report"
                style={{
                  color: "white",
                  fontSize: width * 0.058,
                  marginRight: width * 0.035,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  // marginTop: width * 0.009,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                }}
              >
                Report this post
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                // backgroundColor: "#181428",
                marginTop: width * 0.05,
                paddingHorizontal: width * 0.01,
                paddingHorizontal: width * 0.05,
                borderRadius: width * 0.05,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Feather
                name="user-plus"
                style={{
                  color: "white",
                  fontSize: width * 0.057,
                  marginLeft: width * 0.005,
                  marginRight: width * 0.035,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  // marginTop: width * 0.009,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                }}
              >
                Follow user
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                // backgroundColor: "#181428",
                marginTop: width * 0.05,
                paddingHorizontal: width * 0.01,
                paddingHorizontal: width * 0.05,
                borderRadius: width * 0.05,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Entypo
                name="share"
                style={{
                  color: "white",
                  fontSize: width * 0.057,
                  // marginLeft: width * 0.005,
                  marginRight: width * 0.035,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  // marginTop: width * 0.009,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                }}
              >
                Share this post
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                // backgroundColor: "#181428",
                marginTop: width * 0.05,
                paddingHorizontal: width * 0.01,
                paddingHorizontal: width * 0.05,
                borderRadius: width * 0.05,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="copy"
                style={{
                  color: "white",
                  fontSize: width * 0.053,
                  marginLeft: width * 0.005,
                  marginRight: width * 0.035,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  // marginTop: width * 0.009,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                }}
              >
                Copy link
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* Modal */}
    </View>
  );
}
