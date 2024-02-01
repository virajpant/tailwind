import { React, useState } from "react";
import Card from "./assets/Card.jsx";
import Component from "./assets/card2.jsx";

function App() {
  return (
    <>
      {/* ..............nav bar section.......... */}
      <div className="navbar flex justify-between items-center p-4">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>
          <div className="search mx-4 md:hidden md:order-2">Search</div>
        </div>
        <div className="flex ">
          <div className="logo md:order-1">
            <img src="images/micro.png" className="w-28" alt="" />
            <div className="feature flex *:hidden md:inline-flex ">
              <div className="fitem mx-3 ml-8">microsoft 365</div>
              <div className="fitem mx-3">office</div>
              <div className="fitem mx-3">surface</div>
              <div className="fitem mx-3">window</div>
              <div className="fitem mx-3">xbow</div>
              <div className="fitem mx-3">support</div>
            </div>
          </div>
        </div>
        <div className="account md:order-3 flex">
          <div className="mx-4">
            <div className="search hidden md:block">Search</div>
          </div>
          Acount Cart
        </div>
      </div>

      <div className="slider md:flex ">
        <div className="right">
          <img src="images/laptop.jpeg" alt="" />
        </div>

        <div className="left py-3 bg-[#f2f2f2] flex md:justify-center md:items-center">
          <div>
            <h1 className="text-4xl mx-5">SurFace Laptop</h1>
            <p className="mx-5">
              Tablet versatility and laptop power — all in one ultra-portable
              device
            </p>
            <button className="bg-blue-700 rounded-lg p-2 mx-5 text-white mt-6">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* ..........logo section.......... */}

      <div className="container md:ml-8">
        <div className="md:flex md:justify-between">
          <div className="promo flex flex-col justify-center items-center">
            <div>
              <div className="flex justify-center p-4">
                <img src="images/micrologo.svg" className="w-10" alt="" />
              </div>
              <p className="text-blue-600 font-medium	">
                <u>Choose Your Microsoft 365</u>
              </p>
            </div>
          </div>
          <div className="promo flex flex-col justify-center items-center my-10">
            <div>
              <div className="flex justify-center p-4">
                <img className="w-10 " src="images/logo2.svg" alt="" />
              </div>
              <p className="text-blue-600 font-medium	">
                <u>shop xbox games and consoles</u>
              </p>
            </div>
          </div>
          <div className="promo flex flex-col justify-center items-center">
            <div>
              <div className="flex justify-center p-4">
                <img className="w-10" src="images/micrologo.svg" alt="" />
              </div>
              <p className="text-blue-600 font-medium	">
                <u>Get windows 11</u>
              </p>
            </div>
          </div>
          <div className="promo flex flex-col justify-center items-center">
            <div>
              <div className="flex justify-center p-4">
                <img className="w-10" src="images/logo3.svg" alt="" />
              </div>
              <p className="text-blue-600 font-medium	">
                <u>Explore surface devices</u>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* .........photo section.......... */}
      <div className="card md:flex">{<Card />}</div>

      <div className="slider reverse md:flex bg-[#e6e6e6]">
        <div className="left py-3 order-first flex md:justify-center md:items-center">
          <div>
            <h1 className="text-4xl mx-5">Xbox Series S</h1>
            <p className="mx-5">
              Next-gen performance in the smallest Xbox ever
            </p>
            <button className="bg-blue-700 text-base p-4 mx-5 text-white mt-6">
              Shop Xbox Series S
            </button>
          </div>
        </div>
        <div className="right">
          <img src="images/gamephoto.jpeg" alt="" />
        </div>
      </div>

      <div className="card md:flex">{<Component />}</div>

      <div className="line flex justify-start items-center ml-20 ">
        <div>follow Microsoft</div>
        <div> <img src="images/Face.avif" className="w-10" alt="" /></div>
        <div><img src="images/x.webp" className="w-10" alt="" /></div>
        <div><img src="images/YouTube.webp" className="w-10" alt="" /></div>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-[#d9d9d9] mr-8">Back to top</button>
      </div>
      <div className="bg-[#f2f2f2]">
      <div className="footer flex mx-20 bg-[#f2f2f2] justify-between">
        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>
        
        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>
        
        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>

        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>

        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>

        <div><p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        <p>ovknvlk</p>
        </div>
      </div>
      </div>
    </>
  );
}
{
  /* <div className="w-screen h-screen overflow-x-hidden bg-red-500  ">xbbdbdsbsdbsegbdb</div> */
}
// bg-[#f2f2f2]

{
  /* <div className="slider reverse md:flex bg-[#e6e6e6]">
<div className="left py-3 order-first flex md:justify-center md:items-center">
  <div>
    <h1 className="text-4xl mx-5">Xbox Series S</h1>
    <p className="mx-5">Next-gen performance in the smallest Xbox ever
    </p>
    <button className="bg-blue-700 text-base p-4 mx-5 text-white mt-6">
      Shop Xbox Series S
    </button>
  </div>
</div>
<div className="right ">
  <img src="images/gamephoto.jpeg" alt="" />
</div>
</div> */
}

export default App;
