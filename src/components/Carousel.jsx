import {View, Image, StyleSheet} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import {carousel} from "../data/carousel";
import {ScrollView} from "react-native-gesture-handler";

const Carousel = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={false}
        autoplay={true}>
        {carousel.map((item, index) => (
          <View key={index}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        ))}
      </Swiper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  wrapper: {
    height: 300,
  },
  carouselImage: {
    width: "100%",
    height: 250,
  },
});

export default Carousel;
