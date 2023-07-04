import React from "react";
import { FlatList, View, Text } from "react-native";

const ContactScreen = () => {
  const contacts = [
    { name: "sam", number: "894994 3838238" },
    { name: "sam", number: "894994 3838238" },
    { name: "sam", number: "894994 3838238" },
    { name: "sam", number: "894994 3838238" },
    { name: "sam", number: "894994 3838238" },
  ];
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
};

export default ContactScreen;
