import React from 'react';
import HistoryImage from "../../assets/images/historyImg.png";

function HistorySection() {
  return (
   <div className='mt-[150px]'>
    <div className='space-y-[100px] max-w-[95%] m-auto'>
       <Header />
       <Content />
    </div>
    </div>
  )
}

export default HistorySection;



const Header = () => {
  return (
    <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
      <div className="space-y-1 md:space-y-5">
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl ">
          WHO <span className="text-[#FFD700]">WE ARE</span>
        </h3>
        <div className=" md:w-[95%] md:m-auto md:h-[2px] bg-gray-200 "></div>
      </div>
      <div className="text-left md:text-right md:space-y-2">
        <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
          Our Glorious{" "}
        </h3>
        <h3 className="font-semibold text-2xl md:font-bold md:text-5xl">
          History
        </h3>
      </div>
    </div>
  );
};



const Content = ()=>{

    return (
      <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
        <div className="shrink-0">
          <img src={HistoryImage} alt="HistoryImage" />
        </div>
        <div className="p-5 bg-[#F8FAFC] shadow-2xl rounded-md space-y-4 flex flex-col justify-center ">
          <h3 className="text-xl font-bold">Our history</h3>
          <p className="text-base text-gray-400">
            Dentics is a well-known name in dental and oral care in New York.
            <br />
            The journey of this institution started in 1990 under the hands of
            <br />
            Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics
            <br />
            dental center has been leading the way in dental treatment in USA
            <br />
            for more than 30 years in keeping with the evolution of time and the
            <br />
            modernization of the era.
          </p>
        </div>
      </div>
    );

}