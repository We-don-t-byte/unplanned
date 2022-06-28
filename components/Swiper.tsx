import React from "react";
import { CardSwiper } from "react-card-rotate-swiper";
import PlaceCard from "../components/PlaceCard";

//...

const Swiper = () => {
  const handleSwipe = (d: any) => {
    console.log(d);
  };
  return (
    <div className="">
      <CardSwiper
        onSwipe={handleSwipe}
        contents={
          <PlaceCard
            name="Storia D'amore"
            address="Carrera 13 # 82 -36
            Bogotá, Colombia"
            image="https://restaurantestoriadamore.com/media/82-7.jpg"
            tags={["Restaurante", "Café", "Bar"]}
          />
        }
        detectingSize={200}
        throwLimit={1000}
      />
    </div>
  );
};

export default Swiper;
