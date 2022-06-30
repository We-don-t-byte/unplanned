import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import PageModule from "../components/PageModule";
import { prisma } from "../lib/prisma";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import type {place } from '../components/CardList'
import {Tabs, TabsHeader, TabPanel, Tab, TabsBody} from '@material-tailwind/react';

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

  // console.log("ctx",ctx);
  // console.log("params", query)
  const user = await prisma.user.findUnique({
    where: {
        id: session.user.id,
    },
    select: {
        likeCount: true,
        dislikeCount: true,
        saved: true,
    }
  });
  if (user === null) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };
  }
  const saved = user.saved as place[];
  const types = new Map<string, number>();
  saved.map(({types})=> types).flat().forEach(type => {
    if (types.has(type)) {
      types.set(type, (types.get(type) as number) + 1);
    } else {
      types.set(type, 1);
    }
  })
  
  return {
    props: {
      likeCount: user.likeCount,
      dislikeCount: user.dislikeCount,
      types: [...types.entries()],
    },
  };
};

type Props = {
  likeCount: number;
  dislikeCount: number;
  types: [string, number][];
};

const heart_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
)
const tag_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>
)

const Discover: NextPage<Props> = ({ likeCount, dislikeCount, types }) => {
  console.log(types);
  ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale, LinearScale, BarElement, Title);
  const data =  [
    {
      icon: heart_icon,
      label: "Likes",
      value: "likes",
      chart: (
      <Doughnut data={{
        labels: ["Like", "Dislike"],
        datasets: [{
          label: "Likes vs Dislikes",
          // light green color: #00ff00
          backgroundColor: ["#77C66E", "#FF8484"],
          data: [likeCount, dislikeCount],

        }]
      }}/>
      )
    },
    {
      icon: tag_icon,
      label: "Categories",
      value: "categories",
      chart: (
      <Bar data={{
        labels: types.map(([type]) => type),
        datasets: [{
          label: "Categorias favoritas",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: types.map(([_, count]) => count),
        }]
      }}/>
      )
    }
  ];
  return (
    <PageModule title="Descubrir">
    <Tabs value="likes">
      <TabsHeader>
        {data.map(({icon, label, value}) => (
          <Tab key={value} value={value}>
            <div className="flex items-center">
            {icon} {label}
            </div>
          </Tab>)
          )}
      </TabsHeader>
      <TabsBody>
        {data.map(({value,chart}) => (
          <TabPanel key={value} value={value}>
            {chart}
          </TabPanel>)
          )}
      </TabsBody>
    </Tabs>
    </PageModule>
  );
};

export default Discover;
