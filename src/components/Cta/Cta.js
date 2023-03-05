import React from "react";

const Cta = () => {
  return (
    <section id="faq" className="bg-brightRed">
      {/* Flex Container */}
      <div className="container mx-auto px-6 py-8 mt-12 flex flex-col items-center text-center space-y-5 md:text-left md:py-14 md:space-y-0 md:flex-row md:justify-between lg:justify-around">
        {/* Faq Heading */}
        <h3 className="max-w-md text-3xl  text-white font-semibold md:text-4xl">
          Simplify how your team works today
        </h3>
        <div>
          <a
            href="#"
            className="rounded-full py-3 pt-2 px-6 text-orange-500 bg-white w-1/3 hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
