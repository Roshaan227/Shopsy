import React from 'react';
import image1 from '../../assets/product/p-1.jpg';
import image2 from '../../assets/product/p-2.jpg';
import image3 from '../../assets/product/p-3.jpg';
import image4 from '../../assets/product/p-4.jpg'; 
import productImage from '../../assets/category/smartwatch2-removebg-preview.png';

const products = [
  {
    name: 'Boat Headphone',
    price: '$120',
    image: image1,
  },
  {
    name: 'Rocky Mountain',
    price: '$420',
    image: image2,
  },
  {
    name: 'Goggles',
    price: '$320',
    image: image3,
  },
  {
    name: 'Printed',
    price: '$220',
    image: image4,
  },
  {
    name: 'Boat Headphone',
    price: '$120',
    image: image1,
  },
  {
    name: 'Rocky Mountain',
    price: '$420',
    image: image2,
  },
  {
    name: 'Goggles',
    price: '$320',
    image: image3,
  },
  {
    name: 'Printed',
    price: '$220',
    image: image4,
  },
];

const Products = () => {
  return (
   <>
       <div className=" dark:bg-[#111827] py-10">
      <h2 className="text-3xl font-semibold text-center mb-4">Best Seller Products</h2>
      <p className="text-center text-gray-500 px-4 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="px-5 ">
        <div className="grid  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:w-auto  justify-center mx-auto  lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="text-start bg-zinc-300 dark:bg-[#1B2432] dark:text-white shadow-lg rounded-lg p-4 flex flex-col items-center">
             <div className="div relative group">
             <img
                src={product.image}
                alt={product.name}
                className="sm:h-40 w-56 h-60 sm:w-40 object-cover mb-4 rounded-md"
              />
              <div className='absolute hidden group-hover:flex justify-center  bg-primary bottom-32 sm:bottom-16 w-full text-center rounded-full py-[8px] items-center'>
              <a className='text-white font-medium' href="">Add to Cart</a>
              </div>
              
             </div>
             <div className="div pt-2">
             <h3 className="text-lg font-medium">{product.name}</h3>
             <p className="">{product.price}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mx-5 pb-12  mt-5 ">
      <div className="relative bg-brandGreen dark:bg-[#1B2432] rounded-lg flex flex-col lg:flex-row items-center px-6 py-8 lg:py-16 overflow-hidden">
        
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
          <img src={productImage} alt="Headphones" className="py-8 lg:pb-12 mb-5 w-48 lg:w-72 text-green  object-contain" />
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

   </>

   
  );
}

export default Products;
