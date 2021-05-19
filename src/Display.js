import React from 'react'
import Footer from './Footer'
import mask from './images/panda.jpg'
import distance from './images/distance.jpg'
import sanetize from './images/sanitizer.jpg'
import './index.css'


export default function Display() {
   

   
  return (
    <div className="text">
      <br/>
    <h2>Oops ! I think it is a prank on you buddy </h2>
    <br/>
    <br/>
    <h3>But here are some tips for you to protect you  from COVID-19</h3>
    
    <br/>
    <div className="img" >

      
      <h3><span id="one">Wear</span><span id="two"> Mask</span></h3>
      <img  className="panda" src={mask} alt="mask"/>
      <h3><span id="one">Maintain Social</span><span id="two"> Distance</span></h3>
      
      <img  className="distance"src={distance} alt="Social distance"/>
      <h3><span id="one">Sanitize</span><span id="two"> Your Hands</span></h3>
      <img  className="sanetizer"src={sanetize} alt="Sanetizer"/>
      <br/>
      <h3>Spread love </h3>
      <h3>Be safe</h3>
      <h3>And be happy</h3>


    </div>
    <Footer/>
    </div>
  )
}
