import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>Tesla&Corp.</p>
        </div>

        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home{menu==="home" ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men{menu==="men" ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women{menu==="women" ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids{menu==="kids" ? <hr/> : <></>}</Link></li>
        </ul>

        <div className='account'>
            <Link to='/account'><button>Account</button></Link>
            <Link to='/cart'><img src={cart} alt=''/></Link>
            <div className='cart-count'>0</div>
        </div>
    </div>

  )
}

