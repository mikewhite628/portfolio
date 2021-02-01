import React, {useEffect } from 'react'
import weatherPic from '../../images/weather-app.png'
import todoPic from '../../images/todo.png'
import cvPic from '../../images/cv.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../../App.css'
import Header from '../Header/Header'

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='projects' style={{
           backgroundColor:'#eeeeee',
           color: '#252a34'
        }}>
        <Header />

            <h1 className='project-title' id='projects'> Projects </h1>
                <div className='project1' data-aos='fade-right'><a href='https://mikewhite628.github.io/weather-app/'><img src={weatherPic} className='project-image weather-app project-shadow'/></a></div>
                <div className='project1-desc desc-text' data-aos='fade'><h2>Weather Checker</h2><p>Used a weather api to create a simple weather app that can be used to display any cities current weather conditions. Made with Pure Javascript</p></div>

                <div className='project2' data-aos='fade-right'><a href='https://mikewhite628.github.io/to-do-list//'><img src={todoPic} className='project-image todo-app project-shadow'/></a></div>
                <div className='project2-desc desc-text' data-aos='fade'><h2>To-Do List</h2><p>A to-do list that uses local storage to save important task. Sub task can be added, marked complete, and removed to monitor progress. Made with pure Javascript</p></div>

                <div className='project3' data-aos='fade-right'><a href='https://mikewhite628.github.io/cv-project//'><img src={cvPic} className='project-image cv-app project-shadow'/> </a></div>
                <div className='project3-desc desc-text' data-aos='fade'><h2>CV</h2><p>Used React to create a resume that the user can that users can update with their own information</p></div> 
            </div>

    )
}

export default Projects