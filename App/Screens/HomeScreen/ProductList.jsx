import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import ProductListItems from "./ProductListItems";

export default function ProductList() {
  const [productLists, setProductList] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);

  /**
   * Get Product list form API
   */

  const getProductList = async () => {
    try {
      const resp = await GlobalApi.getProductList();
      // console.log("resp", resp);
      setProductList(resp.productLists);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>Recommendations for you</Text>
      <FlatList
        data={productLists}
        renderItem={({ item, index }) => (
          <View>
            <ProductListItems product={item}></ProductListItems>
            {/* Additional product details can be rendered here */}
          </View>
        )}
        // keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
