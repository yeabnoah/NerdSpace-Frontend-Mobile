import { View, Text } from "react-native";
import { UidContext } from "../context/UID";
import { useContext } from "react";

function HomeScreen() {
  // const username = useContext(UidContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello</Text>
    </View>
  );
}

export default HomeScreen;
