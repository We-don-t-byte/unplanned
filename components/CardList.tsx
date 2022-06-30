import React from "react";
import PlaceCard from "./PlaceCard";

//...
export type place = {
  name: string ;
  vicinity: string ;
  photo: string ;
  types: string[];
}

const CardList: React.FC<{places: place[]}> = ({places}) => {
  return (
    <div className="mx-4">
      {places.map((place, index) => (
      <div className="h-full pt-6" key={index}>
        <PlaceCard
          name={place?.name}
          address={place?.vicinity}
          image={place?.photo}
          tags={place?.types.slice(0, 3)}
          className="top-20 left-10 mx-6 position-relative"
        />
      </div>))
      }
    </div>
  );
};

export default CardList;
