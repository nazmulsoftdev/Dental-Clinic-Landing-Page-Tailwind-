import React from 'react'
import BannerSection from '../components/Banner'
import CheckupLineSection from '../components/ChekupLine'
import ClientFeedbackSection from '../components/ClientFeedback'
import ContactSection from '../components/Contact'
import DoctorSection from '../components/Doctors'
import FooterSection from '../components/Footer'
import FooterBottomSection from '../components/FooterBottom'
import GetTouchSection from '../components/GetTouch'
import HeroSection from '../components/Hero'
import HistorySection from '../components/History'
import OurserviceSection from '../components/Ourservice'
import SubscribeSection from '../components/Subscribe'
import LightSpeed from "react-reveal/Zoom";
function HomePage() {
  return (
    <div>
      <LightSpeed  left>
        <HeroSection />
        <GetTouchSection />
        <CheckupLineSection />
        <OurserviceSection />
        <BannerSection />
        <HistorySection />
        <DoctorSection />
        <ClientFeedbackSection />
        <ContactSection />
        <SubscribeSection />
        <FooterSection />
        <FooterBottomSection />
      </LightSpeed>
    </div>
  );
}

export default HomePage