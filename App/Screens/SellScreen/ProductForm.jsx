import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import BackNavigationHeader from "../../Components/BackNavigationHeader";
import { useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function ProductForm() {
  const [proName, setProductName] = useState("");

  //create Booking Method
  const createNewProduct = () => {
    const data = {
      name: proName,
    };
    GlobalApi.createSellerProduct(data)
      .then((resp) => {
        console.log("Resp", resp);
        ToastAndroid.show("Booking create Successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        ToastAndroid.show("Failed to create product", ToastAndroid.LONG);
      });
  };
  return (
    <View>
      <BackNavigationHeader />
      {/* here ask users details about the product */}
      <Text>Fill Deeeetails of the Product Below.</Text>
      {/* Product Name */}
      <Text style={styles.headerText}>Product Name:</Text>
      <TextInput
        style={styles.textIn}
        placeholder="Product Name"
        value={proName}
        onChangeText={(text) => setProductName(text)}
      />

      {/* submit button */}
      <TouchableOpacity onPress={() => createNewProduct()}>
        <Text style={styles.submitbtn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  formcontainer: {
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textIn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  descriptiontextIn: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlignVertical: "top",
    padding: 5,
  },
  submitbtn: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    elevation: 5,
  },
});
