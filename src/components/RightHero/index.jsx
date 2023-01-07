import React from 'react';
import HeroImage from "../../assets/images/heroRightImg.png";

function RightHeroSection() {
  return (
    <div className='flex justify-center items-center'>
      <img className='shrink-0' src={HeroImage} alt="HeroImage"  />
    </div>
  );
}

export default RightHeroSection;