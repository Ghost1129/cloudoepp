import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer_Main'>
        <div className='Footer_Left'>
            <div className='Footer_Left_L'>
                <h4>Menu</h4>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='Footer_Left_R'>
                <h4>Resources</h4>   
                <ul>
                    <li>Legal and Policies</li>
                    <li>Security and Compliance</li>
                    <li>Status</li>
                </ul>
            </div>
        </div>
        <div className='Footer_Right'>
            <p>CloudOEPP</p>
            <button>Support</button>
        </div>
    </div>
  )
}

export default Footer