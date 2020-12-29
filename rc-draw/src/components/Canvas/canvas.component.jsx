import React, {useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'
import CanvasState from '../../store/canvas.state.js'
import ToolState from '../../store/tool.state.js'
import {Brush} from '../../Tools/Brush.js'
import './assets/canvas.component.scss'

export const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current)
        ToolState.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div  className='canvas'>
            <canvas ref={canvasRef} width={600} height={400}> </canvas>
        </div>
    )
})