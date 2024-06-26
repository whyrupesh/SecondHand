import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

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
});
