import React, { useState, useEffect } from 'react'
import figmaIcon from '../../images/figma.png'
import gitIcon from '../../images/git.png'
import linuxIcon from '../../images/linux.png'
import lofiIcon from '../../images/lofi.png'
import nodeIcon from '../../images/node.png'
import npmIcon from '../../images/npm.png'
import psIcon from '../../images/ps.png'
import vscIcon from '../../images/vsc.png'
import webpackIcon from '../../images/webpack.png'


const Tools = () => {

    return (
        <div className='tool-section'>
        <h2>My Tools</h2>
            <div className='tools'>
                <div className='npm'><div className='npm-icon'></div><img src={npmIcon} className='big-icon' /></div>  
                <div className='node'><div className='node-icon'></div><img src={nodeIcon} className='big-icon' /></div>  
                <div className='git'><div className='git-icon'></div><img src={gitIcon} className='big-icon' /></div>
                <div className='linux'><div className='linux-icon'></div><img src={linuxIcon} className='big-icon' /></div>
                <div className='webpack'><div className='webpack-icon'></div> <img src={webpackIcon} className='big-icon' /></div> 
                <div className='vscode'><div className='vscode-icon'></div> <img src={vscIcon} className='big-icon' /></div> 
                <div className='photoshop'><div className='photoshop-icon'></div> <img src={psIcon} className='big-icon' /></div> 
                <div className='figma'><div className='figma-icon'></div> <img src={figmaIcon} className='big-icon' /></div> 
                <div className='lofi'><div className='lofi-icon'></div> <img src={lofiIcon} className='big-icon' /></div> 
            </div>
            </div>
    )
}

export default Tools