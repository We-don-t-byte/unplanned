import React, { ReactNode } from "react";
import TinderCard from "react-tinder-card";
import PlaceCard from "../components/PlaceCard";
import router from "next/router";

//...

type TinderCardProps = Parameters<typeof TinderCard>[0] & {
  children?: ReactNode;
};

const UnplannedCard: React.FC<TinderCardProps> = TinderCard;

type Props = {
  places: any[];
};

function like() {
  //TODO: Add liked place to user data
}

function reject() {
  //TODO: refresh only the component that was rejected
  router.reload();
}

const Swiper: React.FC<Props> = ({ places }) => {
  return (
    <div>
      {places.map((place) => (
        <UnplannedCard
          preventSwipe={["up", "down"]}
          onSwipe={(direction) => {
            if (direction === "right") {
              like();
            } else {
              reject();
            }
          }}
          swipeRequirementType="position"
          swipeThreshold={100}
        >
          <PlaceCard
            name={place?.name}
            address={place?.vicinity}
            image={place?.photo}
            tags={place?.types.slice(0, 3)}
            className="top-20 left-10 mx-6"
          />
        </UnplannedCard>
      ))}
    </div>
  );
};

export default Swiper;
