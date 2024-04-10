import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import BackNavigationHeader from "../../Components/BackNavigationHeader";
import { useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import ImageInput from "../../Components/ImageInput";

export default function ProductForm() {
  const [proName, setProductName] = useState("");
  const [price, setprice] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handleImageSelect = (uri) => {
    console.log("Selected Image URI:", uri);
    setImageUri(uri);
  };

  //create Booking Method
  const createNewProduct = () => {
    const data = {
      name: proName,
      price: price,
      description: description,
      contact: contact,
      emailId: email,
      productImage: { uploadUrl: imageUri },
    };
    GlobalApi.createSellerProduct(data)
      .then((resp) => {
        console.log("Resp", resp);
        ToastAndroid.show("Product create Successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        ToastAndroid.show("Failed to create product", ToastAndroid.LONG);
      });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <BackNavigationHeader />
        <View style={{ margin: 15 }}>
          {/* here ask users details about the product */}
          <Text>Fill Details of the Product Below.</Text>
          {/* Product Name */}
          <Text style={styles.headerText}>Product Name:</Text>
          <TextInput
            style={styles.textIn}
            placeholder="Product Name"
            value={proName}
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
            placeholder="Write about your product.This helps to reach more buyer."
            value={description}
            onChangeText={(text) => setdescription(text)}
          />
          {/* Image selector */}
          {/* Image picker */}
          {/* <TouchableOpacity onPress={selectImage}>
          <Text style={styles.button}>Select Image</Text>
        </TouchableOpacity>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />} */}
          <ImageInput onImageSelect={handleImageSelect} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
});
