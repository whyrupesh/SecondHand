import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* header section */}
      <View style={styles.headcontainer}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginRight: 120 }}>
          SecondHand
        </Text>
        <Entypo name="location-pin" size={20} color="black" marginTop={10} />
        <Text style={{ fontSize: 15, marginTop: 10 }}>VIT,Chennai</Text>
      </View>
      <View style={styles.line}></View>

      {/* SearchBar Section */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search..." style={styles.searchBar} />
        <FontAwesome
          name="search"
          size={24}
          color="white"
          style={styles.searchicon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headcontainer: {
    backgroundColor: "#fff",
    marginTop: 50,
    marginLeft: 10,
    flexDirection: "row",
  },
  line: {
    borderBottomColor: "grey", // You can set the color for your line here
    borderBottomWidth: 1, // You can adjust the thickness of the line her
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  searchBar: {
    padding: 7,
    borderColor: "Grey",
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
