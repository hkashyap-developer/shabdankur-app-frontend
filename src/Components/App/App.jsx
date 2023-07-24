import React from 'react'
import '../Global/Global.css'
import './App.css'
import './App.js'
import Templates from './Templates/Templates.jsx'
import Settings from './Settings/Settings.jsx'
import Canvas from './Canvas/Canvas.jsx'
import {handleScreenshot, convertBase64ToFile} from './Canvas/Canvas.jsx' 
import App2 from '../App2.jsx'


const App = () => {
  return (
    <div className=" ">
        <div className="pstMkr-otrBx">
          <div className="pstMkr-r0">
            <Templates />
          </div>
          <div className="pstMkr-r1 container">

        
            <div className="pstMkr-r1col pstMkr-r1-stngs">
             <Settings />
            </div>                
            <div className="pstMkr-r1col pstMkr-r1-canvs">
              <Canvas />
            </div>            


                       
          </div>    
        </div>
    </div>
  )
}

export default App
