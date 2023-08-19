import React, { FC } from "react";
import Image from "next/image";
import LOGO from "./companieslogo";
import { COMPANIES } from "@/utils/constants";



const Companies: FC = () => {
    return (
        <>
            <div className="flex flex-row">
                <div>
                    <LOGO imageSrc={COMPANIES.COMPASS} />
                </div>
                <div>
                    <LOGO imageSrc={COMPANIES.HONEY} />
                </div>
                <div>
                    <LOGO imageSrc={COMPANIES.MIXMAX} />              
                </div>
                <div>
                    <LOGO imageSrc={COMPANIES.SPIKEBALL} />
                </div>
                <div>
                    <LOGO imageSrc={COMPANIES.SPIKEDRIFT} />
                </div>
            </div>

        </>

    );
};

export default Companies;
