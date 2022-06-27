import React from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

import { Paper, Card, CardHeader } from "@mui/material";

import PlaceCard from "../components/PlaceCard";

// Discover nextjs page
const Discover: NextPage<{}> = () => {
  const { data: session, status } = useSession();

  return (
    <main>
      // Card centered over the page
      <Paper>
        <Card>
          <CardHeader title="Discover" />
          <PlaceCard />
        </Card>
      </Paper>
    </main>
  );
};

export default Discover;
