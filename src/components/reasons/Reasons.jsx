import React from 'react'
import './Reasons.css'
import image1 from "../../pics/gym3.jpg"
import image2 from "../../pics/3.jpg"
import image3 from "../../pics/2.jpg"
import image4 from "../../pics/gym5.jpg"
import nb from "../../pics/lev_14293873.png"
import nike from "../../pics/check-mark_5291043.png"
import adidas from "../../pics/adidas_731962.png"
import tick from "../../pics/checklist.png"

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
     <div className="left-r">
        <img src={image1} alt=''/>
        <img src={image2} alt=''/>
        <img src={image3} alt=''/>
        <img src={image4} alt=''/>

     </div>
     <div className="right-r">
      <span>some reasons</span>
      <div>
        <span className='stroke-text'>why</span>
      <span> choose us</span>
      </div>
      <div className='details-r'>

      <div>
  
        <img src={tick} alt="" ></img>
        <span>OVER 140+ EXPERT COACHS</span></div>
      <div>
        <img src={tick} alt="" />
        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
      <div>
        <img src={tick}  alt="" />
        <span>1 FREE PROGRAM FOR NEW MEMBERS</span></div>
      <div>
        <img src={tick} alt="" />
        <span>RELIABLE PARTNERS</span>
        </div>
     </div>
     <span
     style={{
      color:"var(--gray)",
      fontWeight:"normal"
     }}>OUR PARTNERS</span>
     <div className="partners">
      <img src={nb} alt="" />
      <img src={adidas} alt="" />
      <img src={nike} alt="" /></div>
</div>
    </div>
  )
}

export default Reasons
