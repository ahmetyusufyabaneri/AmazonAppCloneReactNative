import {View, Text, ScrollView, StyleSheet, Image} from "react-native";
import React from "react";
import AmazonPay from "./../assets/amazon-pay.png";
import SendMoney from "./../assets/send-money.jpg";
import ScanQR from "./../assets/scan-qr.jpeg";
import PayBills from "./../assets/pay-bills.jpeg";
import {recentSearch} from "../data/recentSearch";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 10}}
      style={styles.container}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.image} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.image} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.image} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.image} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {recentSearch.map((item, index) => (
        <ServicesCard key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 5,
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  title: {
    fontSize: 11,
    marginTop: 2,
  },
});

export default Services;
