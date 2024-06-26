import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../pics/arrow-left_3353056.png'
import rightArrow from '../../pics/arrow-right_9847468.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
  const transition={type:'spring',duration:9}
  const [selected,setSelected]=useState(0);
  const tLength=testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
<span>Testimonials</span>
<span className='stroke-text'>What they</span>
<span>Say about us</span>
<motion.span
  key={selected}
  initial={{opacity:0,x:-100}}
  animate={{opacity:1,x:0}}
  exit={{opacity:0,x:100}}
  transition={transition}
>{testimonialsData[selected].review}</motion.span>
<span><span style={{color:'var(--orange)'}}>
  {testimonialsData[selected].name}</span>
  {" "}
  -{testimonialsData[selected].status}
  </span>
        </div>
        <div className="right-t">
          <motion.div
              initial={{opacity:0,x:-100 }}
              whileInView={{opacity:1,x:0}}
             transition={{...transition,duration:3}}></motion.div>
          <motion.div
              initial={{opacity:0,x:100 }}
              whileInView={{opacity:1,x:0}}
             transition={{...transition,duration:3}}></motion.div>
          <motion.img
          key={selected}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          src={testimonialsData[selected].image} alt=''/>
          
          <div className="arrows">
            <img 
            onClick={()=>{
              selected===0
              ?setSelected(tLength-1)
              :setSelected((prev) =>prev-1);
              
            }}
            src={leftArrow} alt=''/>
            <img 
            onClick={()=>{
              selected===tLength-1
              ?setSelected(0) 
              :setSelected((prev)=>prev+1);
            }}
            src={rightArrow} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Testimonials
