import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Skills from './Skills'
import Tools from './Tools'
import ghPic from '../../images/github.png'
import ytPic from '../../images/youtube.png'
import twitterPic from '../../images/twitter.png'


const About = () => {

    return (
        
        <div className='about' style={{
        backgroundColor: '$eeeeee',
        color: '#252a34'
        }}>
            <Header />
            <div className='about-text'>
            <h1 className='about-title'> About </h1>
            I'm a self taught developer who loves simple, effective design. 
            </div>
            <div className='social-container'>
                <a href='https://twitter.com/Th3MichaelWhite'><img src={twitterPic} className='social-icon' /></a>
                <a href='https://github.com/mikewhite628'><img src={ghPic} className='social-icon' /></a>
                <a href='https://www.youtube.com/channel/UCPyST5UFOezhL7cErL0Zysw'><img src={ytPic} className='social-icon' /></a>
            </div>

            <Skills />
            <Tools />
            

            
        </div>
    )
}

export default About