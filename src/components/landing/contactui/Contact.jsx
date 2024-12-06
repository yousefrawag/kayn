import React from 'react'
import "./contact.css"
import Image from 'next/image';
import image1 from "../../../../public/images/contact.png"

const Contact = () => {
  return (
    <div className='contact-section'>
   
        <div className="container">
            <div className="contact">
            <div className="content">
            <h1>تواصل معنا</h1>
            <p>نحن هنا من اجل خدمتك</p>
        </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <Image src={image1} alt='contact-image'/>
                </div>
                <div className="col-lg-6 col-12">
                    <form action="">
                        <input type="text" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact