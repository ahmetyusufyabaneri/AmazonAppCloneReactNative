import {Text, StyleSheet} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/dist/Ionicons";

const SubHeader = () => {
  return (
    <LinearGradient
      colors={["#BBE8EF", "#BDEEE9", "#C3F1E3"]}
      style={styles.container}>
      <Ionicons name="location-outline" size={20} />
      <Text>Deliever to United States - 234234</Text>
      <Ionicons name="chevron-down" size={16} color="#262626" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
});

export default SubHeader;
