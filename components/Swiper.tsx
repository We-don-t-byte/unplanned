import React from "react";
import TinderCard from "react-tinder-card";
import PlaceCard from "../components/PlaceCard";
import { PlaceData } from "@googlemaps/google-maps-services-js";
//...

const Swiper: React.FC<{placeData: Partial<PlaceData>, handleSwipe: (d: "left" | "right") => void}> = ({placeData, handleSwipe}) => {
  handleSwipe = (d) => {
    console.log(d);
  }
  return (
    <div className="">
      <TinderCard preventSwipe={["up", "down"]}>
        <PlaceCard
          placeData={placeData}
        />
      </TinderCard>
    </div>
  );
};

export default Swiper;
