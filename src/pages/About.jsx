import { useState } from "react";
import Navbar from "../layout/Navbar";


export default function About({showFlavours}) {
  const [size, setSize] = useState("500ml");

  return (
      <div className="bg-berry bg-cover bg-center bg-no-repeat h-64 w-full min-h-screen">
        <div className="text-white">
          {/* NAVBAR */}
          <Navbar showFlavours={showFlavours}/>
          {/* HERO SECTION */}
          <div className="bg-juice-text flex justify-between items-center ">
            {/* LEFT CONTENT */}
            <div className="left-[55%] relative">
              {/* Big background text */}
              <div>
                {/* <h1 className="bangers-regular text-[546px] text font-extrabold select-none ">
              JUICY
            </h1> */}

                {/* Main can */}
                <img
                  src="images/blackberry.png"
                  alt="Can"
                  className="relative z-20 w-60 drop-shadow-2xl right-44"
                />

                {/* Floating berries */}
                <div className="relative w-full h-full">
                  <img
                    src="images/blackberry_1.png"
                    className=" absolute bottom-10 right-80 size-[350px]"
                    alt="blackberry"
                  />
                  <img
                    src="images/blackberry_1.png"
                    className=" absolute bottom-80 right-96 w-52"
                    alt="blackberry"
                  />
                  <img
                    src="images/blackberry_1.png"
                    className=" absolute bottom-72 right-10 size-[350px]"
                    alt="blackberry"
                  />
                  <img
                    src="images/blackberry_1.png"
                    className=" absolute bottom-20 right-20 w-52"
                    alt="blackberry"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIZE SELECTOR */}
            <div className="flex flex-col gap-4 justify-center items-start lg:items-end mt-10 lg:mt-0">
              {["500ml", "100ml", "125ml"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`
                px-4 py-7 mr-2 rounded-full border 
                ${size === item
                      ? "bg-white text-purple-700 border-white"
                      : "border-white text-white"
                    }
                hover:bg-white hover:text-purple-700 transition
              `}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          {/* Slider arrows */}
          <div className="flex justify-center mt-10">
           
            <div className="relative left-10">
              <button className="border border-white p-3 rounded-full w-[50px] hover:bg-white hover:text-purple-700">
                ❮
              </button>
              <button className="border border-white m-1 p-3 rounded-full w-[50px] hover:bg-white hover:text-purple-700">
                ❯
              </button>
            </div>
          </div>
          
          <div className="flex justify-left">
            {/* Slider arrows */}
            <div className=" space-y-5 bottom-40 ml-20 max-w-lg nmt-100px ">
              <h2 className="text-5xl font-extrabold">Blackberry Blast</h2>
              <p className="text-lg text-gray-200 max-w-md">
                Discover a world of vibrant flavors with our premium
                juice selection. At Fresh & Juicy, we believe in the
                power of nature’s finest ingredients to bring you delicious refreshment.
              </p>

              <button className="animated-btn">
                <span className="animated-btn__inner">View</span>
              </button>

            </div>
          
          </div>
           
        </div>
      </div>
  );
}
