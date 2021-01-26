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
            <div className='tools'>
                <h2 className='tool-title'>Tools</h2>
                <img src={npmIcon} className='big-icon npm-icon' />
                <img src={nodeIcon} className='big-icon node-icon' />
                <img src={gitIcon} className='big-icon git-icon' />
                <img src={linuxIcon} className='big-icon linux-icon' />
                <img src={webpackIcon} className='big-icon webpack-icon' />
                <img src={vscIcon} className='big-icon vsc-icon' />
                <img src={psIcon} className='big-icon ps-icon' />
                <img src={figmaIcon} className='big-icon figma-icon' />
                <img src={lofiIcon} className='big-icon lofi-icon' />
                <div className='dpad-x'></div>
                <div className='dpad-y'></div>
                <div className='selectors'></div>
                <div className='buttons'></div>
            </div>
    )
}

export default Tools