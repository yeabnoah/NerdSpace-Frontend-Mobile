import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Image,
} from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../assets/images/logo-removebg-preview.png";

const { height, width } = Dimensions.get("window");

const ChatUpper = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [exists, setExists] = useState(true);
  const [combinedMessages, setCombinedMessages] = useState([]);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyC4zzQpO5I6z0p5YKv9tWhVDh30HbvuT2E"
  );
  const scrollViewRef = React.useRef();

  const handleSubmit = async () => {
    setLoading(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userInput;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const newMessage = { you: userInput, NerdAI: text };

      // Update the combined messages
      setCombinedMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear the input text after updating messages
      setUserInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the bottom when combinedMessages is updated
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [combinedMessages]);

  return (
    <View style={{ flex: 1, backgroundColor: "#040a12" }}>
      {exists && (
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: height * 0.3,
            }}
          >
            <View>
              <Text
                style={{
                  paddingTop: height * 0.016,
                  color: "gray",
                  fontFamily: "poppins",
                  textAlign: "center",
                  fontSize: 45,
                }}
              >
                Talk with Nerdai
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setExists(false);
                }}
                style={{
                  backgroundColor: "#7864f6",
                  marginLeft: width * 0.03,
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 20,
                  paddingLeft: 20,
                }}
              >
                <Text style={{ color: "white", fontFamily: "poppins" }}>
                  Start Talking
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginHorizontal: width * 0.16,
              marginTop: height * 0.045,
            }}
          >
            <View
              style={{
                width: "max-content",
                marginTop: height * 0.015,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  backgroundColor: "rgba(118, 100, 166, 0.1)",
                  borderRadius: 5,
                  padding: 12,
                }}
              >
                who are you ?
              </Text>
            </View>

            <View
              style={{
                width: "max-content",
                marginTop: height * 0.015,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  backgroundColor: "rgba(118, 100, 166, 0.1)",
                  borderRadius: 5,
                  padding: 12,
                }}
              >
                I am Nerdai ... designed on the top of the latest Googles Gemini
                model. You can ask me whatever question that comes to your mind.
              </Text>
            </View>
            {/* <View
              style={{
                width: "max-content",
                marginTop: height * 0.015,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  backgroundColor: "rgba(118, 100, 166, 0.1)",
                  borderRadius: 5,
                  padding: 12,
                  // justifyContent: "flex-end",
                }}
              >
                am very exited to meet you ... what can you help me with ?
              </Text>
            </View>

            <View
              style={{
                width: "max-content",
                marginTop: height * 0.015,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  backgroundColor: "rgba(118, 100, 166, 0.1)",
                  borderRadius: 5,
                  padding: 12,
                }}
              >
                whatever question that comes to your mind.
              </Text>
            </View> */}
          </View>
        </View>
      )}

      {!exists && (
        <View
          style={{
            flex: 1,
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.02,
            height: height,
            marginBottom: height * 0.06,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={logo}
              style={{
                height: height * 0.053,
                width: width * 0.15,
              }}
            />
          </View>
          <FlatList
            style={{ borderRadius: 10 }}
            ref={scrollViewRef}
            data={combinedMessages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <View
                  style={{
                    width: "max-content",
                    marginTop: height * 0.015,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      backgroundColor: "#393E56",
                      borderRadius: 5,
                      padding: 12,
                    }}
                  >
                    {item.you}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    padding: 12,
                    textAlign: "left",
                    borderRadius: 5,
                    backgroundColor: "#7864f2",
                    marginTop: height * 0.015,
                  }}
                >
                  {item.NerdAI}
                </Text>
              </View>
            )}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {loading && <ActivityIndicator size="large" color="#7864f6" />}
            <TextInput
              placeholderTextColor="gray"
              style={{
                flex: 1,
                paddingVertical: width * 0.02,
                paddingHorizontal: width * 0.035,
                borderWidth: 0.7,
                backgroundColor: "rgba(46, 49, 55, 0.9)",
                borderRadius: 5,
                color: "white",
                fontSize: width * 0.04,
                fontFamily: "poppins",
              }}
              placeholder="what is in your mind ?"
              onChangeText={(text) => setUserInput(text)}
            />

            <TouchableOpacity onPress={handleSubmit}>
              <Ionicons
                name="send"
                style={{
                  color: "#7864f6",
                  fontSize: width * 0.07,
                  marginHorizontal: width * 0.04,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChatUpper;
