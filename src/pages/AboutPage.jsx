import React from 'react'
import BannerSection from '../components/Banner'
import CheckupLineSection from '../components/ChekupLine'
import DoctorSection from '../components/Doctors'
import FooterSection from '../components/Footer'
import FooterBottomSection from '../components/FooterBottom'
import GetTouchSection from '../components/GetTouch'
import HistorySection from '../components/History'
import OurserviceSection from '../components/Ourservice'
import LightSpeed from "react-reveal/Zoom";

function AboutPage() {
  return (
    <div>
      <LightSpeed left>
        <GetTouchSection />
        <CheckupLineSection />
        <OurserviceSection />
        <BannerSection />
        <HistorySection />
        <DoctorSection />
        <FooterSection />
        <FooterBottomSection />
      </LightSpeed>
    </div>
  );
}

export default AboutPage