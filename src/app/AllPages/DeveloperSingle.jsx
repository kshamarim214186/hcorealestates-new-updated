"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../scss/develoer-single.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CustomButton from "@/app/UI/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import AllDevelopers from "@/app/UI/all-developers";
import ProjectByBuilder from "../components/ProjectByBuilder";

export default function DeveloperSingle({ itemObj }) {
   const message = itemObj.message;
   const builderData = itemObj.builder;
   const developers = itemObj.allbuilders;

   return (
      <>      
         <div className="container-xl">
            <div className={styles.builder}>
               <Link href={builderData.url} className={styles.logo}>
                  <Image src={builderData.devphoto} alt={builderData.devName} className="img-fluid d-block" width={100} height={45} />
               </Link>
               <h4 className="mt-3">{builderData.devName}</h4>
               <div dangerouslySetInnerHTML={{ __html: builderData.smalldesc }} />
               <Accordion defaultActiveKey="0">
                 <Accordion.Item eventKey="1">
                   <Accordion.Body>
                     <div dangerouslySetInnerHTML={{ __html: builderData.description }} />
                   </Accordion.Body>
                   <Accordion.Header as={"div"}></Accordion.Header>
                 </Accordion.Item>
               </Accordion>
            </div>

            <div className={styles.allList}>
               <div className={styles.category}>
                 <h2>{builderData.h2}</h2>
                 <ProjectByBuilder itemObj={builderData} />
               </div>
            </div>
         </div>

         <section className={styles.developers}>
            <div className="container-xl">
               <h2><small>Featured </small>Developers</h2>
               <p>Handpicked collections of flats in Delhi</p>
               <Swiper
                 className={styles.swiperCustomControl}
                 modules={[Navigation]}
                 spaceBetween={24}
                 slidesPerView={1}
                 navigation={{ clickable: true }}
                 breakpoints={{
                   768: { slidesPerView: 3 },
                   992: { slidesPerView: 7 },
                 }}
               >
                  {developers.map((item) => (
                     <SwiperSlide key={item.id}>
                        <AllDevelopers developerObj={item} />
                     </SwiperSlide>
                 ))}
               </Swiper>
               <CustomButton url={builderData.builderurl} buttonName="Know More" />
            </div>
         </section>
      </>
   );
}