import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands of day</Text>
      <View style={styles.row}>
        <View style={styles.brands}>
          <Image source={Brand1} style={styles.image} />
          <Text style={styles.brandTitle}>
            Min. 20% off | Fossil, Titan Smart Watch & More
          </Text>
        </View>
        <View style={styles.brands}>
          <Image source={Brand2} style={styles.image} />
          <Text style={styles.brandTitle}>
            Min. 40% off | Fossil, Titan Smart Watch & More
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.brands}>
          <Image source={Brand3} style={styles.image} />
          <Text style={styles.brandTitle}>
            Heels - Upto 50% OFF on Heeled Sandals, High Heel
          </Text>
        </View>
        <View style={styles.brands}>
          <Image source={Brand4} style={styles.image} />
          <Text style={styles.brandTitle}>
            Sony 60W Blutooth SoundBar Speaker Audio Engine
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  brands: {
    width: "50%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  brandTitle: {
    color: "#000000",
    fontSize: 12,
    marginTop: 4,
  },
});

export default Brands;
