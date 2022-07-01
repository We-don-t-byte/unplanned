import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "../lib/prisma";
import CardList from "../components/CardList";
import PageModule from "../components/PageModule";
import type { place } from '../components/CardList'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session || !session.user || !session.user.id) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      saved: true,
    }
  })
  if (user == null) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };

  }
  const saved = user.saved as place[];
  const places: place[] = [];
  const placeNames = new Set<string>();
  saved.forEach((p) => {
    if (!placeNames.has(p.name)) {
      places.push(p);
      placeNames.add(p.name);
    }
  })

  return {
    props: {
      places: places,
    },
  };
}



const Discover: NextPage<{places: place[]}> = ({places}) => {
  console.log(places)
  return (
    <PageModule title="Favoritos">
      <CardList places={places} />
    </PageModule>
  );
};

export default Discover;
