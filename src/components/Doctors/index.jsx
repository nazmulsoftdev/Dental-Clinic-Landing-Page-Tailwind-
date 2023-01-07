import React from 'react';
import D1 from "../../assets/images/d1.png";
import D2 from "../../assets/images/d2.png";
import D3 from "../../assets/images/d3.png";
import D4 from "../../assets/images/d4.png";

function DoctorSection() {
  return (
    <div className="mt-[150px]">
      <div className="space-y-[100px] max-w-[95%] m-auto">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default DoctorSection;




const Header = () => {
  return (
    <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
      <div className="space-y-3">
        <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
          Meet Some of Our{" "}
        </h3>
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
          Brains
        </h3>
      </div>
      <div className="md:text-right space-y-5">
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
          MEET OUR <span className="text-[#FFD700]">DOCTORS</span>
        </h3>
        <div className=" md:w-[95%] md:m-auto md:h-[2px] bg-gray-200 "></div>
      </div>
    </div>
  );
};



const Content = ()=>{
    return (
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-4 md:gap-10">
        <div className="flex flex-col justify-center items-center space-y-5 mb-5">
          <div className="shrink-0">
            <img src={D1} alt="D1" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Dr. Jeanette Hoff</h3>
          </div>
          <div>
            <p>Orthodontic Treatment </p>
            <p>Yale Medical School</p>
          </div>
          <div className="text-center">
            <button className="px-5 py-2 border border-blue-700 rounded-md cursor-pointer">
              Appoinment
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5  mb-5">
          <div className="shrink-0">
            <img src={D2} alt="D2" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Dr. David Ambrose</h3>
          </div>
          <div>
            <p>Orthodontic Treatment </p>
            <p>Yale Medical School</p>
          </div>
          <div className="text-center">
            <button className="px-5 py-2 border border-blue-700 rounded-md cursor-pointer">
              Appoinment
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5  mb-5">
          <div className="shrink-0">
            <img src={D3} alt="D3" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Dr. Jenelia Breton</h3>
          </div>
          <div>
            <p>Orthodontic Treatment </p>
            <p>Yale Medical School</p>
          </div>
          <div className="text-center">
            <button className="px-5 py-2 border border-blue-700 rounded-md cursor-pointer">
              Appoinment
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5  mb-5">
          <div className="shrink-0">
            <img src={D4} alt="D4" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Dr. Jagajeet Aurora</h3>
          </div>
          <div>
            <p>Orthodontic Treatment </p>
            <p>Yale Medical School</p>
          </div>
          <div className="text-center">
            <button className="px-5 py-2 border border-blue-700 rounded-md cursor-pointer">
              Appoinment
            </button>
          </div>
        </div>
      </div>
    );
}