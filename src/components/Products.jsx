import React, { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <div>loading</div>;
  };

  const filterProduct = (item) => {
    const updatedList = data.filter((x) => x.category === item);
    setFilter(updatedList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="text-center my-5 mx-3">
          <button
            onClick={() => setFilter(data)}
            className="border-2 px-4 py-[2px] font-medium hover:bg-orange-500 hover:text-white md:text-xl text-orange-600 rounded-md mb-2 mr-2 border-orange-500"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="border-2 px-4 py-[2px] font-medium hover:bg-orange-500 hover:text-white md:text-xl text-orange-600 rounded-md mb-2 mr-2 border-orange-500"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="border-2 px-4 py-[2px] font-medium hover:bg-orange-500 hover:text-white md:text-xl text-orange-600 rounded-md mb-2 mr-2 border-orange-500"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="border-2 px-4 py-[2px] font-medium hover:bg-orange-500 hover:text-white md:text-xl text-orange-600 rounded-md mb-2 mr-2 border-orange-500"
          >
            Jewelry
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="border-2 px-4 py-[2px] font-medium hover:bg-orange-500 hover:text-white md:text-xl text-orange-600 rounded-md mb-2 mr-2 border-orange-500"
          >
            Electronics
          </button>
        </div>
        <div className="mx-auto">
          <div className="grid xl:grid-cols-4 gap-5 md:grid-cols-3 md:gap-5 md:mx-10">
            {filter.map((x, i) => (
              <div
                key={i}
                className="flex flex-col border-2 w-[400px] md:w-auto mx-auto h-auto gap-4 items-center shadow-xl rounded-lg cursor-pointer "
              >
                <div className="p-2">
                  <img
                    src={x.image}
                    className="h-[350px] w-[400px] object-contain"
                  />
                </div>
                <div className="text-start my-4 pt-3 border-t-2 border-black w-full px-4">
                  <h1 className="font-bold text-xl">
                    {x.title.substring(0, 20)}
                  </h1>
                  <h1 className="font-bold text-lg text-orange-500">
                    ${x.price}
                  </h1>
                  <div className="justify-between mt-4 sm:flex-col flex md:flex-col xl:flex-row">
                    <button className="border-2 py-2 px-5 rounded-sm border-orange-500 font-bold  text-orange-500 hover:bg-orange-500  hover:text-white duration-300 xl:text-[15px] ">
                      Buy Now
                    </button>
                    <button className="border-2 py-2 px-5 rounded-sm border-orange-500 font-bold  text-orange-500 hover:bg-orange-500  hover:text-white duration-300 xl:text-[15px] ">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-6xl  ">
          Latest <span className="text-orange-600">Products</span>
        </h1>
      </div>
      {loading ? <Loading /> : <ShowProduct />}
    </div>
  );
}

export default Products;
