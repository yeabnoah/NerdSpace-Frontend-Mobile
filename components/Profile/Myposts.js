import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Technerd from "../../assets/images/technerd.jpg";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
// import yoo from "https://ibb.co/bPpLtQv";
import MockData from "../../utils/MockData";
const { width, height } = Dimensions.get("window");

export default function Myposts() {
  // const MockData = [
  //   {
  //     id: 0,
  //     imagesLink:
  //       "https://images.unsplash.com/photo-1557754897-ca12c5049d83?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5aW5nfGVufDB8fDB8fHww",
  //   },

  //   {
  //     id: 1,
  //     imagesLink:
  //       "https://www.allprodad.com/wp-content/uploads/2019/08/08-22-19-real-teens.jpg",
  //   },

  //   {
  //     id: 2,
  //     imagesLink:
  //       "https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-2rol050i5dqb1.png?width=640&crop=smart&auto=webp&s=501e6d735e3f9d77d0746719a655e6e8ff42fce6",
  //   },
  //   {
  //     id: 3,
  //     imagesLink: "https://img.wattpad.com/cover/289326622-288-k784323.jpg",
  //   },
  //   {
  //     id: 4,
  //     imagesLink:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Teens_sharing_a_song.jpg/1200px-Teens_sharing_a_song.jpg",
  //   },
  //   {
  //     id: 5,
  //     imagesLink:
  //       "https://www.shutterstock.com/image-photo/happy-african-american-high-school-600nw-2322853049.jpg",
  //   },
  //   {
  //     id: 6,
  //     imagesLink:
  //       "https://static.spotboye.com/uploads/Sai_2022-7-11-5-34-31_thumbnail.jpg",
  //   },
  //   {
  //     id: 7,
  //     imagesLink:
  //       "https://static.spotboye.com/uploads/Sai_2022-7-11-5-34-31_thumbnail.jpg",
  //   },
  //   {
  //     id: 8,
  //     imagesLink:
  //       "https://static.spotboye.com/uploads/Sai_2022-7-11-5-34-31_thumbnail.jpg",
  //   },
  //   {
  //     id: 9,
  //     imagesLink:
  //       "https://static.spotboye.com/uploads/Sai_2022-7-11-5-34-31_thumbnail.jpg",
  //   },
  // ];

  return (
    <View
      style={{
        flex: 5,
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity>
          <MaterialIcons
            name="grid-on"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.035,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6" }}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.035,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6", textAlign: "center" }}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="bookmark"
            style={{
              color: "#7864F6",
              textAlign: "center",
              fontSize: height * 0.035,
              paddingTop: width * 0.04,
            }}
          />
          <Text style={{ color: "#7864F6" }}>Saved</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: height * 0.009,
          color: "white",
          borderWidth: 1,
          height: height * 0.002,
          width: width * 0.91,
          marginHorizontal: width * 0.05,
          backgroundColor: "white",
        }}
      ></View>
      <View
        style={{
          flex: 5,
          marginTop: 10,
          marginHorizontal: height * 0.004,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {MockData.map((posts) => {
          const ImageLink = posts.imagesLink;

          return (
            <View
              key={posts.id}
              style={{
                height: height * 0.14,
                width: height * 0.15,
                borderRadius: height * 0.023,
                margin: height * 0.005,
                borderWidth: 0.7,
                borderColor: "white",
              }}
            >
              <Image
                source={{
                  uri: `${ImageLink}`,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: height * 0.023,
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
