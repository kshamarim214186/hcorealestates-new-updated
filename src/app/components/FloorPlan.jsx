"use client";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import styles from "../scss/main.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { faIndianRupeeSign } from "@fortawesome/pro-regular-svg-icons";
import Button from "../UI/Button";

export default async function FloorPlan({ itemObj, propId }) {

   const propFloor = await getProjectFloorPlan(itemObj.id,propId);
   const propertyFloor = propFloor.floorplan;
   const buttontext = 'Request Floor Plan';
   return (
      <> 
         <Swiper className={styles.swiperCustomControl} modules={[Navigation]} spaceBetween={24} slidesPerView={1} navigation={{ clickable: true }}>
            {propertyFloor.map(function(propfloorplan) {
               return (
                  <SwiperSlide className={styles.figure} key={propfloorplan.id}>
                     <Link data-fancybox="FloorPlan" href={propfloorplan.floorimage}>
                       <Image src={propfloorplan.floorimage} className="img-fluid w-100" alt={propfloorplan.floorimagealt} width={300} height={300} />
                     </Link>
                     <figcaption className={styles.figcaption}>
                        <h6>{propfloorplan.floorplanname}</h6>
                        <ul>
                           <li>
                              Sizes <span>{propfloorplan.totalarea}</span>
                           </li>
                           <li>
                           Prices{" "}
                           <span>
                             <FontAwesomeIcon icon={faIndianRupeeSign} /> {propfloorplan.price}
                           </span>
                           </li>
                        </ul>
                        <Button itemObj={buttontext} />
                        { /*<button className={`btn btn-outline-primary btn-sm`} onClick={handleModalShow}>
                           Request Floor Plan
                        </button>*/ }
                     </figcaption>
                  </SwiperSlide>
               )
            })}         
         </Swiper>
      </>
   );
}

async function getProjectFloorPlan(floorcatid,propId) {
   //console.log(floorcatid);
   const formData = new URLSearchParams();

   formData.append('projectid', propId);
   formData.append('catid', floorcatid);
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   const finalresult = await fetch(process.env.API_URL+'properties/getprojectfloorplan/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });   
   return await finalresult.json();
}