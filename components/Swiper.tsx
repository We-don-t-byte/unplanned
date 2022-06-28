import React from "react";
import TinderCard from "react-tinder-card";
import PlaceCard from "../components/PlaceCard";

//...

const Swiper = () => {
  const handleSwipe = (d: any) => {
    console.log(d);
  };
  return (
    <div className="">
      <TinderCard preventSwipe={["up", "down"]}>
        <PlaceCard
          name="Storia D'amore"
          address="Carrera 13 # 82 -36
            Bogotá, Colombia"
          image="https://restaurantestoriadamore.com/media/82-7.jpg"
          tags={["Restaurante", "Café", "Bar"]}
        />
      </TinderCard>
    </div>
  );
};

export default Swiper;
