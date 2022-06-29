import React, { ReactNode } from "react";

type Props = {
  name: string;
  address: string;
  image: string;
  tags?: string[];
  className?: string;
};

const PlaceCard: React.FC<Props> = (props) => {
  return (
    <div
      className={`overflow-hidden font-nunito shadow-lg rounded-xl ${props?.className}`}
    >
      <img
        alt="Fotografía del lugar"
        src={props.image}
        className="h-80 min-w-full w-full object-cover"
      />
      {/* Card info */}
      <div className="bg-white w-full p-4">
        {/* Text */}
        <p className="text-gray-800 text-xl font-extrabold mb-2">
          {props.name}
        </p>
        <p className="text-gray-500 font-regular text-md">{props.address}</p>
        {/* Tags */}
        <div className="flex flex-wrap justify-starts items-center mt-4">
          {props.tags?.map((tag) => (
            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-green-100 rounded-2xl">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
