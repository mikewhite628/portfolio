import React, { useState, useEffect } from 'react'
import cssIcon from '../../images/CSS.png'
import htmlIcon from '../../images/html.png'
import jsIcon from '../../images/js.png'
import reactIcon from '../../images/react.png'
import sassIcon from '../../images/sass.png'




const Skills = () => {

    return (
        <div className='skills'>
            <div className='js'><div className='js-meter'>65%</div></div><img src={jsIcon} className='icon js-icon' />
            <div className='html'><div className='html-meter'>60%</div><div className='html-icon'><img src={htmlIcon} className='icon' /></div></div>
            <div className='css'><div className='css-meter'>70%</div><div className='css-icon'><img src={cssIcon} className='icon' /></div></div>
            <div className='sass'><div className='sass-meter'>70%</div><div className='sass-icon'><img src={sassIcon} className='icon' /></div></div>
            <div className='react'><div className='react-meter'>70%</div><div className='react-icon'><img src={reactIcon} className='icon' /></div></div>
        </div>
    )
}

export default Skills