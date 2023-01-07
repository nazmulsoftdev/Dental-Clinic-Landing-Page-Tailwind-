import React from 'react'
import BannerSection from '../components/Banner'
import CheckupLineSection from '../components/ChekupLine'
import DoctorSection from '../components/Doctors'
import FooterSection from '../components/Footer'
import FooterBottomSection from '../components/FooterBottom'
import OurserviceSection from '../components/Ourservice'
import LightSpeed from "react-reveal/Zoom";
function ServicePage() {
  return (
    <LightSpeed left>
      <CheckupLineSection />
      <OurserviceSection />
      <BannerSection />
      <DoctorSection />
      <FooterSection />
      <FooterBottomSection />
    </LightSpeed>
  )
}

export default ServicePage