import React from 'react'
import { UilBars } from '@iconscout/react-unicons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar_Inner'>
            <h2>CloudOEPP</h2>
            <div className='Navbar_Inner_Sec'>
                <a href="">Pricing</a>
                <a href="">Documentation</a>
                <a href="">Support</a>
                <a href="">Blog</a>
            </div>
            <button>Login</button>
            <UilBars size={40} className="Nav_Bar" />
        </div>

    </div>
  )
}

export default Navbar