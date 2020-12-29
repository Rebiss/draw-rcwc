import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Canvas} from '../components/Canvas/canvas.component'
import {SettingBar} from '../components/SettingBar/settingBar.component'
import {ToolBar} from '../components/ToolBar/toolBar.component'
import './assets/app.scss'

export const App = () => {
  return (
    <div className='app'>
      <Canvas />
      <SettingBar />
      <ToolBar />
    </div>
  )
}