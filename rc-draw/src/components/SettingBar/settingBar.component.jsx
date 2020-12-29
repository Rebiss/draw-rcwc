import React from 'react'
import ToolState from '../../store/tool.state.js'
import './assets/settingBar.component.scss'

export const SettingBar = () => {
    const changeLineWidth = ev => ToolState.setLineWidth(ev.target.value),
        changeStrokeColor = ev => ToolState.setStrokeColor(ev.target.value)

    return (
        <div className='bar'>
            <label htmlFor="line-width">Colume Line</label>
            <input onChange={changeLineWidth} className='set-input' id="line-width" type="number" defaultValue={1} min={1} max={50}/>
            <label htmlFor="stroke-color">Color</label>
            <input id="stroke-color" type="color" onChange={changeStrokeColor} />
        </div>
    )
}