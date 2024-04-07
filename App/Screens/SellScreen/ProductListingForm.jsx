import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet,TouchableOpacity } from 'react-native';

const ProductListingForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleNameChange = (text) => {
        setName(text);
    };

    const handlePriceChange = (text) => {
        setPrice(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    };

    const handlePhotoChange = (image) => {
        setPhoto(image);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Product details:', {
            name,
            price,
            description,
            phoneNumber,
            photo,
        });
    };
    

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={name}
                onChangeText={handleNameChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                onChangeText={handlePriceChange}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={handleDescriptionChange}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="phone-pad"
            />
            <Button title="Choose Photo" onPress={handlePhotoChange} />
            {photo && <Image source={{ uri: photo }} style={styles.image} />}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 12,
    },
});

export default ProductListingForm;