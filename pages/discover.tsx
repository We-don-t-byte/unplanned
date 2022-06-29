import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import { getNearbyPlaces } from "../lib/mapsClient";

import Swiper from "../components/Swiper";
import PageModule from "../components/PageModule";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };
  }
  const { user } = session;

  const { query } = ctx;
  const places = await getNearbyPlaces(
    [4.649899928848368, -74.05539863377577],
    5000,
    "restaurant",
    "Comida árabe"
  );
  return {
    props: {
      places,
    },
  };
};

type Props = {
  places: any[];
};

const Discover: NextPage<Props> = ({ places }) => {
  return (
    <PageModule title="Descubrir">
      <Swiper places={[places[0]]} />
    </PageModule>
  );
};

export default Discover;
