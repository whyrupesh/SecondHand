import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";

export default function ProductListItems({ product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product?.image[0]?.url }} style={styles.image} />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          <FontAwesome name="rupee" size={24} color="black" />
          {product.price}
        </Text>
        <Text>{product.name}</Text>
        <Text style={{ width: 150, fontSize: 10, color: "gray" }}>
          {product.description}
        </Text>
        <Text
          style={{
            fontSize: 10,
            backgroundColor: "white",
            borderRadius: 8,
            width: 100,
            padding: 1,
            marginTop: 2,
          }}
        >
          {" "}
          Listed:
          {moment(product.createdAt).format("DD-MMM-YYYY")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#d1e0d5",
    padding: 5,
    borderRadius: 8,
    flex: 1, // This makes the container take up all available space
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
  },
});
