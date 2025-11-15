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
import FeaturesImages from "@/component/galary/FeaturesImages";
import MoreFeaturesImages from "@/component/galary/MoreFeaturesImages";
import MoreFeaturesImages2 from "@/component/galary/MoreFeaturesImages2";
import MoreFeaturesImages3 from "@/component/galary/MoreFeaturesImages3";
import MoreFeaturesImages4 from "@/component/galary/MoreFeaturesImages4";
import MoreFeaturesImages5 from "@/component/galary/MoreFeaturesImages5";
import FeatureImagesSet6 from "@/component/galary/FeatureImagesSet6";
import FeatureImagesSet7 from "@/component/galary/FeatureImagesSet7";
import FeatureImagesSet8 from "@/component/galary/FeatureImagesSet8";
import FeatureImagesSet9 from "@/component/galary/FeatureImagesSet9";

export default function Home() {
 
  return (
    <>  
      {/* Hero Section with Booking Form */}
    <AboutSection/>
    <FeaturesImages/>
    <MoreFeaturesImages/>
    <MoreFeaturesImages2/>
    <MoreFeaturesImages3/>
    <MoreFeaturesImages4/>
    <MoreFeaturesImages5/>
    <FeatureImagesSet6/>
    <FeatureImagesSet7/>
    <FeatureImagesSet8/>
    <FeatureImagesSet9/>
  
    </>
  );
}