import React from "react";

const Feature = () => {
  return (
    <section id="feature">
      <div className="container mx-auto mt-12 p-6 flex flex-col space-y-12 md:flex-row md:space-y-0">
        {/* What's Diffrent */}
        <div className="flex flex-col text-center space-y-6 md:text-left md:w-1/2">
          <h1 className="max-w-md text-3xl font-bold md:text-4xl">
            What's different about Manage?
          </h1>
          <p className="sm:max-w-md md:max-w-sm  text-darkGrayishBlue">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor made for modern digital product
            teams.
          </p>
        </div>

        {/* Numbered Lists */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          {/* List item 1 */}
          <div className="flex flex-col  space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Heading */}
            <div className="bg-orange-100 rounded-l-full  md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="font-bold text-base md:hidden">
                  Track company-wide progres
                </h3>
              </div>
            </div>
            {/* Md screen heading and content */}
            <div className="flex flex-col space-y-0 md:space-y-2">
              <h3 className="hidden font-bold text-base pt-1 md:block">
                Track company-wide progres
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                similique dolore eius ipsa laborum fugiat, iure id praesentium
                perferendis corrupti! Rem culpa expedita error, iste
                consequuntur
              </p>
            </div>
          </div>

          {/* List item 2 */}
          <div className="flex flex-col  space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Heading */}
            <div className="bg-orange-100 rounded-l-full  md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="font-bold text-base md:hidden">
                  Advanced build-in reports
                </h3>
              </div>
            </div>
            {/* Md screen heading and content */}
            <div className="flex flex-col space-y-0 md:space-y-2">
              <h3 className="hidden font-bold text-base pt-1 md:block">
                Track company-wide progres
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                similique dolore eius ipsa laborum fugiat, iure id praesentium
                perferendis corrupti! Rem culpa expedita error, iste
                consequuntur
              </p>
            </div>
          </div>

          {/* List item 3 */}
          <div className="flex flex-col  space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Heading */}
            <div className="bg-orange-100 rounded-l-full  md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="font-bold text-base md:hidden">
                  Track company-wide progres
                </h3>
              </div>
            </div>
            {/* Md screen heading and content */}
            <div className="flex flex-col space-y-0 md:space-y-2">
              <h3 className="hidden font-bold text-base pt-1 md:block">
                Everything you need in one place
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                similique dolore eius ipsa laborum fugiat, iure id praesentium
                perferendis corrupti! Rem culpa expedita error, iste
                consequuntur optio hic quae a est deleniti explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
