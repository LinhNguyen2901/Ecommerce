import React from 'react'
import './CSS/Account.css'
import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div className='account-page'>
      <h1>Create An Account</h1>
      <div className='signup'>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='email' placeholder='Your Email'></input>
        <input type='password' placeholder='Password'></input>
      </div>
      <button>Register</button>
      <p>Already have an account?</p>
      <p>Click <Link to='/login'>here</Link> to login</p>
    </div>
  )
}
