import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";

import Swiper from "../components/Swiper";
import PageModule from "../components/PageModule";

import { getNearbyPlaces } from "../lib/mapsClient";
import { useRouter } from "next/router";
import { prisma } from "../lib/prisma";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import PlaceCard from "../components/PlaceCard";
import { Button } from "@material-tailwind/react";
type Props = {
  places: Awaited<ReturnType<typeof getNearbyPlaces>>;
}
function modulo(a: number, b: number) {
  return ((a % b) + b) % b
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      }
    }
  }
  const { user } = session;
  console.log(user)

  const { numRecommendations } = await prisma.user.findUniqueOrThrow({
      where: { id: user.id },
      select: {
          numRecommendations: true,
      }
  });

  console.log(numRecommendations);

  if (numRecommendations <= 0) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      }
    };
  }

  
  const {query} = ctx;
  const places = await getNearbyPlaces(
    [4.649899928848368, -74.05539863377577],
    1000,
    "night_club"
  );
  console.log(places);
  if (places.length === 0) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      }
    }
  }

  await prisma.user.update({
      where: { id: user.id },
      data: {
          numRecommendations: {
              decrement: places.length,
          },
      },
  }
  );
  return {
    props: {
      places,
    },
  };
}
const Discover: NextPage<Props> = ({places}) => {
  const [place, setPlace] = React.useState(places[0]); 
  const [index, setIndex] = React.useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(direction);
    setIndex(modulo((index + (direction === "left" ? 1 : -1)),places.length));
    setPlace(places[index]);
    console.log(`index=${index} | place=`, places);
    
  }
  return (
    <PageModule title="Descubrir">
    
      <PlaceCard placeData={place}/>
      <Button onClick={() => handleSwipe("left")} color="green" variant="gradient" className="rounded-full self-center" size="md">
        <span className="text-white">Left</span>
      </Button>
      <Button onClick={() => handleSwipe("right")} color="green" variant="gradient" className="rounded-full self-center" size="md">
        <span className="text-white">Right</span>
      </Button>
    </PageModule>
  );
};

export default Discover;
