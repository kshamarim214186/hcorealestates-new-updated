"use client";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faWhatsappSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../UI/SocialMedia";
import CustomButton from "../UI/CustomButton";
import { faSquarePhone } from "@fortawesome/pro-solid-svg-icons";
import getLocationType from "../api/getLocationType";

export default function Footer({ resultFooter, commercialData, residentialData }) {
   const currentYear = new Date().getFullYear();
   const whatsappStaticUrl = "https://api.whatsapp.com/send?phone=";
   const whatsappUrl = "https://api.whatsapp.com/send?phone=";
   
   const pageData = resultFooter.pagedata;
   const spotlight = resultFooter.spotlight;
   const featuredPro = resultFooter.featuredproject;
   const builderData = resultFooter.developerdata;
   const otherproject = resultFooter.otherproject;

  return (
    <>
      <footer className="footer">
         <div className="footer__top">
            <div className="container-xl">
               <Accordion>
                  <Accordion.Item eventKey="0">
                     <Accordion.Header as={"div"}>Residential</Accordion.Header>
                        <Accordion.Body>
                           {residentialData.map(function(data,idx) {
                              return (
                                 <Link href={data.url} key={idx}>{data.menuname}</Link>
                              )
                           })}
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                     <Accordion.Header as={"div"}>Commercial</Accordion.Header>
                        <Accordion.Body>
                           {commercialData.map(function(data,idx) {
                              return (
                                 <Link href={data.url} key={idx}>{data.menuname}</Link>
                              )
                           })}
                        </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                     <Accordion.Header as={"div"}>Real Estate Developers</Accordion.Header>
                     <Accordion.Body>
                        {builderData.map(function(data,idx) {
                           return (
                              <Link href={data.url} key={idx}>{data.name}</Link>
                           )
                        })}
                     </Accordion.Body>
                  </Accordion.Item>
                  
               </Accordion>
            </div>
         </div>
         <div className="footer__middle">
            <div className="footer__list">
               <div className="container-xl">
                  <Swiper
                     className="swiperCustomControl"
                     modules={[Navigation]}
                     spaceBetween={16}
                     slidesPerView={1}
                     navigation={{ clickable: true }}
                     breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 3 },
                     }}
                  >
                  <SwiperSlide>
                     <div className="h5">Spot Light Projects</div>                     
                     {spotlight.map(function(data,idx) {
                        return (
                           <Link href={data.url} key={idx}>{data.name}</Link>
                        )
                     })}
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="h5">Featured Projects</div>
                     {featuredPro.map(function(data,idx) {
                        return (
                           <Link href={data.url} key={idx}>{data.name}</Link>
                        )
                     })}
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="h5">Other Projects</div>
                     {otherproject.map(function(data,idx) {
                        return (
                           <Link href={data.url} key={idx}>{data.name}</Link>
                        )
                     })}
                  </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
         <div className="footer__about">
            <div className="container-xl">
               <div className="row">
                  <div className="col-md-7">
                     <div className="h5">About Us</div>
                     <p>{pageData.aboutusshortdesc}</p>
                     <CustomButton buttonName="About More" url="/about-us/" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <div className="h5">Explore</div>
                     <Link href="/">DLF Camellias</Link>
                     <Link href="/">DLF Magnolias</Link>
                     <Link href="/">DLF Queens Court</Link>
                     <Link href="/">DLF One Midtown</Link>
                     <Link href="/">Experion Westerlies</Link>
                     <Link href="/">Adani Samsara Vilasa</Link>
                  </div>
                  <div className="col-md-2 col-sm-6">
                     <div className="h5">Company</div>
                     <Link href="/about-us">About Us</Link>
                     <Link href="/contact-us">Contact Us</Link>
                     <Link href="/disclaimer">Disclaimer</Link>
                     <Link href="/privacy-policy">Privacy Policy</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-xl">
            <div className="footer__bottom">
               <div className="copyright">Copyright © Honey Money Real Estates 2011 -{currentYear} | All Right Reserved</div>
                  <SocialMedia itemObj={pageData} />
               </div>
         </div>
      </footer>
      <div className="desk-whatsapp">
        <Link href={`https://api.whatsapp.com/send?phone=+971507794706&amp;text=Hi%20I'm%20interested%20in%20Dubai%20Housing.`}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
      {/* <button id="goTop"><i className="fas fa-chevron-up"></i></button> 
      <div className="desk_btn">
        <button className="btn btn-warning btn-lg rounded-0" data-bs-toggle="modal" data-bs-target="#footerModal">ENQUIRE NOW</button>
      </div>
      */}
      <div className="aside_btn">
         <Link className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+971507794706&amp;text=Hi%20I'm%20interested%20in%20Dubai Housing.">
            <FontAwesomeIcon icon={faWhatsappSquare} /> <span>Whatsapp Now</span>
         </Link>
         <Link className="phone" href="tel:123456789">
            <FontAwesomeIcon icon={faSquarePhone} /> <span>Call Now</span>
         </Link>
         <div className="d-grid w-100">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#footerModal">
               Enquire Now
            </button>
         </div>
      </div>
    </>
  );
}
