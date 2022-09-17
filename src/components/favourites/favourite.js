import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((f) => f.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() => {
        isFavourite ? removeFavourites(restaurant) : addFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
