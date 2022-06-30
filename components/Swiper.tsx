import React, { ReactNode, useState } from "react";
import TinderCard from "react-tinder-card";
import PlaceCard from "../components/PlaceCard";
import router from "next/router";
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

// const UnplannedCard= dynamic(() => import('react-tinder-card'), {
//   ssr: false
// }) as React.FC<TinderCardProps>;

const UnplannedCard: React.FC<TinderCardProps> = TinderCard;
//...

type TinderCardProps = Parameters<typeof TinderCard>[0] & {
  children?: ReactNode;
};


type Props = {
  places: any[];
};



const Swiper: React.FC<Props> = ({ places }) => {
  const [place, setPlace] = useState(places[0]);
  const [index, setIndex] = useState(0)
  const { data: session, status } = useSession();
  if (places.length === 0) {
    return <p>No se encontraron lugares :c</p>;
  }
  function like() {
    if (session && session.user && session.user.id) {
    fetch(`/api/user/${session.user.id}/like`, { method: "POST", body: JSON.stringify({ place: place }) });
    }
  }
  function reject() {
    if (session && session.user && session.user.id) {
      fetch(`/api/user/${session.user.id}/dislike`, { method: "POST"});
    }
  }
  return (
    <div>
        <UnplannedCard
          className="position-absolute"
          key = {index}
          preventSwipe={["up", "down"]}
          onSwipe={(direction) => {
            if (direction === "right") {
              like();
            } else {
              reject();
            }
            setIndex(mod(index + 1, places.length));
            setPlace(places[index])

            // console.log("swiped", direction);
          }}
          swipeRequirementType="position"
          swipeThreshold={100}
        >
          <PlaceCard
            name={place?.name}
            address={place?.vicinity}
            image={place?.photo}
            tags={place?.types.slice(0, 3)}
            className="top-20 left-10 mx-6 position-relative"
          />
        </UnplannedCard>
    </div>
  );
};

export default Swiper;
