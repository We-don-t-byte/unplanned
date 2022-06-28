import React, { ReactNode } from "react";

import { Button } from "@material-tailwind/react";

type Props = {
  name: string;
  email: string;
  image: string;
  children?: ReactNode;
};

const ProfileCard: React.FC<Props> = (props) => {
  return (
    <div className="overflow-hidden font-nunito shadow-lg rounded-xl h-100 w-full cursor-pointer m-auto">
      <div className="w-full block h-full">
        <img
          alt="Fotografía del usuario"
          src={props.image}
          className="h-80 w-full object-cover"
        />
        <div className="bg-white w-full p-4 text-center items-center">
          <p className="text-gray-800 text-xl font-extrabold mb-2">
            {props.name}
          </p>
          <p className="text-gray-500 font-regular text-md">{props.email}</p>
          <div className="bg-white w-full p-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
