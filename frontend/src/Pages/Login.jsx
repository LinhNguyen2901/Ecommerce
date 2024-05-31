import React from 'react'
import './CSS/Login.css'

export default function Login() {
  return (
    <div className='login'>
        <h1>Log In</h1>
        <div className='login-info'>
            <input type='text' placeholder='Your Email'/>
            <input type='password' placeholder='Password'/>
        </div>
        <button>Log In</button>
    </div>
  )
}
