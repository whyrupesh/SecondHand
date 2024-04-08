import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackNavigationHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headcontainer}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ fontSize: 20 }}>Back</Text>
          <View style={styles.line}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headcontainer: {
    marginTop: 50,
    marginLeft: 10,
  },
  line: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
