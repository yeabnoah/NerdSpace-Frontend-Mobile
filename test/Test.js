// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import firebase from "firebase/app";
// import "firebase/storage";

// const firebaseConfig = {
//   // Your Firebase project configuration goes here
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const storage = firebase.storage();

// const Test = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const uploadImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({});
//       if (!result.cancelled) {
//         const response = await fetch(result.uri);
//         const blob = await response.blob();
//         const reference = storage.ref().child("images/" + Date.now() + ".jpg");
//         await reference.put(blob);
//         const downloadURL = await reference.getDownloadURL();
//         setImageUri(downloadURL);
//       }
//     } catch (error) {
//       console.error("Error picking/uploading image: ", error);
//     }
//   };

//   const fetchImage = async () => {
//     try {
//       const reference = storage.ref().child("images/your-image-name.jpg");
//       const downloadURL = await reference.getDownloadURL();
//       setImageUri(downloadURL);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//     }
//   };

//   return (
//     <View>
//       {imageUri && (
//         <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
//       )}
//       <TouchableOpacity onPress={uploadImage}>
//         <Text>Upload Image</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={fetchImage}>
//         <Text>Fetch Image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Test;
