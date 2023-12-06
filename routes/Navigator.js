import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Navigator() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBoldPoppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    BoldBoldPoppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Bolder: require("../assets/fonts/Poppins-Italic.ttf"),
  });

  const navigation = useNavigation();
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

      <TouchableOpacity>
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
