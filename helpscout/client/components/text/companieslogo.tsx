import React, { FC } from "react";
import Image from "next/image";

interface LOGOProps {
  imageSrc: string;
}

export const LOGO: FC<LOGOProps> = ({ imageSrc }) => {
  return (
      <Image
        className="w-6/12 h-max"
        src={imageSrc}
        width={96}
        height={96}
        alt="Button Icon"
      />

  );
};

export default LOGO;