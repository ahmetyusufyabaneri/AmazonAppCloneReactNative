import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {categories} from "../data/categories";
import {useNavigation} from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("ProductScreen")}
          style={styles.category}>
          <Image source={category.image} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  category: {
    alignItems: "center",
    paddingHorizontal: 4,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  categoryTitle: {
    fontSize: 13,
    color: "#2C4341",
  },
});

export default Categories;
