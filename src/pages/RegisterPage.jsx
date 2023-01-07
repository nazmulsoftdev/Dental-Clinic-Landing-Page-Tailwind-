import React from 'react'
import ContactSection from '../components/Contact'
import FooterSection from '../components/Footer'
import FooterBottomSection from '../components/FooterBottom'
import SubscribeSection from '../components/Subscribe'
import LightSpeed from "react-reveal/Zoom";
function RegisterPage() {
  return (
    <LightSpeed left>
        <ContactSection />
        <SubscribeSection />
        <FooterSection />
        <FooterBottomSection />
    </LightSpeed>
  )
}

export default RegisterPage