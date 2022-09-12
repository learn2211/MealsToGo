import React, { useState } from "react";
import { ScrollView } from "react-native";
import { RestaurantInfo } from "../components/restaurants.info.component";
import { SafeArea } from "../../../utils/safearea.component";
import { List } from "react-native-paper";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handleBreakFastPress = () => setBreakFastExpanded(!breakFastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);
  return (
    <SafeArea>
      <RestaurantInfo restaurantinfo={restaurant} />
      <ScrollView>
        <List.Accordion
          title="BreakFast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakFastExpanded}
          onPress={handleBreakFastPress}
        >
          <List.Item title="Idli" />
          <List.Item title="Dosa" />
          <List.Item title="Upma" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handleLunchPress}
        >
          <List.Item title="Biryani" />
          <List.Item title="Veg Thali" />
          <List.Item title="Roti" />
          <List.Item title="Chicked Curry" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={handleDinnerPress}
        >
          <List.Item title="Biryani" />
          <List.Item title="Non Veg Thali" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={handleDrinksPress}
        >
          <List.Item title="Soda" />
          <List.Item title="Cocktails" />
          <List.Item title="Mocktails" />
          <List.Item title="Fruit Juice" />
          <List.Item title="Tea" />
          <List.Item title="Coffee" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
