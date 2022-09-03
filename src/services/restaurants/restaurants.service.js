import { mocks, mockImages } from "./mocks";
import camelize from "camelize";

export const RestaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      return reject("not found");
    }
    resolve(mock);
  });
};

export const RestaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((result) => {
    result.photos = result.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...result,
      isOpenNow: result.opening_hours && result.opening_hours.open_now,
      isClosedTemporarily: result.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
