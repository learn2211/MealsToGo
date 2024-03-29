import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCardCover,
  RestaurantCard,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "../../restaurants/components/restaurants.info.styles";
import { Favourite } from "../../../components/favourites/favourite";

export const RestaurantInfo = ({ restaurantinfo = {} }) => {
  const {
    name = "Yummy Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "road No 10 Manikonda",
    isOpenNow = "true",
    rating = 4.2,
    isClosedTemporarily = "true",
    placeId,
  } = restaurantinfo;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurantinfo} />
      <RestaurantCardCover name={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`start ${placeId} ${i}`}
                xml={star}
                width="20"
                height="20"
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={"left"} size={"large"}>
              {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
            </Spacer>
            <Spacer position={"left"} size={"large"}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
