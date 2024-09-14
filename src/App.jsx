import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import FeatureItem from './Components/FeatureItem';
import Wheel from './assets/wheel.webp'

import './App.css'

function App() {


  return(
    <>
    <Navbar/>
    <Hero/>
    {/* <div className="whyus-section">
    <WhyUs/>
    <WhyUs/>
    <WhyUs/>
    </div> */}
    <div className='feature'>
      <FeatureItem/>
      <FeatureItem/>
      <FeatureItem/>
      <div className='wheel1'><img src={Wheel} alt="Wheel image" /></div>
      <div className='wheel2'><img src={Wheel} alt="Wheel image" /></div>
    </div>
    
    </>
  )
  
}

export default App
