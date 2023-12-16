import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Ip from "../utils/IpAdress";
import axios from "axios";
import { UidContext } from "../context/UID";

const { width, height } = Dimensions.get("window");

export default function Navigator() {
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBoldpoppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    BoldBoldpoppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Bolder: require("../assets/fonts/Poppins-Italic.ttf"),
  });

  const navigation = useNavigation();
  const value = useContext(UidContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const createPost = () => {
    axios
      .post(
        `http://${Ip}:5000/users/auth/create`,
        {
          postText: content,
          ImageUrl: imageUrl,
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
        console.log("posted successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
    setModalVisible(false);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: width * 0.056,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
        <Feather
          name="home"
          style={{ color: "#7864F6", fontSize: 23, paddingTop: width * 0.04 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <AntDesign
          name="search1"
          style={{ color: "#7864F6", fontSize: 23, paddingTop: width * 0.04 }}
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(4, 4, 24, 1)",
              paddingHorizontal: 20,
              paddingVertical: 10,
              // height: width * 1.16,
              width: width * 0.9,
              borderRadius: width * 0.04,
              borderColor: "#7864F6",
              borderWidth: 1,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign
                  name="close"
                  style={{ color: "white", fontSize: width * 0.05 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: width * 0.4,
                backgroundColor: "#181428",
                marginTop: width * 0.03,
                borderRadius: width * 0.04,
                borderColor: "#7864F6",
              }}
            >
              <TextInput
                onChangeText={(event) => {
                  setContent(event);
                }}
                multiline
                numberOfLines={4}
                placeholder="Enter your text post right here ......"
                placeholderTextColor={"gray"}
                style={{
                  height: width * 0.4,
                  color: "white",
                  borderWidth: 1,
                  paddingHorizontal: width * 0.06,
                  borderRadius: 10,
                  textAlignVertical: "top",
                  paddingTop: width * 0.03,
                  fontFamily: "poppins",
                  fontSize: width * 0.045,
                }}
              />
            </View>
            {linkVisible && (
              <View>
                <TextInput
                  placeholder="Enter the raw link here ......"
                  placeholderTextColor={"gray"}
                  style={{
                    // borderColor: "white",
                    backgroundColor: "#181428",
                    color: "white",
                    borderWidth: 1,
                    paddingHorizontal: width * 0.06,
                    paddingVertical: width * 0.03,
                    marginTop: width * 0.04,
                    borderRadius: width * 0.02,
                    fontFamily: "poppins",
                  }}
                />
              </View>
            )}

            {imageVisible && (
              <View>
                <TextInput
                  onChangeText={(event) => {
                    setImageUrl(event);
                  }}
                  placeholder="Enter image Link here ......"
                  placeholderTextColor={"gray"}
                  style={{
                    // borderColor: "white",
                    backgroundColor: "#181428",
                    color: "white",
                    borderWidth: 1,
                    paddingHorizontal: width * 0.06,
                    paddingVertical: width * 0.03,
                    marginTop: width * 0.04,
                    borderRadius: width * 0.02,
                    fontFamily: "poppins",
                  }}
                />
              </View>
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: width * 0.01,
              }}
            >
              <TouchableOpacity onPress={() => setLinkVisible(!linkVisible)}>
                <Ionicons
                  name="attach"
                  style={{
                    color: "white",
                    fontSize: height * 0.035,
                    paddingVertical: width * 0.02,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImageVisible(!imageVisible)}>
                <FontAwesome
                  name="image"
                  style={{
                    color: "white",
                    fontSize: height * 0.033,
                    paddingVertical: width * 0.02,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="video"
                  style={{
                    color: "white",
                    fontSize: height * 0.035,
                    paddingVertical: width * 0.02,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="file"
                  style={{
                    color: "white",
                    fontSize: height * 0.035,
                    paddingVertical: width * 0.02,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{ marginTop: width * 0.02, marginBottom: width * 0.04 }}
            >
              <TouchableOpacity
                onPress={() => {
                  createPost();
                }}
                style={{
                  backgroundColor: "#7864F6",
                  borderRadius: width * 0.01,
                  width: width * 0.8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    textAlign: "center",
                    padding: width * 0.02,
                    fontSize: width * 0.06,
                  }}
                >
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons
          name="add-circle-sharp"
          style={{ color: "#7864F6", fontSize: 40, paddingTop: 0 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <MaterialCommunityIcons
          name="message-badge-outline"
          style={{ color: "#7864F6", fontSize: 23, paddingTop: width * 0.04 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Feather
          name="user"
          style={{ color: "#7864F6", fontSize: 23, paddingTop: width * 0.04 }}
        />
      </TouchableOpacity>
    </View>
  );
}
