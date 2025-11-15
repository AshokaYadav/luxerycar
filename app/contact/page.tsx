// pages/index.js
// import Header from "@/components/Header";
// import TopBar from "@/components/TopBar";
// import HeroWithBooking from "@/components/HeroWithBooking";


import AboutUs from "@/component/AboutUs";
import CarGrid from "@/component/CarGrid";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import HeroWithBooking from "@/component/HeroWithBooking ";
import Reviews from "@/component/Reviews";
import SelfDriveCars from "@/component/SelfDriveCars";
import TermsSection from "@/component/TermsSection";
import TopBar from "@/component/TopBar";
import WhyChoose from "@/component/WhyChoose";
import cars from "@/data/cars.js"
import carData from "@/data/carData"
import AboutSection from "@/component/about/AboutSection";
import ContactBookingSection from "@/component/about/ContactBookingSection";
import ContactInfo from "@/component/contact/page";

export default function Home() {
 
  return (
    <>  
      {/* Hero Section with Booking Form */}
    <AboutSection/>
      <ContactBookingSection/>
      <ContactInfo/>
    </>
  );
}