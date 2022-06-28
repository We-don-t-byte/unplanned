import React from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

import Swiper from "../components/Swiper";
import PageModule from "../components/PageModule";

const Discover: NextPage<{}> = () => {
  return (
    <PageModule title="Descubrir">
      <Swiper />
    </PageModule>
  );
};

export default Discover;
