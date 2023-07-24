import React from 'react'
import './header.css'
import logo from './../../../logo.svg'
import './../Global.css'

const Header = () => {
  return (
    <div className="container brndHeadCont">
      <div class="brndHeadCont-c1">
        <img src={logo} className="headLogo" alt="logo" />  
        <h1 className="brandLogo" >Photo Editor</h1>
      </div>
      <div class="brndHeadCont-c2">
        Home | About
      </div>
    </div>
  )
}

export default Header
