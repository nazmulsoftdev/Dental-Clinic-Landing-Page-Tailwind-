import React from 'react';
import DoctorImage from "../../assets/images/doctorImg.png";
import TickIcon from '../../assets/icons/ticmarkIcon.png'

function CheckupLineSection() {
  return (
    <div className="mt-[100px]">
      <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default CheckupLineSection;




const LeftSection = ()=>{

   return (
     <div className="flex flex-col items-center space-y-[70px]">
       <div className="space-y-4">
         <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
           Always <span className="text-[#FFD700]">Lough</span>
         </h3>
         <h3 className="font-semibold text-2xl md:font-bold md:text-3xl">
           Whenever Its Possible
         </h3>
       </div>
       
       <div className="shrink-0">
         <img src={DoctorImage} alt="DoctorImage" />
       </div>
     </div>
   );

}


const RightSection = ()=>{
    return (
      <div className="shadow-lg p-6 space-y-[70px]">
        <div>
          <p className='text-gray-500 font-light text-lg'>
            We also offer treatments that improve the appearance of your smile
            <br />
            giving you the confidence boost you deserve. The process or our
            <br />
            treatment below.
          </p>
        </div>
        <div>
          <h3 className="uppercase text-2xl font-medium">WHAT WE PROVIDE</h3>
        </div>
        <div>
            <div>
                <ServiceContent />
            </div>
        </div>
      </div>
    );
}


const ServiceContent = ()=>{
    return (
      <div className="mt-[10px] flex justify-between items-center">
        <div>
          <ul className="space-y-4">
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Check ups</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Cosmetic dentistry</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Orthodontics</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Preventative checks</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Emergencies</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Dental implants</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Children’s dentistry</p>
            </li>
            <li className="flex space-x-2">
              <img src={TickIcon} alt="icon" />
              <p>Telephone consultations</p>
            </li>
          </ul>
        </div>
      </div>
    );
}