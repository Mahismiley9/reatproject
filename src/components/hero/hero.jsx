import React from 'react'
import  './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../pics/body.png"
import {motion} from 'framer-motion'
import Heart from "../../pics/heart.png"
import Calories from "../../pics/calories.png"
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition ={type:'spring', duration:8};
    const mobile=window.innerWidth<=768  ? true : false;
  return (

    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
<div className="left-h">
    <Header/>
    {/* the best ad */}
    <div className="the-best-ad">
        
     <motion.div
     initial={{left : mobile ? "150px":"238px"}}
     whileInView={{left:'8px'}}
     transition={{...transition,type:'tween'}}
     >

     </motion.div>
     <span>The Best Fitnes club in the town</span>
    </div>
    {/* hero heading */}
    <div className="hero-text">
        <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
            </div>
            <div><span>Ideal body</span></div>
            <div><span>
            in here we will help to build up your stamina and body shape out
            </span>
               
            </div>
    </div>

    {/* figures */}
    <div className="figures">
        <div>
            <span>
                <NumberCounter end={140} start={100} delay='4' preFix='+'/>
            </span>
            <span>expert coachs </span></div>
        <div>
            <span>
            <NumberCounter end={970} start={100} delay='4' preFix='+'/> </span>
            <span>members joined </span></div>
        <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix='+'/> </span>
            <span>fitness programs </span></div>
    </div>

    {/* here buttons */}
    <div className="hero-buttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
    </div>
</div>
<div className="right-h">
    <button className="btn">Join now</button>
    <motion.div 
      initial={{right:'238px'}}
     whileInView={{right:'8px'}}
    transition={transition}
    className="heart-rate">
        <img src={Heart} alt='' />
        <span>Heart rate</span>
        <span>116 bpm</span>
    </motion.div>
    {/* hero img */}
    <img src={hero_image} alt='' className='hero-image'/>
  {/* calories */}
  <motion.div
      initial={{right:'238px'}}
      whileInView={{right:'28px'}}
     transition={transition}
  className="calories">
    <img src={Calories} alt='' />
    <div>
    <span>CaloriesBurned</span>
    <span>500 kacl</span>
  </div>
  </motion.div>
</div>
    </div>
  )
}

export default Hero
