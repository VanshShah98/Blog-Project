import React, { FC } from "react";


interface NavbarButtonProps {
  text: string;
}

export const NavbarButton: FC<NavbarButtonProps> = ({ text }) => {
  return (
    <div className="pl-2 pt-5">
    <button className="">
      <span className="font-semibold text-stone-600">{text}</span>
    </button>
    </div>
  );
};

export default NavbarButton;