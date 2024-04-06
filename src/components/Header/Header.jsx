import React, { useState } from 'react'
import './Header.css'
import Logo from '../../pics/gym logo.png'
import Bars from '../../pics/menus_7263339.png'
import {Link} from 'react-scroll'
const Header = () => {
  
 const mobile =window.innerWidth<=1500 ? true : false
 const [menuOpened,setMenuOpened]= useState(false)
  return (
    <div className="Header">
        <img src={Logo} className='Logo'/>
       {(menuOpened===false && mobile===true) ? (

<div 
style={{backgroundColor:"gray",
padding:"0.9rem",
borderRadius:"1px",
height:"2rem"
}}
onClick={()=>setMenuOpened(true)}
>
  <img src={Bars} alt='' style={{width:"2.2rem", height:"2rem"}}/></div>
        ) : 
        (
          <ul className='header-menu'>
          <li>
            <Link
            onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to='home'
            span={true}
            smooth={true}
            >Home</Link>
            </li>

          <li><Link
          onClick={()=>setMenuOpened(false)}
          to='programs'
            span={true}
            smooth={true}
          >Programs</Link></li>

          <li><Link
           onClick={()=>setMenuOpened(false)}
           to='reasons'
           span={true}
           smooth={true}
          >Why us</Link></li>

          <li><Link
           onClick={()=>setMenuOpened(false)}
           to='plans'
           span={true}
           smooth={true}
          >Plans</Link></li>

          <li><Link
          onClick={()=>setMenuOpened(false)}
          to='Testimonials'
          span={true}
          smooth={true}>Testimonials</Link></li>
      </ul>
       )}
    
    </div>
  )
}

export default Header
