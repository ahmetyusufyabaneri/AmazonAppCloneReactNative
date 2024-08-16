import {View, Text, ScrollView, StyleSheet, Image} from "react-native";
import React from "react";
import PrimeLogo from "../assets/prime-logo.png";
import {products} from "../data/products";
import {getRating} from "../utils/helpers";

const ProductScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price and other details may based on product asize and color
      </Text>
      {products.map((item, index) => (
        <View key={index} style={styles.productSection}>
          <View style={styles.productImageSection}>
            <Image source={item.image} style={styles.productImage}></Image>
          </View>
          <View style={styles.productDetailSection}>
            <Text style={styles.sponsored}>Sponsored</Text>
            <Text style={styles.productName}>{item.productName}</Text>
            <View style={styles.row}>
              <Text style={styles.rating}>{item.rating}</Text>
              {getRating(item.rating)}
              <Text style={styles.ratingCount}>{item.ratingCount}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.price}>{item.price} $</Text>
              <Text style={styles.crossout}>{item.crossOutText} $</Text>
            </View>
            <Text style={styles.cashback}>
              Up to 5% cashback with Amazon Pay Credit card
            </Text>
            <Image source={PrimeLogo} style={styles.logo} />
            <Text style={styles.cashback}>
              FREE Delivery by date {item.deliveryBy}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  tagLine: {
    fontSize: 12,
  },
  productSection: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
  },
  productImageSection: {
    width: "40%",
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
  },
  productName: {
    fontSize: 12,
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  rating: {
    fontSize: 10,
    color: "#017185",
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: "#017185",
  },
  price: {
    fontSize: 16,
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: "grey",
    textDecorationLine: "line-through",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});

export default ProductScreen;
