import React from 'react'
import './About.css'
import About1 from '../assets/about1.svg'
import About2 from '../assets/about2.svg'
import About3 from '../assets/about3.svg'
import About4 from '../assets/about4.svg'
import About5 from '../assets/about5.svg'
import About6 from '../assets/about6.svg'


const About = () => {
  return (
    <div className='About_Main'>
        <h2>Reasons You Will Love CloudOEPP</h2>
        <div className='About_Inner'>
            <div className='About_Inner_Content'>
                <img src={About1} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className='About_Inner_Content'>
                <img src={About2} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className='About_Inner_Content'>
                <img src={About3} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className='About_Inner_Content'>
                <img src={About4} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className='About_Inner_Content'>
                <img src={About5} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className='About_Inner_Content'>
                <img src={About6} alt="" />
                <h3>Text Here</h3>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
        </div>
    </div>
  )
}

export default About