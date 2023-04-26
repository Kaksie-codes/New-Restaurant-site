import React from 'react'
import { images } from '../../constants'
import './Header.css'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div id='home' className='app__header app__wrapper section__padding'>
      <div className="app__wrapper_info">
        <SubHeading title='Chase the new Flavour'/>
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{marginBlock:'2rem'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Minus aliquam dignissimos consectetur rerum possimus accusamus magnam voluptatem aperiam repudiandae qui!
        </p>
        <button className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="hero image" />
      </div>
    </div>
  )
}

export default Header