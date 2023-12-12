import { SafeAreaView } from "react-native-safe-area-context";
import RegisterUi from "../components/Register/register";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function Register() {
  return (
    <SafeAreaView style={{ height: height * 2, backgroundColor: "#7D7DD3" }}>
      <RegisterUi />
    </SafeAreaView>
  );
}
