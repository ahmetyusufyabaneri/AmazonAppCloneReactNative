import {View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Feather from "react-native-vector-icons/dist/Feather";

const Header = () => {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={["#88DAE0", "#98E1D6", "#9EE4D4"]}>
        <View style={styles.inputBox}>
          <View style={styles.search}>
            <Ionicons name="search" size={24} />
            <TextInput placeholder="Search" style={styles.textInput} />
          </View>
          <TouchableOpacity>
            <AntDesign name="scan1" size={22} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="mic" size={22} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#A1BCC0",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textInput: {
    fontSize: 16,
  },
});

export default Header;
