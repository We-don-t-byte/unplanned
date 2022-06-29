import React from "react";
import { CardSwiper } from "react-card-rotate-swiper";
import PlaceCard from "../components/PlaceCard";
import { PlaceData } from "@googlemaps/google-maps-services-js";
//...

const Swiper: React.FC<{placeData: Partial<PlaceData>, handleSwipe: (d: "left" | "right") => void}> = ({placeData, handleSwipe}) => {
  handleSwipe = (d) => {
    console.log(d);
  }
  return (
    <div className="">
      <CardSwiper
        onSwipe={(d:("left"|"right")) => handleSwipe(d)}
        contents={
          <PlaceCard
            placeData={placeData}
          />
        }
        detectingSize={200}
        throwLimit={1000}
      />
    </div>
  );
};

export default Swiper;
