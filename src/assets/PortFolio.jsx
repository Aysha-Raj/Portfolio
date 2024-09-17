import React from 'react';
import java from "../../public/java.png";
import express from "../../public/express.png";
import MangoDB from "../../public/MangoDB.png";
import python from "../../public/python.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: MangoDB,
      name: "MongoDB", // Fixed typo from MangoDB to MongoDB
    },
    {
      id: 4,
      logo: python,
      name: "Python",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: reactjs,
      name: "ReactJS",
    },
  ];

  return (
    <div 
       name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        {/* Adjusted grid for responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-1 rounded-full border-2 mb-4"
                alt={name}
              />
              <div className="text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex space-x-3 justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 text-sm md:text-base">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 text-sm md:text-base">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
