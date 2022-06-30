import React, { useEffect } from "react";

import router from "next/router";

import { Button } from "@material-tailwind/react";
import ReactSlider from "react-slider";


const calcRadius = (radius: number) => {
  return Math.round(radius/100*4500) + 500;
}
const Searchbar = (props: any) => {
  const [searchKeyword,setSearchKeyword] = React.useState("");
  const [radius,setRadius] = React.useState(500);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(4);
  const [efTrigger, setEfTrigger] = React.useState(false);
  const ref = React.useRef<{lat: number | undefined, long: number | undefined}>({lat: undefined, long: undefined});
    useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => { 
      if (ref.current !== undefined) {
        ref.current.lat = position.coords.latitude;
        ref.current.long = position.coords.longitude;
      }
    }, (error) => { alert("Por favor habilita la localización") }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });

  },[efTrigger]);
  const handleSearch = () => {
    // console.log("keyoword", searchKeyword);
    // console.log(ref.current);
    if (ref.current.lat !== undefined && ref.current.long !== undefined) {
      const query = { searchKeyword, lat: ref.current.lat , long: ref.current.long , radius: (radius), minPrice: minPrice, maxPrice: maxPrice };
      router.push({pathname: "/discover", query});
      return;
    }
    else {
    setEfTrigger(!efTrigger);
    }
    };
  return (
    // Tailwind Search Bar
    <div>
      <form className="flex flex-col items-center">
        <div className="flex items-center">
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
        </div>
          <h2 className="text-2xl font-bold font-nunito text-green-700 dark:text-white sm:text-4xl">
            Distancia
          </h2>
            <ReactSlider 
              className="w-full max-w-500px h-4 margin-auto"
              thumbClassName="cursor-pointer text-center rounded-full position-absolute bg-green-600 p-1 z-100 display-block text-white"
              trackClassName="position-relative bg-green-300 h-4 z-100 rounded-full"
              min={500}
              max={5000}
              renderThumb={(props, state) => (<div {...props}>{state.valueNow}</div>)}
              value={radius}
              onChange={(value) => setRadius(value)}
            />
          <h2 className="text-2xl font-bold font-nunito text-green-700 dark:text-white sm:text-4xl">
            Precio
          </h2>
            <ReactSlider 
              className="w-full max-w-500px h-4 margin-auto"
              thumbClassName="cursor-pointer text-center rounded-full position-absolute bg-green-600 p-1 z-100 display-block text-white"
              trackClassName="position-relative bg-green-300 h-4 z-100 rounded-full"
              markClassName="position-relative circle bg-green-700 z-100 cursor-pointer width-2 height-2 rounded-full"
              renderThumb={(props, state) => (<div {...props}>{(state.valueNow)}</div>)}
              value={[minPrice, maxPrice]}
              min={0}
              max={4}
              marks={true}
              onChange={(value, index) => {[setMinPrice, setMaxPrice][index](value[index])}}
            />
      </form>
    </div>
  );
};

export default Searchbar;
