import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React from "react";
import Header from "../HomeScreen/Header";
import { Ionicons } from "@expo/vector-icons";
import YourListedItems from "./YourListedItems";
import ProductListingForm from "./ProductListingForm";
import { useNavigation } from "@react-navigation/native";

export default function SellScreen() {
  const [showModal, setShowModal] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Sell Your Unused Items.</Text>
        <Text>Click the Sell the button to add your own product.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("ProductForm")}
        >
          <Ionicons name="add-circle-sharp" size={24} color="white" />
          <Text style={styles.buttonText}>Sell</Text>
        </TouchableOpacity>
        {/* Your listed items list */}
        <YourListedItems />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 8,
    width: 100,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
