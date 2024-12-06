import Heroui from "@/components/landing/homeui/Heroui/Heroui";
import Image from "next/image";
import AboutSection from "@/components/landing/homeui/aboutHomeui/AboutSection";
import WhyUsSection from "@/components/landing/homeui/whyUsSection/WhyUsSection";
import ServiceSection from "@/components/landing/homeui/ServiceSection/ServiceSection";
import Blogsection from "@/components/landing/homeui/blogSection/Blogsection";
import Contact from "@/components/landing/contactui/Contact";
export default function Home() {
  return (
    <div className="landing" style={{color:"red" , paddingTop:"6rem" }}>
      <Heroui />
    <AboutSection />
<WhyUsSection />
<ServiceSection />
<Blogsection />
<Contact />
    </div>
  );
}
