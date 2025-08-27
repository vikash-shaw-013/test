import React from 'react'
import HeroPage from "./HeroPage"
import OnlineCohort from "./OnlineCohort"
import ProgramFeatures from "../components/ProgramFeatures"
import ProgramFit from "../components/ProgramFit"
import HowToGetIn from "../components/HowToGetIn"
import ProgramDetails from "../components/ProgramDetails"
import VideoTestimonials from "../components/VideoTestimonials"
import TestimonialCarousel from "../components/TestimonialCarousel"
import Header from "../components/Header"
import SiteFAQs from "../components/SiteFAQs"
import ContactUs from "../components/ContactUs"
import VSSERAbout from "../components/VSSERAbout"
import VisionSection from "../pages/VisionSection"
import Values from "./Values.jsx"
const Home = () => {
  return (
    <>
    <Header />
    <HeroPage />
   
    <VSSERAbout/>
    <OnlineCohort />
    <ProgramFeatures />
    <ProgramFit />
    <HowToGetIn />
    <ProgramDetails />
    <VideoTestimonials />
     <VisionSection />
    <TestimonialCarousel />
    <Values />
    {/* <SiteFAQs /> */}
    <ContactUs />
  </>
  )
}

export default Home
