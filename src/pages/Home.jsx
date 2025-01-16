import React, { Fragment } from "react";
import HeroSection from "../components/home/HeroSection";
import BrandsSection from "../components/home/BrandsSection";
import VideoSection from "../components/home/VideoSection";
import Benefits from "../components/home/Benefits";
import OurCourses from "../components/home/OurCourses";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PricingSection from "../components/home/PricingSection";
import FAQ from "../components/home/FAQ";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <BrandsSection />
      <VideoSection />
      <Benefits />
      <OurCourses />
      <TestimonialsSection />
      <PricingSection />
      <FAQ/>
    </Fragment>
  );
}

export default Home;
