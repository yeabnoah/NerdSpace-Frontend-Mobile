import { SafeAreaView } from "react-native-safe-area-context";
import RegisterUi from "../components/Register/register";
import { Dimensions, StatusBar } from "react-native";

const { height } = Dimensions.get("window");

export default function Register() {
  return (
    <SafeAreaView style={{ height: height * 2, backgroundColor: "#131313" }}>
      <StatusBar barContent="white" backgroundColor="#131313" />
      <RegisterUi />
    </SafeAreaView>
  );
}
