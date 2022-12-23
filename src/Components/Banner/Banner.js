import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Banner.css'
import FirstButton from '../../Reusuables/FirstButton/Button'
import {Link} from 'react-router-dom'


function Banner() {

  return (
    <div className='Banner'>
       <Navbar/>
       <div className="banner-info">
            <h1>Model 3</h1>
            <Link to="#">Schedule a Test Drive</Link>
            <FirstButton/>
       </div>
    </div>
  )
}

export default Banner