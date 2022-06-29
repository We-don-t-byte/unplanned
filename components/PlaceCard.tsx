import { PlaceData } from "@googlemaps/google-maps-services-js";
import React, { ReactNode } from "react";

// type Props = {
//   name: string;
//   address: string;
//   image: string;
//   tags?: string[];
// };
type Props = {
  placeData: Partial<PlaceData>;
}

const PlaceCard: React.FC<Props> = ({placeData}) => {
            // name={ placeData.name || "Storia D'amore"}
            // address={placeData.adr_address || "Carrera 13 # 82 -36 Bogotá, Colombia"}
            // image={placeData.photos?.at(0)?.photo_reference || "https://restaurantestoriadamore.com/media/82-7.jpg"}
            // tags={["Restaurante", "Café", "Bar"]}
  console.log("Renderizando PlaceCard", placeData);
  const tags = ["Restaurante", "Café", "Bar"];
  return (
    <div className="overflow-hidden font-nunito shadow-lg rounded-xl h-100 w-full cursor-pointer m-auto">
      <div className="w-full block h-full">
        <img
          alt="Fotografía del lugar"
          src={placeData.photos?.at(0)?.photo_reference || "https://restaurantestoriadamore.com/media/82-7.jpg"}
          className="h-80 min-w-full w-full object-cover"
        />
        <div className="bg-white w-full p-4">
          <p className="text-gray-800 text-xl font-extrabold mb-2">
            { placeData.name || "Storia D'amore"}
          </p>
          <p className="text-gray-500 font-regular text-md">{placeData.adr_address || "Carrera 13 # 82 -36 Bogotá, Colombia"}</p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            {tags.map((tag) => (
              <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-green-100 rounded-2xl">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
