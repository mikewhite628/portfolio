import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Skills from './Skills'
import Tools from './Tools'

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
            twitter
            youtube
            github

            </div>

            <Skills />
            <Tools />
            

            
        </div>
    )
}

export default About