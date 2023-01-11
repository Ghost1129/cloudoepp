import React from 'react'
import HeroImage from '../assets/hero.svg'
import './Home.css'
import Ill1 from '../assets/clickbait.svg'
import Ill2 from '../assets/coding.svg'
import Ill3 from '../assets/searching.svg'

const Home = () => {
  return (
    <div className='Hero_Main'>
        <div className='Hero_Upper'>
            <h1>Internet of Things</h1>
            <h2>Donec tristique tortor a justo imperdiet mattis</h2>
            <img src={HeroImage} alt="Image" />
            <button>Click Here To Do..</button>
        </div>
        <div className='Hero_Lower'>
            <div className='Hero_Lower_Inner'>
                <div className='Hero_Lower_Inner_Content'>
                    <img src={Ill1} alt="clickbait" />
                    <h3>Something Here</h3>
                    <p>In pharetra nulla non sapien scelerisque, sit amet pulvinar nisi accumsan.</p>
                </div>
                <div className='Hero_Lower_Inner_Content'>
                    <img src={Ill2} alt="clickbait" />
                    <h3>Something Here</h3>
                    <p>In pharetra nulla non sapien scelerisque, sit amet pulvinar nisi accumsan.</p>
                </div>
                <div className='Hero_Lower_Inner_Content'>
                    <img src={Ill3} alt="clickbait" />
                    <h3>Something Here</h3>
                    <p>In pharetra nulla non sapien scelerisque, sit amet pulvinar nisi accumsan.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home