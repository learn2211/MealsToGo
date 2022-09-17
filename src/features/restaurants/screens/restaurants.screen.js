import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants.info.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safearea.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/restaurants.search";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourite-bar";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingArea = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestuarantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingArea>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingArea>
      )}
      <Search
        isFavoriteToggle={isToggled}
        onFavoriteToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar navigate={navigation.navigate} favourites={favourites} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetails", { restaurant: item });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurantinfo={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
