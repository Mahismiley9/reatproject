import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import Rightarrow from '../../pics/right-arrow.png'
const Program = () => {
  return (
   <div className="Programs"id="programs">
    {/* header */}
    <div className="programs-header">
    <span className='stroke-text'>Explore our</span>
    <span>Programs</span>
    <span className='stroke-text'>To shape you</span>
   </div>
<div className="program-categories">
  {programsData.map((program)=>( 
  <div className="category">
    {program.image}
    <span>{program.heading}</span>
    <span>{program.details}</span>
    <div className="join-now"><span>Join Now</span><img src={Rightarrow} alt='' width={40} height={40} /></div>
  </div>
  ))}
</div>

   </div> 
  );
}

export default Program
