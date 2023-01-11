import React from 'react'
import './Learnmore.css'
import Blog from '../assets/blog.png'
import Docs from '../assets/email.png'
import Faq from '../assets/faq.png'

const Learnmore = () => {
  return (
    <div className='Learn_Main'>
        <h2>New to CloudOEPP</h2>
        <h4> Learn about CloudOEPP technology and how to implement it. </h4>
        <div className='Learn_Inner'>
            <div  className='Learn_Inner_Content'>
                <img src={Blog} alt="" />
                <p>Blog</p>
            </div>
            <div  className='Learn_Inner_Content'>
                <img src={Docs} alt="" />
                <p>Docs</p>
            </div>
            <div  className='Learn_Inner_Content'>
                <img src={Faq} alt="" />
                <p>FAQ</p>
            </div>
        </div>
    </div>
  )
}

export default Learnmore