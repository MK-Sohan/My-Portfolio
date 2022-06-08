import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Ecommerce from "./p-image/p1.png";
import groco from "./p-image/p2.png";
import spacedesk from "./p-image/p-3.png";
import helthmentor from "./p-image/prot-4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="idofportfolio" >
      {/* heading */}
      <span className="recent" style={{color: darkMode?'white': '', textAlign:'center'}}>Recent Projects</span>
      <span className="headerportfolio">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
         
          <a href="https://mk-ecommerce-14c56.firebaseapp.com/"> <img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://grocery-project-8bb06.web.app/">
           <img src={groco} alt="" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://assignment-12-c7c15.firebaseapp.com"> <img src={spacedesk} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://assignment-10-b5a0b.firebaseapp.com"><img src={helthmentor} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
