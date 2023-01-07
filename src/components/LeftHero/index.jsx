import React from 'react'

function LeftHeroSection() {
  return (
    <div className="flex justify-start items-center p-2 md:flex md:justify-center md:items-center">
      <div className="space-y-[50px]">
        <div className="space-y-[15px]">
          <h2 className="font-semibold text-2xl md:font-bold md:text-5xl">
            We Provide High{" "}
          </h2>
          <h2 className="font-semibold text-2xl md:font-bold md:text-5xl">
            Quality <span className="text-[#FFD700]">Dental</span> Services
          </h2>
          <p
            className="font-light text-gray-500">
            Appropriately embrace transparent materials via
            <br /> turnkey niche markets.
          </p>
        </div>
        <div className="flex items-center space-x-5 md:flex md:items-center md:space-x-[50px]">
          <button className="py-2 px-5 bg-[#516EFF] text-white rounded-md">
            Get Started
          </button>
          <button className="py-2 px-5 border  border-gray-500 text-gray-400 rounded-md font-light">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftHeroSection