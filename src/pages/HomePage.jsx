import React from 'react'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import HowItWorks from '../components/HomePage/HowItWorks'
import Features from '../components/HomePage/Features'
import Testimonial from '../components/HomePage/Testimonial'
import FAQ from '../components/HomePage/FAQ'
import CTA from '../components/HomePage/CTA'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  )
}

export default HomePage
