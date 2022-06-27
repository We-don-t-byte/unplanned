import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { Typography } from "@material-tailwind/react";
import Searchbar from "../components/Searchbar";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <p className="text-4xl font-extrabold text-green-400 dark:text-white sm:text-6xl">
            <span className="block">Hoy tengo ganas de</span>
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-full shadow">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
