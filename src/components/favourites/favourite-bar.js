import React from "react";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ navigate, favourites }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((f) => {
          const key = f.name;
          return (
            <TouchableOpacity
              onPress={() => navigate("RestaurantDetails", { restaurant: f })}
            >
              <Spacer key={key} position="left" size="medium">
                <CompactRestaurantInfo restaurant={f} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
