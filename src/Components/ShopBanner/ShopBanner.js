import React from 'react'
import ShopNavbar from '../ShopNavbar/ShopNavbar'
import './ShopBanner.css'

function Banner() {
  return (
    <div className='Shopbanner'>
       <>
       <ShopNavbar/>
       </>
       <div className="shop-banner-info">
            <h1>Wall Connector</h1>
            <p>The most convienient way to charge at home</p>
            <button className='shop-now'>Shop Now</button>
       </div>
    </div>
  )
}

export default Banner