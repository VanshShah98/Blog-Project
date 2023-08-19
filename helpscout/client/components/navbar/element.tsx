import React, { FC } from "react";
import NavbarButton from "./navbarbuttons";
import Image from "next/image";
import { COMPANIES } from "@/utils/constants";



const Elements: FC = () => {
  return (
    <>
    <div className="flex flex-row pl-16">
        {<Image className="w-36"
              src={COMPANIES.HELPSCOUT}
              width={0}
              height={0}
              alt={""}/>}
      <div className="flex flex-row pl-9">
        <div className="pl-8">
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
        <div className="flex justify-end ml-80 pl-80">
                <button className="text-stone-600 pr-2 text-sm">Login</button>
        </div>

        <div className="flex justify-end ml-auto pt-12">
                <button className="bg-blue-500 font-semibold text-base text-white flex items-center justify-center h-14 rounded w-24">Free Trial</button>
        </div>
        </div>
    
    </div>  


    </>

  );
};

export default Elements;
