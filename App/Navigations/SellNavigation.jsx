import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellScreen from "../Screens/SellScreen/SellScreen";
import ProductListingForm from "../Screens/SellScreen/ProductListingForm";

const Stack = createStackNavigator();
export default function SellNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sell" component={SellScreen} />
      <Stack.Screen name="ProductListingForm" component={ProductListingForm} />
    </Stack.Navigator>
  );
}
