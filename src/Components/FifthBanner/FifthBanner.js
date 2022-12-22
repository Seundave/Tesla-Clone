import React from 'react'
import './FifthBanner.css'
import SecondButton from '../../Reusuables/SecondButton/SecondButton'

function FifthBanner() {
  return (
    <div className='fifthbanner'>
      <div className="fifth-banner-info">
        <h1>Solar Panels</h1>
        <p>Lowest Cost Solar Panels in America</p>
        <SecondButton/>
      </div>
    </div>
  )
}

export default FifthBanner