import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const PageModule: React.FC<Props> = (props) => {
  return (
    <main className="flex flex-col justify-center min-h-screen">
      <div className="fixed top-0 bg-gradient-to-b from-conifer-500 to-apple-400 min-w-full h-60 sm:h-28 sm:rounded-none z-0 rounded-b-[40px]"></div>
      <div className="z-20 fixed top-0">
        <h1 className="font-nunito mt-6 ml-6 text-4xl font-extrabold text-white sm:text-6xl ">
          {props.title}
        </h1>
      </div>
      <div className="z-10 mt-16 mb-24 self-center justify-center">
        {props.children}
      </div>
    </main>
  );
};

export default PageModule;
