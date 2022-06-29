import React, { ReactNode } from "react";
import TinderCard from "react-tinder-card";
import PlaceCard from "../components/PlaceCard";

//...

type TinderCardProps = Parameters<typeof TinderCard>[0] & {
  children?: ReactNode;
};

const UnplannedCard: React.FC<TinderCardProps> = TinderCard;

type Props = {
  places: string[];
};

const Swiper = () => {
  const handleSwipe = (d: any) => {
    console.log(d);
  };
  return (
    <div className="">
      <UnplannedCard preventSwipe={["up", "down"]}>
        <PlaceCard
          name="Storia D'amore"
          address="Carrera 13 # 82 -36
            Bogotá, Colombia"
          image="https://restaurantestoriadamore.com/media/82-7.jpg"
          tags={["Restaurante", "Café", "Bar"]}
        />
      </UnplannedCard>
    </div>
  );
};

export default Swiper;
