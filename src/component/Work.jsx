import React from "react";
import Fiskill from "./button/Fiskill";
import Technologie from "./button/Technologu";

function Work() {
  return (
    <div className="flex py-8 px-4 flex-col items-center justify-center ">
      <div className="flex py-0 px-2 flex-col justify-center items-center rounded-2xl gap-4">
        <Fiskill />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Some of the noteworthy projects I have built:
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start rounded-2xl shadow-xl max-md:flex-col max-md:items-center">
          <div className="w-full md:w-[50%]">
            <div className="bg-gray-200">
              <div className="flex items-center justify-center p-4 md:p-7">
                <img className="max-w-full" src="he.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-7 w-full md:w-[50%] items-center gap-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold items-start">
              Fiskil
            </h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Technologie />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start rounded-2xl shadow-xl max-md:items-center max-md:flex-col-reverse">
          <div className="flex flex-col p-4 md:p-7 w-full md:w-[50%] items-center gap-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold items-start">
              Fiskil
            </h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Technologie />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-gray-200">
              <div className="flex items-center justify-center p-4 md:p-7">
                <img className="max-w-full" src="he.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start rounded-2xl shadow-xl max-md:flex-col max-md:items-center">
          <div className="w-full md:w-[50%]">
            <div className="bg-gray-200">
              <div className="flex items-center justify-center p-4 md:p-7">
                <img className="max-w-full" src="he.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-7 w-full md:w-[50%] items-center gap-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold items-start">
              Fiskil
            </h1>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Technologie />
            </div>
          </div>
        </div>

        {/* Repeat the above structure for other projects */}
      </div>
    </div>
  );
}

export default Work;
