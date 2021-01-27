import React, { useState, useEffect } from 'react'
import weatherPic from '../../images/weather-app.png'
import todoPic from '../../images/todo.png'
import cvPic from '../../images/cv.png'
import Header from '../Header/Header'

const Projects = () => {

    return (
        <div className='projects' style={{
           backgroundColor:'#eeeeee',
           color: '#252a34'
        }}>
            <Header />
            <h1> Projects </h1>
                <div className='project1'><a href='https://mikewhite628.github.io/weather-app/'><img src={weatherPic} className='project-image weather-app'/></a></div>
                <div className='project2'><a href='https://mikewhite628.github.io/to-do-list//'><img src={todoPic} className='project-image todo-app'/></a></div>
                <div className='project3'><a href='https://mikewhite628.github.io/cv-project//'><img src={cvPic} className='project-image cv-app'/> </a></div>     
            </div>

    )
}

export default Projects