import React from "react";
import featured from "../data/featured";
import Card from "./Card";

function Hero() {
  return (
    <div className="w-full mx-auto ">
      <div className="mb-5 text-center ">
        <h1 className="font-bold text-2xl uppercase mt-7 md:text-4xl ">
          Fast Cart <span className="text-orange-400">Deals</span> Of The Day
        </h1>
        <div className="flex justify-center flex-col md:flex-row">
          <p className="font-medium text-lg md:text-2xl mr-5 md:mt-4 text-gray-800">
            Deals Refresh Every 8 Hours
          </p>
          <p className="text-lg md:text-xl md:mt-5 mt-4 ">
            <span className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg">
              7
            </span>{" "}
            :{" "}
            <span className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg">
              59
            </span>{" "}
            :{" "}
            <span className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg">
              59
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Card />
      </div>
    </div>
  );
}

export default Hero;
