import React, { useState, useEffect } from "react";
import slides from "../data/slides";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        nextSlide();
      }, 3000);
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="w-full h-auto mx-auto mt-[-20px] md:mt-0 group"
      onMouseEnter={() => {
        setAutoplay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoplay(true);
      }}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="relative h-[500px] bg-no-repeat bg-center bg-cover duration-300"
      >
        <div className="w-full h-[500px] bg-black/50 absolute flex items-center ">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-7xl max-w-[500px] md:max-w-7xl mx-auto w-full pl-[70px] xl:pl-0 xl:text-center xl:max-w-[700px]">
            Shop now with your favourite brand
          </h1>
        </div>
        <div className="absolute text-white top-[50%] translate-y-[-50%] left-0 cursor-pointer rounded-full hover:bg-black/10 py-2 px-1 mx-2 group-hover:flex hidden xl:mx-10">
          <BsChevronLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute text-white top-[50%] translate-y-[-50%] right-0 cursor-pointer rounded-full hover:bg-black/10 py-2 px-1 mx-2 group-hover:flex hidden xl:mx-10">
          <BsChevronRight size={30} onClick={nextSlide} />
        </div>
        <div className="text-white absolute bottom-4 right-[50%] flex translate-x-[50%]">
          {slides.map((item, slideIndex) => (
            <div key={slideIndex}>
              {currentIndex === slideIndex ? (
                <RxDotFilled
                  onClick={() => goToSlide(slideIndex)}
                  size={25}
                  className="cursor-pointer text-orange-400"
                />
              ) : (
                <RxDot
                  className="cursor-pointer"
                  size={25}
                  onClick={() => goToSlide(slideIndex)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
