import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Contacts({ name, phone }) {
  return (
    <View style={stlyes.container}>
      <Image source={require("../assets/profile.jpg")} style={stlyes.image} />
      <View style={stlyes.infoContainer}>
        <Text style={stlyes.name} numberOfLines={1}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View style={stlyes.icons}>
        <MaterialIcons name="local-phone" size={24} color="#009cf5" />
      </View>
      <View style={stlyes.icons}>
        <MaterialCommunityIcons
          name="message-processing"
          size={24}
          color="#009cf5"
        />
      </View>
      <View style={stlyes.icons}>
        <SimpleLineIcons name="options-vertical" size={24} color="#a8a8a8" />
      </View>
    </View>
  );
}
const stlyes = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 20,
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  infoContainer: {
    justifyContent: "center",
    flex: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  icons: {
    flex: 1,
  },
});
