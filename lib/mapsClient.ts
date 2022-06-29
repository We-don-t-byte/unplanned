import { Client, Language } from "@googlemaps/google-maps-services-js";

export const maps = new Client({});

type valid_places = "restaurant" | "museum" | "night_club" | "cafe";

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
    language: Language.es,
    radius,
    type,
    keyword,
    minPrice,
    maxprice,
  };

  let {
    data: { results: places },
  } = await maps.placesNearby({ params });

  let placesWithPhoto = places.map((place) => {
    return {
      ...place,
      photo: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos?.[0]?.photo_reference}&key=${params.key}`,
    };
  });

  // Randomize the order of the places
  placesWithPhoto = shuffle(placesWithPhoto);

  return placesWithPhoto;
}
