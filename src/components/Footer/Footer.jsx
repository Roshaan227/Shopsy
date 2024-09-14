import { FaHeart, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=" mx-5 mb-5 dark:bg-[#1A2331] rounded-2xl  bg-[#F3F4F6] py-10 px-5 text-gray-700 dark:text-white">
      {/* Main Container */}
      <div className="flex justify-between">
        {/* Grid on medium and larger, Flex for small screens */}
        <div className="flex flex-col md:grid md:grid-cols-3 justify-between gap-8">

          {/* Brand & Description */}
          <div className="pr-10  flex-1 items-start text-left  gap-4 md:text-left">
            <h2 className="text-3xl font-bold text-red-600">ESHOP</h2>
            <p className="text-lg pt-7">
              Your one-stop shop for the best products. We are committed to providing you with quality service.
            </p>
            <p className="text-gray-600 pt-3">
              Made with <FaHeart className="inline text-red-600 animate-pulse" /> by The Coding Journey
            </p>
           <div className="g flex justify-center">
           <a
              href="https://youtube.com"
              className="inline-block self-center mx-auto text-nowrap mt-14 w-auto bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Visit our YouTube Channel
            </a>
           </div>
          </div>

          {/* Quick Links and Important Links - Flex for Small Screens */}
          <div className="md:flex-1 flex items-center justify-around  md:block space-y-4">
            {/* Important Links */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">Important Links</h3>
              <ul className="">
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Secondary Links */}
            <div className="pl-4 text-left">
              <h3 className="text-xl font-semibold text-gray-800">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start">
              <HiOutlineLocationMarker className="mr-2 text-red-600" />
              Noida, Uttar Pradesh
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FiPhone className="mr-2 text-red-600" /> +91 1234567890
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-red-600 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>


            </div>
            <div className="mt-10 text-center md:text-right">
<button className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto md:mx-0 hover:scale-105 transform transition duration-300 hover:bg-red-700">
  SUBSCRIBE <FaYoutube className="ml-2" />
</button>
</div>
          </div>
        </div>

        {/* Subscribe Button */}
       
      </div>
    </footer>
  );
};

export default Footer;


