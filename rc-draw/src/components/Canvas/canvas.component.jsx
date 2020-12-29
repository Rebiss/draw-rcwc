import React from 'react'
import './assets/canvas.component.scss'

export const Canvas = () => {

    return (
        <div  className='canvas'>
            <canvas width={600} height={400}> </canvas>
        </div>
    )
}