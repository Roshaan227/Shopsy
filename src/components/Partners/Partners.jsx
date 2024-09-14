import React from 'react';
import image1 from '../../assets/brand/br-1.png';
import image2 from '../../assets/brand/br-2.png';
import image3 from '../../assets/brand/br-3.png';
import image4 from '../../assets/brand/br-4.png';
import image5 from '../../assets/brand/br-5.png';

const Partners = () => {
  return (
  <div className="div py-5  px-5">
      <div className="rounded-xl  dark:text-white overflow-hidden dark:bg-[#1B2432] bg-gray-100 py-6">
      <div className=" grid grid-cols-5 gap-3 md:scale-[1] scale-[.8] place-items-center items-center justify-between">
        {/* Logos repeated twice for smooth infinite scrolling */}
        <img src={image1} alt="Brand 1" className="logo w-24" />
        <img src={image2} alt="Brand 2" className="logo w-24 dark:text-white" />
        <img src={image3} alt="Brand 3" className="logo w-24" />
        <img src={image4} alt="Brand 4" className="logo w-24" />
        <img src={image5} alt="Brand 5" className="logo w-24" />

      </div>
    </div>
  </div>
  );
};

export default Partners;
