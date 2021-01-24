import React, { useState, useEffect } from 'react'
import weatherPic from '../../images/weather-app.png'
import todoPic from '../../images/todo.png'
import cvPic from '../../images/cv.png'

const Projects = () => {

    return (
        <div className='projects' style={{
           color:'#252a34'
        }}>
            <h1> Projects </h1>
            <div className='project-display'>
                <div className='weather-app'> <img src={weatherPic} className='project-image'/></div>
                <div className='todo-app'> <img src={todoPic} className='project-image'/> </div>
                <div className='cv-app'> <img src={cvPic} className='project-image'/> </div>


                
            </div>
        </div>
    )
}

export default Projects