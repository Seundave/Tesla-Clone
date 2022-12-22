import React from 'react'
import {Link} from 'react-router-dom'
import './ThirdBanner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'

function ThirdBanner() {
  return (
    <div className='thirdbanner'>
        <div className="banner-info">
          <h1>Model S</h1>
          <Link to="#">Schedule a Test Drive</Link>
          <FirstButton/>
        </div>
    </div>
  )
}

export default ThirdBanner