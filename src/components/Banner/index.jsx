import React from 'react'

function BannerSection() {
  return (
    <div className="mt-[100px] p-[80px] bg-[#516EFF]">
      <div className="flex flex-col items-center space-y-10">
        <div>
          <h4>
            <span className="text-white font-semibold text-lg md:font-light md:text-2xl">
              Let Us Brighten
            </span>{" "}
            <span className="text-white font-semibold text-2xl md:font-bold md:text-5xl">
              Your Smile!
            </span>
          </h4>
        </div>
        <div>
          <p className="text-center font-light text-white leading-8">
            Helping patients achieve good dental health & beautiful smile is a
            privilege & responsibility. For over 30
            <br /> years, we proudly provided the best dental experience in New
            York. Our comfort-first approach is
            <br />
            designed to meet the needs of you & your entire family.
          </p>
        </div>
        <div>
          <button className="py-[20px] px-[40px] border border-white rounded-lg text-white">
            Make An Appinment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSection