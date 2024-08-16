import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import ProductScreen from "../screen/ProductScreen";
import {NavigationContainer} from "@react-navigation/native";

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
