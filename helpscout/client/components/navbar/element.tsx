import React, { FC } from "react";
import NavbarButton from "./navbarbuttons";
import Image from "next/image";



const Elements: FC = () => {
  return (
    <>
        {/*<Image className="flex flex-row"
              src={""}
              width={20}
              height={20} 
  alt={""}/>*/}
      <div className="flex flex-row pl-9">
        <div className="pl-2">
          <NavbarButton text="Solutions" />
        </div>


        <div className="pl-2">
          <NavbarButton text="Product" />
        </div>



        <div className="pl-2">
          <NavbarButton text="Resources" />
        </div>
        
        <div className="pl-2">
          <NavbarButton text="Planning" />
        </div>

        <div className="flex justify-end ml-96 pl-80 pt-2">
                <button className="text-stone-600 px-4 py-2">Login</button>
        </div>

        <div className="flex justify-end ml-auto pr-72 pt-2">
                <button className="bg-blue-500 font-semibold text-white flex items-center justify-center rounded w-24">Free Trial</button>
        </div>
      </div>


    </>

  );
};

export default Elements;
