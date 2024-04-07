import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder="Search..." style={styles.searchBar} />
      <FontAwesome
        name="search"
        size={24}
        color="white"
        style={styles.searchicon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  searchBar: {
    padding: 7,
    borderColor: "#000",
    borderWidth: 0.5, // Use borderWidth instead of borderStyle
    borderRadius: 8, // Use numerical value for borderRadius
    width: "85%",
  },
  searchicon: {
    backgroundColor: "black",
    width: 45,
    height: "auto",
    borderRadius: 8,
    padding: 10,
  },
});
