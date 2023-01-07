import React from 'react';
import ClientImage from "../../assets/images/clientReview.png";

function ClientFeedbackSection() {
  return (
    <div className="mt-[150px] bg-[#516EFF] p-[70px]">
      <div className="space-y-[100px] max-w-[95%] m-auto">
        <div className='flex flex-col md:flex md:flex-row md:justify-between md:items-center'>
            <LeftContent />
            <RightContent />
        </div>
      </div>
    </div>
  );
}

export default ClientFeedbackSection;



const LeftContent = ()=>{
    return (
      <div>
        <img src={ClientImage} alt="ClientImage"  />
      </div>
    );
}


const RightContent = ()=>{
    return (
      <div className='space-y-10'>
        <div className="w-[100%] h-[1px] bg-white"></div>
        <div>
          <h4 className="text-white text-3xl font-light">
            What our client says about us
          </h4>
        </div>
        <div>
          <p className='text-white'>
            I’ve seen a lot of Dentists over my lifetime because I’ve had some<br />
            serious dental issues. But my highest praise goes to Dr. Jonathon<br />
            Doe and his staffs . I was always very anxious going to the dentist<br />
            but this time at Digital Implant, my experience was so painless and<br />
            relaxed their was no discomfort whatsoever.
          </p>
        </div>
      </div>
    );
}