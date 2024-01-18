import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import technerd from "../../assets/images/technerd.jpg";
import { SimpleLineIcons } from "@expo/vector-icons";
import TechNerd from "../../assets/images/technerd.jpg";
import MockPosts from "../../utils/MockPosts";

const { height, width } = Dimensions.get("window");

export default function LovedScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#968fe9" }}>
      <View style={{ flex: 1, backgroundColor: "#040418" }}>
        <ScrollView
          style={{ marginTop: width * 0.06, paddingBottom: width * 0.1 }}
        >
          {MockPosts.map((post) => {
            return (
              <View
                key={post.id}
                style={{
                  padding: width * 0.03,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={{ uri: post.imageLink }}
                  style={{
                    height: width * 0.28,
                    width: width * 0.25,
                    borderTopLeftRadius: width * 0.05,
                    borderBottomLeftRadius: width * 0.05,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#181428",
                    borderTopRightRadius: width * 0.04,
                    borderBottomRightRadius: width * 0.04,
                    padding: width * 0.01,
                    height: width * 0.28,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: width * 0.7,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: width * 0.05,
                        marginHorizontal: width * 0.02,
                      }}
                    >
                      {post.postTitle}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: width * 0.04,
                        marginHorizontal: width * 0.015,
                      }}
                    >
                      {post.details}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: width * 0.04,
                      marginVertical: width * 0.01,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      padding: width * 0.01,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: width * 0.2,
                      }}
                    >
                      <SimpleLineIcons
                        name="eyeglass"
                        style={{
                          color: "#968fe9",
                          fontSize: width * 0.06,
                          marginRight: width * 0.02,
                        }}
                      />
                      <Text
                        style={{ color: "#968fe9", marginTop: width * 0.01 }}
                      >
                        {post.view}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: width * 0.2,
                      }}
                    >
                      <Text
                        style={{ color: "#968fe9", marginTop: width * 0.01 }}
                      >
                        {post.Author}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: width * 0.2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#968fe9",
                          marginTop: width * 0.01,
                          fontsize: 7,
                        }}
                      >
                        {post.time}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
