import React from 'react';
import TechnologyImg from "../../assets/images/technologyIcon.png";
import InjectionImg from "../../assets/images/injectionImg.png";
import DentalImg from "../../assets/images/dentalImg.png";
import ScannerImg from "../../assets/images/scannerImg.png";
import SlimeImg from "../../assets/images/smileDesignImg.png";
import CrownImg from "../../assets/images/crownImg.png";

function OurserviceSection() {
  return (
    <div className='mt-[150px]'>
    <div className='space-y-[100px] max-w-[95%] m-auto'>
        <Header />
        <CardContent />
    </div>
    </div>
  )
}

export default OurserviceSection;




const Header = ()=>{

    return (
      <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
        <div className="space-y-3">
          <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
            What Makes Us More{" "}
          </h3>
          <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
            Special
          </h3>
        </div>
        <div className="md:text-right space-y-5">
          <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
            KEY <span className="text-[#FFD700]">FEATURE</span>
          </h3>
          <div className=" md:w-[95%] md:m-auto md:h-[2px] bg-gray-200 "></div>
        </div>
      </div>
    );

}

const CardContent = ()=>{
    return (
      <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-3 md:gap-10">
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={TechnologyImg} alt="TechnologyImg" />
          </div>
          <h4 className="text-2xl font-medium">Laser Technology</h4>
          <p className="text-center">
            Worlds most advanced Diode Laser.
            <br /> Your treatment experience will be
            <br />
            relaxing & smooth.
          </p>
        </div>
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={InjectionImg} alt="InjectionImg" />
          </div>
          <h4 className="text-2xl font-medium">Painless Injection</h4>
          <p className="text-center">
            Only dental clinic in New York, USA
            <br /> utilising Painless Injection system. You
            <br /> will be amazed!
          </p>
        </div>
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={DentalImg} alt="TechnologyImg" />
          </div>
          <h4 className="text-2xl font-medium">Dental Implant</h4>
          <p className="text-center">
            30+ years of experience in Dental Implant
            <br /> with specialist care. You will be able to
            <br /> chew properly again!
          </p>
        </div>
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={ScannerImg} alt="ScannerImg" />
          </div>
          <h4 className="text-2xl font-medium">Laser Technology</h4>
          <p className="text-center">
            One of the world’s most advanced 3D
            <br /> Dental Scanner with auto scanning only
            <br /> one in New York!
          </p>
        </div>
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={SlimeImg} alt="SlimeImg" />
          </div>
          <h4 className="text-2xl font-medium">Digital Smile Design</h4>
          <p className="text-center">
            We help to re-design your smile and
            <br /> shape your teeth to create a customised
            <br /> smile for your face!
          </p>
        </div>
        <div className="p-3 shadow-2xl bg-[#F8FAFC] rounded-lg flex flex-col items-center space-y-5">
          <div className="shrink-0">
            <img src={CrownImg} alt="CrownImg" />
          </div>
          <h4 className="text-2xl font-medium">Crown and Bridge</h4>
          <p className="text-center">
            Transform you blackish gum to pinkish
            <br /> colour with painless, single appointment
            <br /> Laser Gum Treatment
          </p>
        </div>
      </div>
    );
}