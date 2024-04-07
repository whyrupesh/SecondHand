import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function BackNavigationHeader() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={{display:"flex",flexDirection:"row",gap:10,alignItems:'center',marginBottom:5}}
                onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={{fontSize:20}}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}