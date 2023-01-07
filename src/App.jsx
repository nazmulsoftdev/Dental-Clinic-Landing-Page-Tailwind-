import './App.css';
// import BannerSection from './components/Banner';
// import CheckupLineSection from './components/ChekupLine';
// import ClientFeedbackSection from './components/ClientFeedback';
// import ContactSection from './components/Contact';
// import DoctorSection from './components/Doctors';
// import FooterSection from './components/Footer';
// import FooterBottomSection from './components/FooterBottom';
// import GetTouchSection from './components/GetTouch';
// import HeroSection from './components/Hero';
// import HistorySection from './components/History';
// import NavSection from './components/NavBar';
// import OurserviceSection from './components/Ourservice';
// import SubscribeSection from './components/Subscribe';

import {Routes,Route} from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
