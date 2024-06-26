import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>We Ensure better education for a better world</h1>
        <h2><b>Our cutting-edge curriculum is designed to empower students with the knowledge, 
          skills, and experiences needed to excel in the dynamic field of education</b></h2><br /><br />
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero