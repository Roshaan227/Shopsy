import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/hero/headphone.png';
import Image2 from '../../assets/hero/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Image4 from '../../assets/category/earphone.png';
import Image5 from '../../assets/category/speaker.png';
import Image6 from '../../assets/category/vr.png';
import Button from '../Shared/Button';

const heroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Bolo",
        title: "Wireless",
        title2: "Headphone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Bolo",
        title: "Best",
        title2: "Watch",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Bolo",
        title: "Windows",
        title2: "Laptop",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    },
    {
        id: 4,
        img: Image4,
        subtitle: "Beats Bolo",
        title: "Wireless",
        title2: "Products",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    },
    {
        id: 5,
        img: Image5,
        subtitle: "Beats",
        title: "Wireless",
        title2: "Speaker",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    },
    {
        id: 6,
        img: Image6,
        subtitle: "Beats Bolo",
        title: "Wireless",
        title2: "Products",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ad rerum quia consequatur non laudantium culpa sed sunt! Hic vitae aliquid placeat eum quia officiis, qui fugit autem totam corrupti!"
    }
];

const Hero = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        pauseOnFocus: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="relative overflow-hidden dark:bg-[#111827]">
            <div className="px-5 ">
                <div className="relative  bg-[#F3F4F6] dark:bg-[#1A2331] rounded-3xl overflow-hidden shadow-xl">
                    <Slider {...settings}>
                        {heroData.map((data) => (
                            <div key={data.id} className="flex items-center justify-center w-full py-10 px-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                                    <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
                                        <h1 className="opacity-90 text-4xl sm:text-5xl font-extrabold text-gray-700">
                                            {data.subtitle}
                                        </h1>
                                        <h2 className="text-6xl sm:text-7xl text-red-600 font-bold tracking-tight leading-tight">
                                            {data.title}
                                        </h2>
                                        <h2 className="text-5xl sm:text-8xl text-white font-bold tracking-tight">
                                            {data.title2}
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-600 sm:text-left sm:w-3/4">
                                            {data.description}
                                        </p>
                                        <div className="mt-6 flex justify-center sm:justify-start">
                                            <Button text={"Shop Now"} bgColor={"bg-indigo-600 hover:bg-indigo-700"} />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={data.img}
                                            alt={data.title}
                                            className="w-[280px] sm:w-[350px] object-contain drop-shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
