import React from "react";
import featured from "../data/featured";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-[40px] w-full max-w-7xl mx-auto oveflow pb-[100px] cursor-pointer">
      <Slider {...settings}>
        {featured.map((x, i) => (
          <div
            key={i}
            className="card bg-white rounded-lg shadow-xl w-[400px] h-[480px]  sm:h-[500px] xl:h-[480px] my-10"
          >
            <div className="top">
              <img
                src={x.url}
                alt={x.name}
                className="h-[300px] w-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bottom px-4 py-4">
              <h1 className="font-bold text-2xl sm:text-xl">{x.name}</h1>
              <p className="font-medium text-lg text-orange-500">
                PHP {x.price}
              </p>

              <p className="text-lg text-stone-600">{x.brand}</p>
              <div className=" justify-between mt-3 sm:flex-col flex md:flex-col xl:flex-row mb-10">
                <button className="border-2 py-2 xl:py-2 px-5 rounded-sm sm:py-[3px] mb-2 border-orange-500 font-bold  text-orange-500 hover:bg-orange-500  hover:text-white duration-300">
                  Buy Now
                </button>
                <button className="border-2 py-2 xl:py-2 px-5 rounded-sm sm:py-[3px] mb-2 border-orange-500 font-bold  text-orange-500 hover:bg-orange-500  hover:text-white duration-300">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
