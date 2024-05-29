import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export default function 
() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=''/>
            <p>Tesla&Corp.</p>
        </div>
        <div className='info'>
            <p>Company</p>
            <p>Products</p>
            <p>About</p>
            <p>Contact</p>
            <p>Account</p>
        </div>
        <div className='contact'>
            <img src={instagram} alt=''/>
            <img src={pinterest} alt=''/>
            <img src={whatsapp} alt=''/>
        </div>
    </div>
  )
}
