import * as dotenv from "dotenv";
import { Client } from "@googlemaps/google-maps-services-js";

dotenv.config();

export const maps = new Client({});

type valid_places = "restaurant" | "museum" | "night_club" | "cafe";

async function getNearbyPlaces(
  keyword: string,
  location: [number, number],
  radius: number,
  type: valid_places,
  minPrice: 0 | 1 | 2 | 3 | 4 | undefined = undefined,
  maxprice: 0 | 1 | 2 | 3 | 4 | undefined = undefined
) {
  const params = {
    keyword,
    location,
    key: process.env.MAPS_API_KEY as string,
    radius,
    type,
    minPrice,
    maxprice,
  };
  let {
    data: {
      results: places,
      // next_page_token: next_page_token
    },
  } = await maps.placesNearby({ params });
  // if (next_page_token) {
  //     places = [...places, ...(await getNearbyPlaces(location, radius, type, maxprice, next_page_token))];
  // }
  return places;
}
