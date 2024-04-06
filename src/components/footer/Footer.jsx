import React from 'react'
import './Footer.css'
import Github from '../../pics/github_2111425.png'
import Instagram from '../../pics/instagram_174855.png'
import Linkedin from '../../pics/linkedin_1384014.png'
import Logo from '../../pics/gym logo.png'

const Footer = () => {
  return (
   <div className="Footer-container">
    <hr/>
    <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
    </div>
    <div className="logo-f">
        <img src={Logo} alt="" />
    </div>
   </div>
   <div className="blur blur-f-1"></div>
   <div className="blur blur-f-2"></div>
   </div>
  )
}

export default Footer
