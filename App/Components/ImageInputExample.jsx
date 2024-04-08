import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

const ImageInputExample = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // Display selected image
        const source = { uri: response.uri };
        setImageSource(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={selectImage} />
      {imageSource && <Image source={imageSource} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ImageInputExample;
