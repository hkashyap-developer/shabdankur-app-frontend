import React from 'react'

import './Settings.css'
import BgUpload from './BgUpload/BgUpload.jsx'
import PersonImg from './PersonImg/PersonImg.jsx'
import Name from './Name/Name.jsx'
import GetImage from './GetImage/GetImage.jsx'


const Settings = () => {




  return (
    <div className="stngsWrapper">

        <div className="imgUpldWrap">
        <BgUpload />

        <PersonImg />
        </div>
        
        <Name />

        <GetImage />

    </div>
  )
}

export default Settings
