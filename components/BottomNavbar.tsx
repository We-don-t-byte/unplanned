import React from "react";

import { useRouter } from "next/router";

import { Navbar, Button } from "@material-tailwind/react";

const favorites_icon = (
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
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const home_icon = (
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
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const profile_icon = (
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
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BottomNavbar: React.FC = () => {
  const router = useRouter();

  const routes: [string, string, JSX.Element][] = [
    ["Favorites", "/favorites", favorites_icon],
    ["Home", "/", home_icon],
    ["Profile", `/user`, profile_icon],
  ];

  return (
    <Navbar
      fullWidth={true}
      className="fixed bottom-0 justify-center z-20 bg-opacity-100"
    >
      <div className="container flex items-center justify-center justify-between text-blue-grey-900">
        {routes.map(([label, href, icon], index) => (
          <Button
            key={index}
            onClick={() => router.push(href)}
            color="light-green"
            variant="gradient"
            className="rounded-full"
            size="sm"
          >
            {icon}
          </Button>
        ))}
      </div>
    </Navbar>
  );
};

export default BottomNavbar;