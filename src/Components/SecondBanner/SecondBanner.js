import React from 'react'
import {Link} from 'react-router-dom'
import './SecondBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function SecondBanner() {
  return (
    <div className='secondbanner'>
        <div className="banner-info">
          <h1>Model Y</h1>
          <Link to="#">Schedule a Test Drive</Link>
          <FirstButton/>
        </div>
    </div>
  )
}

export default SecondBanner