import React from "react";
import { FlatList, View, Text } from "react-native";
import Contacts from "./components/Contacts";
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
          return <Contacts name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
};

export default ContactScreen;
