import React from 'react';
import {} from 'flowbite-react'

import LeftHeroSection from '../LeftHero';
import RightHeroSection from "../RightHero";


function HeroSection() {
  return (
    <div className='mt-10'>
      <div className="flex justify-between flex-col space-y-5 md:grid md:grid-cols-2 md:gap-10">
        <LeftHeroSection />
        <RightHeroSection />
      </div>
    </div>
  );
}

export default HeroSection