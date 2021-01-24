import React, { useState, useEffect } from 'react'
import Skills from './Skills'
import Tools from './Tools'

const About = () => {

    return (
        <div className='about' style={{
        backgroundColor: '$eeeeee',
        color: '#252a34'
        }}>
            <h1 className='about-title'> About </h1>
            <div className='about-text'>
            I'm a self taught developer who loves simple yet effective design
            </div>

            <Skills />
            <Tools />

            
        </div>
    )
}

export default About