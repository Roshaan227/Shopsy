import React from 'react';
import image1 from '../../assets/hero/headphone.png'; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="mx-5 pb-6  mt-5 ">
      <div className="relative bg-red-500 dark:bg-[#1B2432] rounded-lg flex flex-col lg:flex-row items-center px-6 py-8 lg:py-16 overflow-hidden">
        
        {/* Left Side */}
        <div className="text-white lg:pl-20 lg:block hidden z-10 ">
          <p className="text-sm font-bold">30% OFF</p>
          <h1 className="text-4xl font-extrabold leading-tight">
            FINE <br /> SMILE
          </h1>
          <p className="text-sm">10 Jan to 28 Jan</p>
        </div>

        {/* Headphone Image */}
        <div className="absolute pt-7 top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-auto w-full left-0 right-0 lg:right-auto lg:top-auto flex justify-center lg:absolute">
          <img src={image1} alt="Headphones" className="w-52 lg:w-72  object-contain" />
        </div>

        {/* Right Side */}
        <div className="z-10  text-start text-white mt-8 lg:mt-0 lg:w-1/3 lg:ml-auto space-y-2">
          <p className="font-bold">Air Solo Bass</p>
          <h2 className="text-2xl md:text-3xl font-extrabold">Winter Sale</h2>
          <p className="text-sm max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            recusandae.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-red-500 font-bold rounded-full">
            Shop
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
