import React from 'react'
import "./service.css"
import image1 from "../../../../../public/images/2979d79b4e5aa2d3dd6b623c4e986746.jpg"
import Image from 'next/image';
import Link from 'next/link';
const ServiceSection = () => {
  return (
    <div className='Serivces-Section'>
        <div className="content-service">
           <h1>اكتشف خدماتنا المميزة</h1>
           <h2>heade style</h2>
        </div>
      <div className="container">
    <div className="row mt-6" style={{marginTop:"5rem"}}>
        <div className="col-lg-4  col-12">
            <div className="card-service">
              <Image src={image1} alt="service-image" />
              <div className="crad-content">
                <h4>تنسيق الرحلات</h4>
                <div className="icon-desc">
                  <span>icon</span>
                  <p>تنظيم الرحلات السياحية الفردية والجماعية.</p>
                </div>
                <div className="icon-desc">
                  <span>icon</span>
                  <p> تقديم خدمات استقبال وتوديع المسافرين في المطارات.</p> 
                </div>
                <Link href="/">اعرف المزيد</Link>
              </div>
            </div>
            
        </div>
        <div className="col-lg-4   col-12">
            <div className="card-service">
              <Image src={image1} alt="service-image" />
              <div className="crad-content">
                <h4>تنسيق الرحلات</h4>
                <div className="icon-desc">
                  <span>icon</span>
                  <p>تنظيم الرحلات السياحية الفردية والجماعية.</p>
                </div>
                <div className="icon-desc">
                  <span>icon</span>
                  <p> تقديم خدمات استقبال وتوديع المسافرين في المطارات.</p> 
                </div>
                <Link href="/">اعرف المزيد</Link>
              </div>
            </div>
            
        </div>
        <div className="col-lg-4   col-12">
            <div className="card-service">
              <Image src={image1} alt="service-image" />
              <div className="crad-content">
                <h4>تنسيق الرحلات</h4>
                <div className="icon-desc">
                  <span>icon</span>
                  <p>تنظيم الرحلات السياحية الفردية والجماعية.</p>
                </div>
                <div className="icon-desc">
                  <span>icon</span>
                  <p> تقديم خدمات استقبال وتوديع المسافرين في المطارات.</p> 
                </div>
                <Link href="/">اعرف المزيد</Link>
              </div>
            </div>
            
        </div>
        <div className="col-lg-4   col-12">
            <div className="card-service">
              <Image src={image1} alt="service-image" />
              <div className="crad-content">
                <h4>تنسيق الرحلات</h4>
                <div className="icon-desc">
                  <span>icon</span>
                  <p>تنظيم الرحلات السياحية الفردية والجماعية.</p>
                </div>
                <div className="icon-desc">
                  <span>icon</span>
                  <p> تقديم خدمات استقبال وتوديع المسافرين في المطارات.</p> 
                </div>
                <Link href="/">اعرف المزيد</Link>
              </div>
            </div>
            
        </div>
    </div>
      </div>
    </div>
  )
}

export default ServiceSection
