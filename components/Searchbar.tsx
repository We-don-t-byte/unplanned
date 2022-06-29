import React, { useEffect } from "react";

import router from "next/router";

import { Button } from "@material-tailwind/react";


const Searchbar = (props: any) => {
  const [searchKeyword,setSearchKeyword] = React.useState("");
  let lat: number | undefined = undefined;
  let long: number | undefined = undefined;
  const ref = React.useRef<{lat: number, long: number}>();
    useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => { 
    if (ref.current !== undefined) {
      ref.current.lat = position.coords.latitude;
      ref.current.long = position.coords.longitude;
    }
  }, (error) => { console.log(error); }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
  },[]);
  const handleSearch = () => {
    // console.log("keyoword", searchKeyword);
    let query;
    if (ref.current !== undefined) {
      query = { searchKeyword, lat: ref.current.lat , long: ref.current.long , radius: 1000 };
    }
    else {
      query = { searchKeyword, lat, long, radius: 1000 };
    }
    router.push({pathname: "/discover", query});
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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
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
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
