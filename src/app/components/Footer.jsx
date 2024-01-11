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
import { useState, useEffect } from "react";

export default function Footer({ resultFooter, commercialData, residentialData }) {
    const currentYear = new Date().getFullYear();
     const whatsappStaticUrl = "https://api.whatsapp.com/send?phone=";
     const whatsappUrl = "https://api.whatsapp.com/send?phone=";
     const [showModal, setShowModal] = useState(false);
     const [deskButton, setDeskButton] = useState(false);
     const [aside, setAside] = useState(false);
     const handleModalShow = () => setShowModal(true);
     const handleModalClose = () => setShowModal(false);

     useEffect(() => {
       const resposiveTrue = window.matchMedia("(min-width: 992px)").matches;
       window.addEventListener("scroll", () => {
         if (resposiveTrue && window.scrollY > 500) {
           setDeskButton(true);
         } else {
           setDeskButton(false);
         }
         if (!resposiveTrue && window.scrollY > 300) {
           setAside(true);
         } else {
           setAside(false);
         }
       });
     }, []);
   
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
                     <CustomButton buttonName="About More" url={pageData.aboutusurl} />
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <div className="h5">Explore</div>
                  </div>
                  <div className="col-md-2 col-sm-6">
                     <div className="h5">Company</div>
                     <Link href={pageData.aboutusurl}>About Us</Link>
                     <Link href={pageData.contactusurl}>Contact Us</Link>
                     <Link href={pageData.disclaimerurl}>Disclaimer</Link>
                     <Link href={pageData.ppolicyurl}>Privacy Policy</Link>
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
      {deskButton && (
        <div className="desk-form">
          <button className="btn btn-primary rounded-0" onClick={handleModalShow}>
            ENQUIRE NOW
          </button>
        </div>
      )}
      {aside && (
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
      )}
    </>
  );
}
