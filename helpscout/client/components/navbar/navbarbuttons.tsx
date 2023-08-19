import React, { FC } from "react";


interface NavbarButtonProps {
  text: string;
}

export const NavbarButton: FC<NavbarButtonProps> = ({ text }) => {
  return (
    <div className="pl-2 pt-14">
    <button className="">
      <span className="font-semibold text-stone-600 text-lg">{text}</span>
    </button>
    </div>
  );
};

export default NavbarButton;