import React from "react";

import ali from "../../assets/images/avatar-ali.png";
import { testmData } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className=" px-5 mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">What they've said</h2>
        {/* Testimonials Container */}
        <div className="container mx-auto flex flex-col space-y-12 mt-24 md:space-y-0 md:space-x-4 md:flex-row">
          {testmData.map((singleTestm) => {
            return (
              <div
                key={singleTestm.id}
                className="flex flex-col p-5 items-center bg-veryLightGray md:w-1/3"
              >
                <img src={ali} alt="Person" className="w-16 -mt-14" />
                <h5 className="mt-4 mb-1 text-lg font-bold">
                  {singleTestm.name}
                </h5>
                <p className="text-sm text-darkGrayishBlue">
                  {singleTestm.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
