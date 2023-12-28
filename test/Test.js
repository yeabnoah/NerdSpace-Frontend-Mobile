import React, { useState } from "react";
import { StyleSheet, Button, View, Image, TextInput } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

const apiUrl = `http://10.0.2.2:8000/upload`;

export default function Test() {
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      const assets = docRes.assets;
      if (!assets) return;

      const imageFile = assets[0];
      setSelectedImage(imageFile);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };

  const poster = async () => {
    try {
      const formData = new FormData();

      // Add text data to the formData
      formData.append("text", text);

      // Add image data to the formData if an image is selected
      if (selectedImage) {
        formData.append("imageFile", {
          name: selectedImage.name,
          uri: selectedImage.uri,
          type: "image/jpeg",
        });
      }

      // Send POST request to the backend
      const { data } = await axios.post(apiUrl, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(data);
    } catch (error) {
      console.log("Error while posting data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Pick Image" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.image} />
      )}
      <Button title="Done" onPress={poster} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "80%",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
