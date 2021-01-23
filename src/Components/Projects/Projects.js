import React, { useState, useEffect } from 'react'

const Projects = () => {

    return (
        <div className='projects' style={{
           color:'#252a34'
        }}>
            <h1> Projects </h1>
            <div className='project-display'>
                <div className='weather-app'> weather app picture and discription here with link to github </div>
                <div className='todo-app'> todo app picture and discription here with link to github </div>
                <div className='cv-app'> cv app picture and discription here with link to github </div>
                <div className='coffee-app'> coffeeapp picture and discription here with link to github </div>
                <div className='cal-app'> calc app picture and discription here with link to github </div>
                <div className='sketch-app'> sketch app picture and discription here with link to github </div>
                
            </div>
        </div>
    )
}

export default Projects