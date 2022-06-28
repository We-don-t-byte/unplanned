import React from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

import CardList from "../components/CardList";
import PageModule from "../components/PageModule";

const Discover: NextPage<{}> = () => {
  return (
    <PageModule title="Favoritos">
      <CardList />
    </PageModule>
  );
};

export default Discover;
