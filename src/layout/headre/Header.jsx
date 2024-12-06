"use client"
import React, { useState } from "react";
import "./header.css"
import Button from "@/components/common/button/Button";
const Navbar = () => {
 

  return (
 <nav className="navbar">
  <div className= "container">
<div className="flext-items">
<div>
  <span>logo </span>
</div>
    <ul>
      <li>الرئيسية</li>
      <li>مسلسلات</li>
      <li>نصوص</li>
      <li>الشركه</li>
      <li>تصريحات صحفية</li>
      <li>اتصل بنا</li>
      <span>icon </span>
    </ul>
    <Button url="/Contact-us" title="تواصل معنا" />
</div>

  </div>

 </nav>
  );
};

export default Navbar;
