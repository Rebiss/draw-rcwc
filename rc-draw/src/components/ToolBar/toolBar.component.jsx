import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaintBrush, faStop, faCircle, faEraser, faMagic, faArrowRight, faArrowLeft, faFile} from '@fortawesome/free-solid-svg-icons'
import './assets/toolBar.component.scss'

export const ToolBar = () => {
    return (
        <div className='bar'>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faPaintBrush} />
            </button>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faStop} />
            </button>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faCircle} />
            </button>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faEraser} />
            </button>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faMagic} />
            </button>
            <button className='tool_bar_btn left'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className='tool_bar_btn'>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className='tool_bar_btn righ'>
                <FontAwesomeIcon icon={faFile} />
            </button>
        </div>
    )
}