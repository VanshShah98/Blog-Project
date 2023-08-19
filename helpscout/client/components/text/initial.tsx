import React, { FC } from "react";
import Image from "next/image";
import Companies from "./companies";



const Initial: FC = () => {
    return (
        <>
            <div className="pt-28 pl-28 ">
                <div>
                    <div className="h-48">
                        <div>
                            <h1 className="text-5xl w-2/5">
                                <b>
                                    A better way to talk with your customers
                                </b>
                            </h1>
                        </div>
                        <div className="text-stone-600 w-1/3 text-xl pt-5">
                            <h3>
                                Manage all your customer conversations in one powerful platform that feels just like your inbox.
                            </h3>
                        </div>

                    </div>
                    <div>
                        {/*Image*/}
                    </div>

                </div>
                <div>
                    <div className="pt-6">
                        <button className="items-center justify-center bg-blue-500 font-semibold text-lg text-white flex  rounded w-36 h-14">Try for free</button>
                    </div>
                </div>


            </div>
            <div className="justify-center items-center pt-56 pl-96">
                <div className="text-2xl text-stone-600 ">
                    More than 12,000 business delight with their customers wih Help Scout
                </div>
            </div>
            <div className="pt-5 pl-28">
                <Companies />
            </div>
        </>

    );
};

export default Initial;
