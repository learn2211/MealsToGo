import React from "react";
import { Text, Card } from "react-native-paper";
import { StyleSheet } from "react-native";

export const RestaurantInfo = ({ restaurantinfo = {} }) => {
  const {
    name = "Yummy Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "road No 10 Manikonda",
    isOpenNow = "true",
    rating = 4.2,
    isClosedTemporarily,
  } = restaurantinfo;
  return (
    <Card elevation={5}>
      <Card.Cover
        name={name}
        style={styles.CardCover}
        source={{ uri: photos[0] }}
      />
      <Text style={styles.restaurantName}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  CardCover: {
    padding: 10,
    backgroundColor: "white",
  },
  restaurantName: {
    padding: 10,
  },
});
