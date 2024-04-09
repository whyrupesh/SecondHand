import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import BackNavigationHeader from "../../Components/BackNavigationHeader";
import ImageInputExample from "../../Components/ImageInputExample";
import GlobalApi from "../../Utils/GlobalApi";

export default function ProductListingForm() {
  const [productName, setProductName] = useState("");
  const [price, setprice] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");

  //create Booking Method
  const createNewProduct = () => {
    const data = {
      name: productName,
      price: price, // Convert to integer
      description: description,
      contact: contact, // Convert to integer
      emailId: email,
    };
    GlobalApi.createProductList(data)
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
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        {/* back navigation header */}
        <BackNavigationHeader />
        {/* here ask users details about the product */}
        <View style={styles.formcontainer}>
          <Text>Fill Deeeetails of the Product Below.</Text>
          {/* Product Name */}
          <Text style={styles.headerText}>Product Name:</Text>
          <TextInput
            style={styles.textIn}
            placeholder="Product Name"
            value={productName}
            onChangeText={(text) => setProductName(text)}
          />
          {/* Price */}
          <Text style={styles.headerText}>Your Asking Price:</Text>
          <TextInput
            style={styles.textIn}
            keyboardType="numeric"
            placeholder="Price"
            value={price}
            onChangeText={(text) => setprice(text)}
          />
          {/* contact */}

          <Text style={styles.headerText}>Your Contact Number:</Text>
          <TextInput
            style={styles.textIn}
            keyboardType="numeric"
            placeholder="9090909090"
            value={contact}
            onChangeText={(text) => setcontact(text)}
          />
          {/* email */}
          <Text style={styles.headerText}>Your Email-ID:</Text>
          <TextInput
            style={styles.textIn}
            placeholder="something@gmail.com"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
          {/* description */}
          <Text style={styles.headerText}>Description about Your Product:</Text>
          <TextInput
            style={styles.descriptiontextIn}
            multiline={true}
            numberOfLines={4}
            placeholder="Write about your product"
            value={description}
            onChangeText={(text) => setdescription(text)}
          />

          {/* Image selector */}
          {/* <ImageInputExample /> */}
          {/* submit button */}
          <TouchableOpacity onPress={() => createNewProduct()}>
            <Text style={styles.submitbtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
