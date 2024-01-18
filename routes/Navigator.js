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
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Ip from "../utils/IpAdress";
import axios from "axios";
import { PostContext, UidContext } from "../context/UID";
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
  const data = useContext(PostContext);
  const userImage = data.avatarImage;
  const [modalVisible, setModalVisible] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");

  const [pickedImage, setPickedImage] = useState("");
  // const apiUrl = `http://${Ip}:5000/users/auth/create`;

  if (data.avatarImage) {
    if (data.avatarImage !== null) {
      data.avatarImage = data.avatarImage.replace(/\\/g, "/");
    } else {
      data.avatarImage = null;
    }
  }

  const urlAv = `http://${Ip}:5000/users/${data.avatarImage}`;

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
      // aspect: [4, 3],
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
        backgroundColor: "#030308",
        // paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
        <Feather
          name="home"
          style={{
            color: "#968fe9",
            fontSize: width * 0.06,
            paddingTop: width * 0.02,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <AntDesign
          name="search1"
          style={{
            color: "#968fe9",
            fontSize: width * 0.06,
            paddingTop: width * 0.02,
          }}
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        pickedImage={pickedImage}
      >
        {/* <TouchableOpacity
          // onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
          }}
        > */}
        <View
          style={{
            backgroundColor: "#000000",
            paddingHorizontal: 20,
            // paddingVertical: 10,
            width: width,
            height: height * 0.4,
            flex: 1,
            // borderColor: "#7864f1",
            borderWidth: 0.7,
          }}
        >
          <View
            style={{
              // flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign
                name="close"
                style={{
                  color: "#968fe9",
                  fontSize: width * 0.07,
                  marginTop: height * 0.04,
                }}
              />
            </TouchableOpacity>

            <View
              style={{ marginTop: width * 0.08, marginBottom: width * 0.04 }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={{
                  backgroundColor: "#968fe9",
                  borderRadius: width * 0.08,
                  width: width * 0.18,
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    textAlign: "center",
                    paddingHorizontal: width * 0.001,
                    paddingVertical: width * 0.008,
                    fontSize: width * 0.05,
                    color: "white",
                  }}
                >
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: "max-height",
              borderColor: "#7864",
              borderBottomColor: "#968fe9",
              borderBottomWidth: 0.6,
              marginHorizontal: 5,
              paddingBottom: height * 0.01,
            }}
          >
            <Image
              source={{ uri: urlAv }}
              style={{
                height: width * 0.12,
                width: width * 0.12,
                borderRadius: 100,
                marginTop: height * 0.02,
              }}
            />

            <TextInput
              onChangeText={(text) => {
                setContent(text);
              }}
              value={content}
              multiline
              numberOfLines={7}
              placeholder="Enter your text post right here ......"
              placeholderTextColor={"#968fe9"}
              style={{
                height: "max-height",
                width: width * 0.85,
                color: "#968fe9",
                borderWidth: 0.4,
                borderRadius: 10,
                textAlignVertical: "top",
                marginTop: height * 0.03,
                marginHorizontal: width * 0.01,
                fontFamily: "poppins",
                fontSize: width * 0.05,
                // padding: 15,
              }}
            />

            <View style={{ display: "flex", flexDirection: "row" }}>
              <TouchableOpacity onPress={pickImage}>
                <FontAwesome
                  name="image"
                  style={{
                    color: "#968fe9",
                    fontSize: height * 0.03,
                    paddingVertical: width * 0.01,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage}>
                <Entypo
                  name="video"
                  style={{
                    color: "#968fe9",
                    fontSize: height * 0.03,
                    paddingVertical: width * 0.01,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage}>
                <FontAwesome
                  name="file-pdf-o"
                  style={{
                    color: "#968fe9",
                    fontSize: height * 0.028,
                    paddingVertical: width * 0.01,
                    paddingHorizontal: width * 0.03,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                height: height * 0.4,
                width: height * 0.4,
                marginTop: height * 0.02,
                marginHorizontal: height * 0.02,
                borderRadius: width * 0.02,
              }}
            />
          )}

          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              // marginTop: height * 0.08,
              // marginHorizontal: width * 0.01,
              backgroundColor: "#181a1e",
              borderColor: "#968fe9",
              borderWidth: 0.4,
              borderStyle: "dashed",
              height: "max-height",
              marginTop: 10,
              borderRadius: width * 0.02,
              width: width * 0.3,
              justifyContent: "center",
            }}
          >
            
          </View> */}
        </View>
        {/* </TouchableOpacity> */}
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={{
            paddingLeft: 2,
            borderWidth: 2,
            borderColor: "#968fe9",
            borderRadius: 100,
            backgroundColor: "#000000",
            marginTop: -17,
          }}
        >
          <Ionicons
            name="add-circle-sharp"
            style={{ color: "#968fe9", fontSize: width * 0.1, paddingTop: 0 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <MaterialCommunityIcons
          name="message-badge-outline"
          style={{
            color: "#968fe9",
            fontSize: width * 0.06,
            paddingTop: width * 0.02,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Feather
          name="user"
          style={{
            color: "#968fe9",
            fontSize: width * 0.06,
            paddingTop: width * 0.02,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
