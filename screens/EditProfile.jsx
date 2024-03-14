import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { PostContext, UidContext } from "../context/UID";
import axios from "axios";
import Ip from "../utils/IpAdress";

// uploads\\coverImage-1705304187824.jpg

const { height, width } = Dimensions.get("window");

export default function EditProfile() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(PostContext);
  const value = useContext(UidContext);
  const coverPlaceHolder = `uploads/cover-placeholder.jpg`;

  if (userData.coverImage !== null) {
    userData.coverImage = userData.coverImage.replace(/\\/g, "/");
  }
  // useEffect(() => {}, []);

  const [image, setImage] = useState(
    `https://nerdspace-backend.onrender.com/${userData.avatarImage}`
  );
  const [cover, setCover] = useState(
    `https://nerdspace-backend.onrender.com/${userData.coverImage}`
  );
  const [name, setName] = useState(userData.name || "");
  const [username, setUserName] = useState(userData.username || "");
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || "");
  const [email, setEmail] = useState(userData.email || "");
  const [bio, setBio] = useState(userData.bio || "");

  const [url, setUrl] = useState(
    `https://nerdspace-backend.onrender.com/${cover}`
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickCover = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log("***********************************", result.assets[0].uri);

      setCover(result.assets[0].uri);
      setUrl(cover);
      const pathSegments = cover.split("/");

      // The last segment in the array will be the file name
      const fileName = pathSegments[pathSegments.length - 1];

      // console.log("***********************************", fileName); // Fix this line to set the cover state with the selected image URI
    }
  };

  handleCoverSubmit = async () => {
    navigation.goBack();
    try {
      const formData = new FormData();

      if (cover) {
        formData.append("coverImage", {
          uri: cover,
          name: "coverImage.jpg",
          type: "image/jpeg",
        });
      }

      console.log(formData);
      const response = await axios.post(
        `https://nerdspace-backend.onrender.com/auth/profile/cover`,
        formData,
        {
          headers: {
            authorization: value,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Assuming you want to navigate back after a successful update
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    navigation.goBack();
    try {
      const formData = new FormData();

      if (image) {
        formData.append("avatar_image", {
          uri: image,
          name: "avatar_image.jpg",
          type: "image/jpeg",
        });
      }

      // if (cover) {
      //   formData.append("coverImage", {
      //     uri: cover,
      //     name: "coverImage.jpg",
      //     type: "image/jpeg",
      //   });
      // }

      if (name) {
        formData.append("name", name);
      }

      if (username) {
        formData.append("username", username);
      }

      if (email) {
        formData.append("email", email);
      }

      if (bio) {
        formData.append("bio", bio);
      }

      if (phoneNumber) {
        formData.append("phone_number", phoneNumber);
      }

      console.log(formData);
      const response = await axios.post(
        `https://nerdspace-backend.onrender.com/auth/profile/`,
        formData,
        {
          headers: {
            authorization: value,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Assuming you want to navigate back after a successful update
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "gray" }}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer} onPress={closeModal}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginLeft: width * 0.8,
                marginBottom: height * 0.01,
              }}
            >
              <AntDesign name="closecircleo" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickCover} style={styles.modalContent}>
              <Image
                style={{
                  flex: 1,
                  height: height * 0.35,
                  width: width * 0.9,
                }}
                source={{ uri: cover }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleCoverSubmit}
              style={{
                borderRadius: width * 0.5,
                height: height * 0.06,
                width: width * 0.5,
                justifyContent: "center",
                marginLeft: width * 0.02,
                marginTop: height * 0.05,
                backgroundColor: "#7864f6",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "poppins",
                  fontSize: width * 0.04,
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <ScrollView
        style={{
          display: "flex",
          backgroundColor: "#040a12",
          //   height: height,
          width: width,
          paddingHorizontal: width * 0.03,
          paddingVertical: height * 0.02,
          paddingBottom: height * 0.1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={{
            height: height * 0.05,
            marginBottom: height * 0.001,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            style={{
              color: "white",
              fontSize: width * 0.07,
              paddingTop: height * 0.004,
            }}
          />
          <Text
            style={{
              color: "white",
              fontFamily: "poppins",
              fontSize: width * 0.045,
              paddingTop: height * 0.008,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        {/* <View
          style={{
            borderBottomColor: "#7864f6",
            borderBottomWidth: 0.5,
            marginVertical: height * 0.01,
          }}
        ></View> */}

        <View
          style={{
            // backgroundColor: "pink",
            height: height * 0.05,
            marginBottom: height * 0.007,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "poppins",
              fontSize: width * 0.05,
            }}
          >
            Edit Profile
          </Text>
          <MaterialCommunityIcons
            name="account-edit"
            style={{ color: "white", fontSize: width * 0.065 }}
          />
        </View>

        <TouchableOpacity
          // onPress={pickCover}
          onPress={openModal}
          style={{
            height: height * 0.25,
            marginBottom: height * 0.007,
            display: "flex",
          }}
        >
          <Image
            style={{ flex: 1, borderRadius: width * 0.03 }}
            source={{
              uri: cover,
              // this is gonna be comment for the whole data to change
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pickImage}
          style={{
            // height: height * 0.11,
            // width: height * 0.11,
            borderRadius: 100,
            marginBottom: height * 0.007,
            marginTop: height * -0.065,
            marginLeft: width * 0.04,
            display: "flex",
            flexDirection: "row",
            // borderWidth: 5,
          }}
        >
          <Image
            style={{
              //   flex: 1,
              height: height * 0.11,
              width: height * 0.11,
              borderRadius: 100,
              borderColor: "#000000",
              borderWidth: 3,
            }}
            source={{
              uri: image,
            }}
          />
          <AntDesign
            name="pluscircleo"
            style={{
              color: "white",
              fontSize: 20,
              marginLeft: -20,
              marginTop: 53,
              backgroundColor: "black",
              color: "#fff",
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            // backgroundColor: "aqua",
            height: "max-height",
            marginBottom: height * 0.007,
            marginHorizontal: 10,
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#7864f6", fontFamily: "poppins" }}>
              Your Name
            </Text>
            <TextInput
              onChangeText={(e) => {
                setName(e);
              }}
              value={name}
              placeholderTextColor="gray"
              style={{
                color: "#fff",
                // borderBottomColor: "#7864f6",
                borderWidth: 0.6,
                backgroundColor: "rgba(118, 100, 246,0.15)",
                width: width * 0.9,
                paddingHorizontal: width * 0.025,
                borderRadius: width * 0.02,
                paddingVertical: height * 0.007,
              }}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#7864f6", fontFamily: "poppins" }}>
              username
            </Text>
            <TextInput
              onChangeText={(e) => {
                setUserName(e);
              }}
              value={username}
              placeholderTextColor="gray"
              style={{
                color: "#fff",
                // borderBottomColor: "#7864f6",
                borderWidth: 0.6,
                backgroundColor: "rgba(118, 100, 246,0.15)",
                width: width * 0.9,
                paddingHorizontal: width * 0.025,
                borderRadius: width * 0.02,
                paddingVertical: height * 0.007,
              }}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#7864f6", fontFamily: "poppins" }}>
              Phone Number
            </Text>
            <TextInput
              onChangeText={(e) => {
                setPhoneNumber(e);
              }}
              value={phoneNumber}
              placeholderTextColor="gray"
              style={{
                color: "#fff",
                // borderBottomColor: "#7864f6",
                borderWidth: 0.6,
                backgroundColor: "rgba(118, 100, 246,0.15)",
                width: width * 0.9,
                paddingHorizontal: width * 0.025,
                borderRadius: width * 0.02,
                paddingVertical: height * 0.007,
              }}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#7864f6", fontFamily: "poppins" }}>
              Email
            </Text>
            <TextInput
              onChangeText={(e) => {
                setEmail(e);
              }}
              value={email}
              placeholderTextColor="gray"
              style={{
                color: "#fff",
                // borderBottomColor: "#7864f6",
                borderWidth: 0.6,
                backgroundColor: "rgba(118, 100, 246,0.15)",
                width: width * 0.9,
                paddingHorizontal: width * 0.025,
                borderRadius: width * 0.02,
                paddingVertical: height * 0.007,
              }}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#7864f6", fontFamily: "poppins" }}>Bio</Text>
            <TextInput
              onChangeText={(e) => {
                setBio(e);
              }}
              value={bio}
              placeholderTextColor="gray"
              style={{
                color: "#fff",
                // borderBottomColor: "#7864f6",
                borderWidth: 0.6,
                backgroundColor: "rgba(118, 100, 246,0.15)",
                width: width * 0.9,
                paddingHorizontal: width * 0.025,
                borderRadius: width * 0.02,
                paddingVertical: height * 0.007,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              borderRadius: width * 0.5,
              height: height * 0.06,
              width: width * 0.5,
              justifyContent: "center",
              marginLeft: width * 0.19,
              marginTop: height * 0.006,
              backgroundColor: "#7864f6",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "poppins",
                fontSize: width * 0.04,
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  modalContent: {
    borderRadius: width * 0.04,
    alignItems: "center",
    height: height * 0.35,
    width: width * 0.9,
  },
});
