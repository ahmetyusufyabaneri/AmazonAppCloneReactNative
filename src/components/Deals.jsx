import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import RecommendedProduct from "./../assets/recommend.jpg";

const Deals = () => {
  return (
    <View>
      <View style={styles.showcase}>
        <Text style={styles.title}>Recommended deal for you</Text>
      </View>
      <Image source={RecommendedProduct} style={styles.image} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>15.49 $</Text>
          <Text style={styles.actualPrice}>18.95 $</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.productIntroduction}>
            Nykaa Face Wash Gentle Skin Cleanser for all skin type
          </Text>
        </View>
        <View style={styles.allDealsContainer}>
          <TouchableOpacity>
            <Text style={styles.allDeals}>See all deals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  showcase: {
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 240,
  },
  bottomSection: {
    padding: 10,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  offDeal: {
    backgroundColor: "#BE0201",
    color: "#fff",
    padding: 5,
  },
  deal: {
    color: "#BE0201",
    fontSize: 13,
  },
  discountPrice: {
    fontSize: 18,
  },
  actualPrice: {
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  productIntroduction: {
    fontSize: 14,
  },
  allDealsContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  allDeals: {
    fontSize: 20,
    marginTop: 4,
    color: "#017185",
  },
});

export default Deals;
