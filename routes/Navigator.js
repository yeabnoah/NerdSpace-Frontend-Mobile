import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Ip from "../utils/IpAdress";
import axios from "axios";
import { UidContext } from "../context/UID";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";

const { width, height } = Dimensions.get("window");

export default function Navigator() {
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBoldpoppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    BoldBoldpoppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Bolder: require("../assets/fonts/Poppins-Italic.ttf"),
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const value = useContext(UidContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");

  const [pickedImage, setPickedImage] = useState("");
  // const apiUrl = `http://${Ip}:5000/users/auth/create`;

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
      }
    })();
  }, []);

  // console.log("image should be picked from the Gallery");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", {
  //       uri: image,
  //       name: "image.jpg",
  //       type: "image/jpeg",
  //     });
  //     formData.append("content", content);

  //     const response = await axios.post(
  //       `http://${Ip}:5000/users/auth/create`,
  //       formData,
  //       {
  //         headers: {
  //           authorization: value,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setImage("");
  //     setContent("");
  //     setModalVisible(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append("image", {
          uri: image,
          name: "image.jpg",
          type: "image/jpeg",
        });
      }
      if (content) {
        formData.append("content", content);
      } else {
        throw new Error("Text field is required");
      }

      const response = await axios.post(
        `http://${Ip}:5000/users/auth/create`,
        formData,
        {
          headers: {
            authorization: value,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setImage("");
      setContent("");
      setModalVisible(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: width * 0.056,
        paddingVertical: 5,
        backgroundColor: "black",
        // paddingHorizontal: 10,
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
        pickedImage={pickedImage}
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
                onChangeText={(text) => {
                  setContent(text);
                }}
                value={content}
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
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  height: height * 0.1,
                  width: height * 0.1,
                  marginVertical: height * 0.01,
                  marginHorizontal: height * 0.01,
                  borderRadius: width * 0.02,
                }}
              />
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: width * 0.01,
              }}
            >
              {/* this is the power of coding in the middle of the city ... */}
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
              <TouchableOpacity onPress={pickImage}>
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
                  handleSubmit();
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
