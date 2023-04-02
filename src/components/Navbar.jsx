import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <>
      <div className="w-full bg-orange-400 py-5 px-2 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center text-white cursor-pointer mr-2">
            <h1 className="text-white font-medium text-lg md:text-xl">
              Fast Cart
            </h1>
          </div>
          <div className="flex items-center justify-between rounded-sm px-3 py-1 mr-5 bg-white w-[300px] xl:w-[500px] ">
            <AiOutlineSearch size={25} />
            <input
              type="search"
              placeholder="Search Items"
              className="bg-transparent ml-2 text-black placeholder-black font-normal w-full outline-none"
            />
          </div>
          <div className="md:hidden" onClick={handleNav}>
            {!nav ? (
              <HiMenuAlt3
                className="text-white cursor-pointer md:hidden"
                size="30"
              />
            ) : (
              <AiOutlineClose
                size="30"
                className="text-white cursor-pointer md:hidden"
              />
            )}
          </div>

          <div className="hidden md:flex justify-between items-center">
            <button className="mr-5 xl:mr-[70px] border-2 border-white px-7 xl:px-12 py-1 text-orange-600 bg-white font-bold rounded-sm ">
              Log In
            </button>
            <button className="flex text-white items-center font-medium">
              More <IoMdArrowDropdown size="20" />
            </button>
          </div>
          <div className="hidden md:flex py-1 px-4 rounded-lg  items-center text-lg cursor-pointer">
            <BsFillCartFill
              size={20}
              className="mr-2 text-white cursor-pointer"
            />
            <h1 className="text-white font-semibold">Cart</h1>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed w-[70%] h-full bg-orange-400 top-0 left-0 pl-5 pt-20 duration-300 ease-in-out z-10 "
            : "fixed left-[-100%]  top-0 h-full duration-300 z-10"
        }
      >
        <h1 className="font-bold text-white text-3xl mb-5 flex">
          Fast Cart
          <BsFillCartFill className="ml-3" />
        </h1>

        <ul className="flex  flex-col w-full h-full font-regular text-white text-2xl ">
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Tv Appliances
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Electronics
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Men
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Women
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Baby & Kids
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Home & Furniture
          </li>
          <li className="mb-4 cursor-pointer uppercase border-b border-gray-300 w-[70%] ">
            Sports, Book & More
          </li>
        </ul>
      </div>
      <div className=" bg-gray-100 shadow-lg py-2 px-4">
        <div className="max-w-7xl mx-auto ">
          <ul className="hidden md:flex w-full font-semibold items-center">
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Tv Appliances
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Electronics
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Men
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Women
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Baby & Kids
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600  ">
              Home & Furniture
            </li>
            <li className="mr-auto cursor-pointer hover:text-orange-600 1">
              Sports, Book & More
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
