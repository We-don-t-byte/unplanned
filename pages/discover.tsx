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

  // console.log("ctx",ctx);
  const { query } = ctx;
  // console.log("params", query)
  const places = await getNearbyPlaces(
    // [4.649899928848368, -74.05539863377577],
    [parseFloat(query?.lat as string || "4.629038177572612"), 
     parseFloat(query?.long as string  || "-74.07522295757732")],
    parseInt(query?.radius as string ||  "5000"),
    "restaurant",
    // "Comida árabe"
    query?.searchKeyword as string || "Comida árabe"
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
      <Swiper places={[...places]} />
    </PageModule>
  );
};

export default Discover;
