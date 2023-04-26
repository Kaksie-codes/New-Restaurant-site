import React from 'react'
import './Chef.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="chef's word"/>
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote"/>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              amet consectetur adipisicing elit. Atque, consequuntu.                         
            </p>           
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque, consequuntur.amet consectetur adipisicing elit. Atque, consequuntu
          </p>
          <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chef