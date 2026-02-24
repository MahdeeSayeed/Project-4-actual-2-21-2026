import React from "react";
import { Flash } from "./Flash";
import Card from "./Card";
import SectionH from "./SectionH";
import { CgSmartphoneShake } from "react-icons/cg";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { GiConsoleController } from "react-icons/gi";
import Slider from "react-slick";

const Categories = ({ title, heading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <>
        <div>
        <button  className=' absolute -bottom-190 left-124 w-30px bg-red-400 text-white text-2xl flex justify-center items-center px-11 py-2'><a href='#'></a>View All Products</button>

        </div>

      <h1 className="mt-30 text-primary flex gap-2.5">
        <div className="w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins"></div>
        {title}
      </h1>
      <h2 className="mb-4 text-3xl font-semibold mt-6 font-Inter">{heading}</h2>

      
        <div className="flex gap-30 justify-center">
          <div className="group">
            <div className="border-1 w-20 h-20 flex justify-center items-center hover:bg-red-700  text-4xl bg-white w-170px h-145px border-1px border-black">
              <CgSmartphoneShake />
            </div>
          </div>
          <div>
            <div className=" border-1 w-20 h-20 flex justify-center items-center hover:bg-red-700  text-4xl bg-white w-170px h-145px  ">
              <RiComputerLine />
            </div>
          </div>
          <div>
            <div className=" border-1   w-20 h-20 flex justify-center items-center  hover:bg-red-700     text-4xl bg-white w-170px h-145px  ">
              <BsSmartwatch />
            </div>
          </div>
          <div>
            <div className="  border-1   w-20 h-20 flex justify-center items-center   hover:bg-red-700    text-4xl bg-white w-170px h-145px">
              <CiCamera />
            </div>
          </div>
          <div>
            <div className="    border-1   w-20 h-20 flex justify-center items-center  hover:bg-red-700    text-4xl bg-white w-170px h-145px   ">
              <CiHeadphones />
            </div>
          </div>
          <div>
            <div className="  border-1  w-20 h-20 flex justify-center items-center  hover:bg-red-700     text-4xl bg-white w-170px h-145px">
              <GiConsoleController />
            </div>
          </div>
        </div>
 
    </>
  );
};

export default Categories;
