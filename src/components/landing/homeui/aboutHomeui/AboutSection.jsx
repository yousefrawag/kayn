import React from 'react'
import "./aboutsection.css"
import Image from 'next/image'
import image1 from "../../../../../public/images/Group.png"
const AboutSection = () => {
  return (
    <div className='about-section'>
    <div className="container">
        <div className="row ">
     <div className="col-8">

            <div className='about-content-section'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel ducimus eaque unde, perferendis, veritatis necessitatibus maiores eveniet iste velit, porro iure possimus a ratione sapiente explicabo tempore. A, veritatis.
            </div>
     </div>
        <div className="col-4">

        <div className='image-section'>
            <Image src={image1} alt="about-image" />
        </div>
        </div>
       
     </div>
        
  

    </div>
     
    </div>
  )
}

export default AboutSection
