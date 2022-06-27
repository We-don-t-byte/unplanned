import React, { ReactNode } from "react";
import BottomNavbar from "./BottomNavbar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <div className="relative">{props.children}</div>
    <BottomNavbar />
  </div>
);

export default Layout;
