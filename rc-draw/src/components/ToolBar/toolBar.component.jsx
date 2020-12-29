import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaintBrush, faStop, faCircle, faEraser, faMagic, faArrowRight, faArrowLeft, faFile} from '@fortawesome/free-solid-svg-icons'
import ToolState from '../../store/tool.state.js'
import CanvasState from '../../store/canvas.state.js'
import {Brush} from '../../Tools/Brush.js'
import {Rectangle} from '../../Tools/Rectangle.js'
import './assets/toolBar.component.scss'

export const ToolBar = () => {
    const handleBrush = () => ToolState.setTool( new Brush(CanvasState.canvas)),
        handleRectangle = () => ToolState.setTool( new Rectangle(CanvasState.canvas));
        
    return (
        <div className='bar'>
            <button className='tool_bar_btn' onClick={handleBrush}>
                <FontAwesomeIcon icon={faPaintBrush} />
            </button>
            <button className='tool_bar_btn' onClick={handleRectangle}>
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
            <input type='color' className='tool-input' />
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