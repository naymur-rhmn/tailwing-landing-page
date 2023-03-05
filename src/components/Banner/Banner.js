import React from "react";
import bannerImg from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section id="banner">
      {/* flex container */}
      <div className="container mx-auto p-6 flex   flex-col-reverse space-x-10 mt-10 md:space-y-0 md:flex-row items-center">
        {/* left item */}
        <div className="flex flex-col space-y-5 md:w-1/2 text-center mt-8 md:mt-0 md:text-start">
          <h1 className="text-4xl font-bold max-w-md md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-darkGrayishBlue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </p>
          <div>
            <a
              href="#"
              className="rounded-full py-3 pt-2 px-6 text-white bg-orange-500 w-1/3 hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* image */}
        <div className="md:w-1/2 flex justify-end">
          <img className="w-100" src={bannerImg} alt="Banner img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
