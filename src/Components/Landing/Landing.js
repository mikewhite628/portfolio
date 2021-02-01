import React from 'react'
import deskPic from '../../images/desk.png'
import mePic from '../../images/me.png'
import { Link } from 'react-scroll'


const Landing = () => {

    return (
        <div className='landing-container'
        style={{
            backgroundColor: '#252a34',
            }}> 
        <div className='landing' id={'landing'}>
            
            <div className='me'><img src={mePic} className='me-pic'/></div>
            <h2 className='greeting'
                style={{color: '#eaeaea'}}> Hi I'm <b style={{color: "#ff2e63"}}>Michael White</b>, I'm a Web Developer and Marine Corps Veteran  
                <span><Link to='about' smooth={true} duration={1000}
                style={
                    {border: '3px solid',
                     marginLeft: '10px',
                     textDecoration: 'none',
                     paddingLeft: '10px',
                     paddingRight: '10px',
                     color: '#08d9d6'
                    }}> Learn-more
                    </Link>
                    </span>
            </h2>
            

            <div className='desk'> <img src={deskPic} className='desk-pic' /></div>
        </div>
        </div>
    )
}

export default Landing 
