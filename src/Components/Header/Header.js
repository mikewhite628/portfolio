import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import About from '../About/About'
import {Link} from 'react-router-dom'


const Header = () => {

    const [navAbout, setNavAbout] = useState()

    const goAbout = () => {
        return (
           <About />
        )
    }

    return (
        <div>
           <ul className='nav'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/projects'>Projects</Link></li>
           </ul>
        </div>
    )
}

export default Header