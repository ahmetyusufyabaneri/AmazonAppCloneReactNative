import {SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
