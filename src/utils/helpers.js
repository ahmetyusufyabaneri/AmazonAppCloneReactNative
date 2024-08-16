import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

export const getRating = rating => {
  const ratingStar = [];

  const fullStar = <FontAwesome name="star" color="#FFA41C" size={10} />;

  const halfStar = (
    <FontAwesome name="star-half-empty" color="#FFA41C" size={10} />
  );

  const emptyStar = <FontAwesome name="star-o" color="#FFA41C" size={10} />;

  for (let i = 0; i < 5; i += 1) {
    if (i < rating) {
      ratingStar.push(fullStar);
    } else {
      ratingStar.push(emptyStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStar;
  }

  return ratingStar;
};
