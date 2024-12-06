"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./blogstyle.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import image1 from "../../../../../public/images/travel-adventure-with-baggage (1).png"
import image2 from "../../../../../public/images/blog2.png"
import image3 from "../../../../../public/images/blog3.png"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
const Blogsection = () => {
  return (
    <div className="blog-swiper">
      <div className="content">
        <h2>Blog Section</h2>
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
  );
};

export default Blogsection;
