import React from "react";
import { CardSwiper } from "react-card-rotate-swiper";
import PlaceCard from "./PlaceCard";

//...

const CardList = () => {
  return (
    <div className="mx-4 sm:w-3/4 sm:w-screen sm:mx-4">
      <div className="h-full pt-6">
        <PlaceCard
          name="Storia D'amore"
          address="Carrera 13 # 82 -36"
          image="https://restaurantestoriadamore.com/media/82-7.jpg"
          tags={["Restaurante", "Café", "Bar"]}
        />
      </div>
      <div className="h-full pt-6">
        <PlaceCard
          name="LEO"
          address="Calle 65bis # 4-23"
          image="http://restauranteleo.com/wp-content/uploads/2021/09/fachada.jpg"
          tags={["Restaurante", "Alta cocina"]}
        />
      </div>
      <div className="h-full pt-6">
        <PlaceCard
          name="Frites Artois"
          address="Carrera 12 #83-53"
          image="https://www.semana.com/resizer/ddRmFV0SwIh-lLbovLyJupjLcc4=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/NI4H7T3MHZFMBP23ECWSZHQZEY.jpg"
          tags={["Restaurante", "Cerveza"]}
        />
      </div>
    </div>
  );
};

export default CardList;
