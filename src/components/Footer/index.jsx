import React from 'react';
import logoFooter from "../../assets/images/LogoFooter.png";

function FooterSection() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 p-[100px] bg-[#516EFF] md:grid md:grid-cols-4 md:divide-x-[1px] md:divide-slate-50">
        <Footer1 />
        <Footer2 />
        <Footer3 />
        <Footer4 />
      </div>
    </div>
  );
}

export default FooterSection;



const Footer1 = ()=>{
    return (
      <div className="flex flex-col justify-center space-y-5 border-b-2 border-gray-500  md:border-0">
        <div className="shrink-0">
          <img src={logoFooter} alt="logoFooter" />
        </div>
        <div >
          <p className="text-white font-light  whitespace-normal mb-10">
            Dentics is a well-known name in
            <br /> dental and oral care in New
            <br /> York. The journey of this
            <br /> institution started in 1990
          </p>
        </div>
      </div>
    );
}


const Footer2 =()=>{
    return (
      <div className="flex flex-col justify-center items-center border-b-2 border-gray-500  md:border-0">
        <div className="space-y-8 mb-10">
          <p className="text-white">We are welcoming you</p>
          <h3 className="text-2xl text-white font-bold">
            Want to visit
            <br />
            our clinic?
          </h3>
          <p className="text-white ">
            Saturday - Thrusday
            <br />
            10 am- 9 pm
          </p>
        </div>
      </div>
    );
}



const Footer3 = ()=>{
    return (
      <div className="space-y-8 border-b-2 border-gray-500  md:border-0">
        <div className="flex justify-center">
          <p className="text-white">Important link</p>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-white">Facebook</p>
          <p className="text-white">Career</p>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-white">Twitter</p>
          <p className="text-white">Support</p>
        </div>
        <div className="flex justify-around items-center mb-10">
          <p className="text-white">Instagram</p>
          <p className="text-white ">Privacy policy</p>
        </div>
      </div>
    );
}



const Footer4 = ()=>{
    return (
      <div className="flex flex-col justify-center items-center space-y-8 border-b-2 border-gray-500  md:border-0">
        <div>
          <p className="mr-10 text-white font-light">Say hello to us</p>
        </div>
        <div>
          <p className="text-white">hello@reallygreatsite.com</p>
        </div>
        <div>
          <p className="text-white">Address</p>
          <p className="text-white mb-10">
            123 Anywhere St., Any
            <br /> City, NY 39200
          </p>
        </div>
      </div>
    );
}