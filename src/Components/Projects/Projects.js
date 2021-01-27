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
                <img src={weatherPic} className='project-image weather-app'/>
               <img src={todoPic} className='project-image todo-app'/>
               <img src={cvPic} className='project-image cv-app'/>          
            </div>

    )
}

export default Projects