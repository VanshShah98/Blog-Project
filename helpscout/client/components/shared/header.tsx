import React, { FC } from "react";
import Image from "next/image";
import Elements from "../navbar/element";

const Header: FC = () => {
  return (
    <header className="h-14">
      <div className="">
        <Elements/>
      </div>
    </header>
  );
};

export default Header;
