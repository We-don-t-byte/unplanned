import * as dotenv from "dotenv";
import { Client } from "@googlemaps/google-maps-services-js";

dotenv.config();

export const maps = new Client({});

type valid_places = "restaurant" | "museum" | "night_club" | "cafe";

export async function getNearbyPlaces(
  location: [number, number],
  radius: number,
  type: valid_places,
  keyword: string | undefined = undefined,
  minPrice: 0 | 1 | 2 | 3 | 4 | undefined = undefined,
  maxprice: 0 | 1 | 2 | 3 | 4 | undefined = undefined
) {
  const params = {
    location,
    key: process.env.MAPS_API_KEY as string,
    radius,
    type,
    keyword,
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

function getRandomPlace(places: any[]) {
  return places[Math.floor(Math.random() * places.length)];
}

async function main() {
  const places = await getNearbyPlaces(
    [4.649899928848368, -74.05539863377577],
    1000,
    "night_club"
  );
  console.log(places.map(({ name }) => name));

  const place = getRandomPlace(places);
  console.log(
    place.name,
    place.vicinity,
    place.types.join(", "),
    place.business_status
  );
}
// main();
