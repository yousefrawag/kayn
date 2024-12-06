import React from 'react'
import HeroServices from '@/components/landing/serviceui/heroService/HeroServices'
import "./.serv.css"
import image1 from  "../../../public/images/serv.png"
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/components/landing/contactui/Contact'
const AllSeries = () => {
  return (
    <div>
      <HeroServices />
 
        <div className="serv">
          <div className='container'>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="content">
              <h1>حجوزات السفر</h1>
              <p>
              نقدم حجوزات طيران دولية ومحلية بأسعار تنافسية، بالإضافة إلى حجز أفضل الفنادق في جميع أنحاء العالم لضمان راحتك
              </p>
              <Link href="/">طلب الخدمة</Link>
              </div>
          
            </div>
            <div className="col-lg-4 col-12">
              <div className="image-section">
              <Image src={image1} alt="serv1" />
              </div>
           
            </div>
       
        </div>
        </div>
      </div>
      <div className="serv1">
          <div className='container'>
          <div className="row gap-20">
          <div className="col-lg-4 col-12">
              <div className="image-section">
              <Image src={image1} alt="serv1" />
              </div>
           
            </div>
            <div className="col-lg-8 col-12">
              <div className="content">
              <h1>حجوزات السفر</h1>
              <p>
              نقدم حجوزات طيران دولية ومحلية بأسعار تنافسية، بالإضافة إلى حجز أفضل الفنادق في جميع أنحاء العالم لضمان راحتك
              </p>
              <Link href="/">طلب الخدمة</Link>
              </div>
          
            </div>
         
       
        </div>
        </div>
      </div>
      <div className="serv">
          <div className='container'>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="content">
              <h1>حجوزات السفر</h1>
              <p>
              نقدم حجوزات طيران دولية ومحلية بأسعار تنافسية، بالإضافة إلى حجز أفضل الفنادق في جميع أنحاء العالم لضمان راحتك
              </p>
              <Link href="/">طلب الخدمة</Link>
              </div>
          
            </div>
            <div className="col-lg-4 col-12">
              <div className="image-section">
              <Image src={image1} alt="serv1" />
              </div>
           
            </div>
       
        </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default AllSeries
