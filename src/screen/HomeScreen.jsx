import {ScrollView} from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Categories />
      <Carousel />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
  );
};

export default HomeScreen;
