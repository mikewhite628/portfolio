import React, { useState, useEffect } from 'react'
import cssIcon from '../../images/CSS.png'
import htmlIcon from '../../images/html.png'
import jsIcon from '../../images/js.png'
import reactIcon from '../../images/react.png'
import sassIcon from '../../images/sass.png'




const Skills = () => {

    return (
        <div className='skills'>
            <div className='js skill-bar'><div className='js-meter meter'></div></div><img src={jsIcon} className='icon js-icon' />
            <div className='html skill-bar'><div className='html-meter meter'></div><img src={htmlIcon} className='icon html-icon' /></div>
            <div className='css skill-bar'><div className='css-meter meter'></div><img src={cssIcon} className='icon css-icon' /></div>
            <div className='sass skill-bar'><div className='sass-meter meter'></div><img src={sassIcon} className='icon sass-icon' /></div>
            <div className='react skill-bar'><div className='react-meter meter'></div><img src={reactIcon} className='icon react-icon' /></div>
        </div>
    )
}

export default Skills