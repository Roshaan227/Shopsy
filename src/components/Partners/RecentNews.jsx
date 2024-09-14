import React from 'react';
import image1 from '../../assets/blogs/blog-1.jpg'
import image2 from '../../assets/blogs/blog-2.jpg'
import image3 from '../../assets/blogs/blog-3.jpg'
function RecentNews() {
  return (
    <div className=" px-4 pb-2">
      <h2 className="text-3xl font-bold text-center mb-8">Recent News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="dark:bg-[#1B2432] dark:text-white bg-gray-100 rounded-lg shadow-md p-4">
          <img
            src={image2}
            alt="Smartwatch"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">How to choose the perfect smartwatch</h3>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper suscipit magna, eget varius massa molestie.
          </p>
        </div>
        <div className="dark:bg-[#1B2432] bg-gray-100 rounded-lg shadow-md p-4">
          <img
            src={image1}
            alt="Gadget"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">How to choose the perfect gadget</h3>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper suscipit magna, eget varius massa molestie.
          </p>
        </div>
        <div className="dark:bg-[#1B2432] bg-gray-100 rounded-lg shadow-md p-4">
          <img
            src={image3}
            alt="VR Headset"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">How to choose the perfect VR headset</h3>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper suscipit magna, eget varius massa molestie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentNews;