import {View, Text, Image, StyleSheet} from "react-native";
import React from "react";

const ServicesCard = ({item}) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000000",
  },
  serviceImage: {
    width: "100%",
    height: 130,
  },
});

export default ServicesCard;
