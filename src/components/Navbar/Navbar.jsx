import React from 'react';
import { FaCartShopping, FaSquareCaretDown } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';

const MenuLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#shop' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Blogs', link: '/#blogs' },
];

const dropDownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#shop' },
  { id: 3, name: 'Top Rated', link: '/#about' },
];

const Navbar = () => {
  return (
    <div className='sm:py-0 px-3 bg-white relative dark:bg-gray-900 dark:text-white duration-200 elative z-40'>
      <div className='py-4'>
        <div className="px-5 flex justify-between items-center">
          {/* left */}
          <div className="flex items-center gap-7">
            <a className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' href='#'>
              Eshop
            </a>

            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* Dropdown */}
                <li className='relative group'>
                  <a href='#' className='flex items-center text-gray-500 py-2 dark:hover:text-white gap-2'>
                     Links
                    <FaSquareCaretDown className='group-hover:rotate-180 duration-300' />
                  </a>
                  {/* Dropdown Menu */}
                  <div className='absolute top-full left-0 mt-1 hidden group-hover:block w-48 rounded-md shadow-md bg-white dark:bg-gray-800 text-black dark:text-white'>
                    <ul className='space-y-2'>
                      {dropDownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className='block px-4 py-2 text-gray-500 hover:bg-primary/20 rounded-md hover:text-red-500 dark:text-gray-300 dark:hover:text-white duration-200'
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className='flex items-center gap-4'>
            {/* Searchbar */}
            <div className='relative group hidden sm:block'>
              <input type='text' placeholder='Search' className='search-bar' />
              <IoMdSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary duration-200' />
            </div>

            {/* Order Button */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='rounded-full absolute top-0 right-0 flex items-center justify-center text-xs w-4 h-4 bg-red-500 text-white'>4</div>
            </button>

            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
