import React from 'react'
import {Link} from 'react-router-dom'
import './FourthBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function FourthBanner() {
  return (
    <div className='fourthbanner'>
        <div className="banner-info">
          <h1>Model X</h1>
          <Link to="#">Schedule a Test Drive</Link>
          <FirstButton/>
        </div>
    </div>
  )
}

export default FourthBanner