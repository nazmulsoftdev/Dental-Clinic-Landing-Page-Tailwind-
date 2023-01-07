import React from 'react';

import CallIcon from "../../assets/icons/callIcon.png";
import ConsultIcon from "../../assets/icons/consultIcon.png";
import DateIcon from "../../assets/icons/dateIcon.png";




function GetTouchSection() {
  return (
    <div className="mt-[80px]">
      <div className="p-[50px] bg-[#516EFF]">
        <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
          <LeftTouch />
          <RightTouch />
        </div>
      </div>
    </div>
  );
}

export default GetTouchSection




const LeftTouch = ()=>{

    return (
      <div className="flex justify-center items-center">
        <div className='space-y-4'>
          <h3 className="font-semibold text-2xl text-white md:font-bold md:text-3xl">
            How to get our service?{" "}
          </h3>
          <p className='text-white font-light'>Just follow these simple steps</p>
        </div>
      </div>
    );

} 




const RightTouch = ()=>{
     return (
       <div className="flex justify-center items-center flex-wrap space-x-3 space-y-3  md:space-x-3  ">
         <div className="p-10 bg-white shadow-2xl rounded-md flex justify-center flex-col items-center space-y-2">
           <img className="shrink-0" src={CallIcon} alt="CallIcon" />
           <p className="text-center text-base font-normal">
             Call for
             <br />
             appointment
           </p>
         </div>
         <div className="p-10 bg-white shadow-2xl rounded-md flex justify-center flex-col items-center space-y-2">
           <img className="shrink-0" src={ConsultIcon} alt="ConsultIcon" />
           <p className="text-center text-base font-normal">
             Get a<br />
             Date & Serial
           </p>
         </div>
         <div className="p-10 bg-white shadow-2xl rounded-md flex justify-center flex-col items-center space-y-2">
           <img className="shrink-0" src={DateIcon} alt="DateIcon" />
           <p className="text-center text-base font-normal">
             Consult
             <br />
             Your dentist
           </p>
         </div>
       </div>
     );
}