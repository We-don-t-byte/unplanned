import React from "react";

import router from "next/router";

import { Button } from "@material-tailwind/react";
import { url } from "inspector";

const Searchbar = (props: any) => {
  const handleSearch = () => {
    router.push("/discover", undefined, {});
  };
  return (
    // Tailwind Search Bar
    <div>
      <form className="flex items-center">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-500 text-gray-900 text-xl rounded-full block w-full pl-5 p-2.5 focus:drop-shadow-xl focus:outline-none"
            placeholder="Comida italiana..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          ></input>
        </div>
        <Button
          color="light-green"
          variant="gradient"
          className="rounded-full"
          size="md"
          onClick={() => handleSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
