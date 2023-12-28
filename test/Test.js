import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

export default function Test() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", {
      uri: image.assets[0].uri,
      type: image.assets[0].type,
      name: image.assets[0].fileName,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  return (
    <View style={{ paddingTop: 300 }}>
      <Text>Content:</Text>
      <TextInput value={content} onChangeText={setContent} />

      <Text>Image:</Text>
      <Button title="Pick Image" onPress={handleImagePicker} />

      {image && (
        <Image
          source={{ uri: image.assets[0].uri }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Button title="Post" onPress={handlePost} />
    </View>
  );
}
