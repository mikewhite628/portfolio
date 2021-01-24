import React, { useState, useEffect } from 'react'
import deskPic from '../../images/desk.png'
import mePic from '../../images/me.png'

const Landing = () => {

    return (
        <div className='landing'
            style={{
                backgroundColor: '#252a34',
                }}> 

            <div className='me'><img src={mePic} className='me-pic'/></div>
            <h2 className='greeting'
                style={{color: '#eaeaea'}}> Hi I'm <b style={{color: "#ff2e63"}}>Michael White</b>, I'm a Web Developer and Marine Corps Verteran. 
            </h2>
            

            <div className='desk'> <img src={deskPic} className='desk-pic' /></div>
        </div>
    )
}

export default Landing 
