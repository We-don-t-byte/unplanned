import * as dotenv from "dotenv";
import {
  Client
} from "@googlemaps/google-maps-services-js";

dotenv.config();

export const maps = new Client({});

type valid_places = "restaurant" | "museum" | "night_club" | "cafe";

async function getNearbyPlaces(
  location: [number, number],
  radius: number,
  type: valid_places,
  maxprice: 0 | 1 | 2 | 3 | 4 | undefined = undefined,
  pagetoken: string | undefined = undefined,
) {
  const params = {
    location,
    key: process.env.MAPS_API_KEY as string,
    radius,
    type,
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

// async function main() {

//     const places = await getNearbyPlaces([4.676791724087879, -74.04847963497164],1000, "cafe");
//     console.log(places.map(({name}) => name));
// }
// main();
