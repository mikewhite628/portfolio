import React, { useEffect } from 'react'
import cssIcon from '../../images/CSS.png'
import htmlIcon from '../../images/html.png'
import jsIcon from '../../images/js.png'
import reactIcon from '../../images/react.png'
import sassIcon from '../../images/sass.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../../App.css'




const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div className='skills'>
            <div className='js skill-bar'><div className='js-meter meter' data-aos='load-js'></div><img src={jsIcon} className='icon js-icon' data-aos='pulse' /></div>
            <div className='html skill-bar'><div className='html-meter meter' data-aos='load-html'></div><img src={htmlIcon} className='icon html-icon' data-aos='pulse' /></div>
            <div className='css skill-bar'><div className='css-meter meter' data-aos='load-css'></div><img src={cssIcon} className='icon css-icon' data-aos='pulse' /></div>
            <div className='sass skill-bar'><div className='sass-meter meter' data-aos='load-sass'></div><img src={sassIcon} className='icon sass-icon' data-aos='pulse' /></div>
            <div className='react skill-bar'><div className='react-meter meter' data-aos='load-react'></div><img src={reactIcon} className='icon react-icon' data-aos='pulse' /></div>
        </div>
    )
}

export default Skills