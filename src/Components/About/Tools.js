import React from 'react'
import figmaIcon from '../../images/figma.png'
import gitIcon from '../../images/git.png'
import linuxIcon from '../../images/linux.png'
import lofiIcon from '../../images/lofi.png'
import nodeIcon from '../../images/node.png'
import npmIcon from '../../images/npm.png'
import psIcon from '../../images/ps.png'
import vscIcon from '../../images/vsc.png'
import webpackIcon from '../../images/webpack.png'
import { Image } from 'react-bootstrap'


const Tools = () => {

    return (
            <div className='tools'>
                <h2 className='tool-title'>Tools</h2>
                <Image fluid src={npmIcon} className='big-icon npm-icon' />
                <Image fluid src={webpackIcon} className='big-icon webpack-icon' />
                <Image fluid src={nodeIcon} className='big-icon node-icon' />
                <Image fluid src={psIcon} className='big-icon ps-icon' />
                <Image fluid src={gitIcon} className='big-icon git-icon' />
                <Image fluid src={lofiIcon} className='big-icon lofi-icon' />
                <Image fluid src={linuxIcon} className='big-icon linux-icon' />
                <Image fluid src={vscIcon} className='big-icon vsc-icon' />
                <Image fluid src={figmaIcon} className='big-icon figma-icon' />
                <div className='dpad-x'></div>
                <div className='dpad-y'></div>
                <div className='selectors'></div>
                <div className='buttons'></div>
            </div>
    )
}

export default Tools