import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./Header";
import ProductList from "./ProductList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ margin: 10 }}>
        {/* productlists */}
        <ProductList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
