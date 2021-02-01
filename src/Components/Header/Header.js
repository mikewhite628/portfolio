import React, {useEffect} from 'react'
import {Link} from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../../App.css'


const Header = () => {
    useEffect(() => {
        Aos.init({duration: 5000});
    }, []);

const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

let navbarClasses=['nav'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
    
    return (
        <header className={navbarClasses.join(" ")} data-aos='fade-left'>
        <div>
           <ul className='nav'>
               <li><Link to='landing' smooth={true} duration={1000} >Home</Link></li>
               <li><Link to='about' smooth={true} duration={1000} >About</Link></li>
               <li><Link to='projects' smooth={true} duration={1000} >Projects</Link></li>
           </ul>
        </div>
        </header>
    )
}

export default Header