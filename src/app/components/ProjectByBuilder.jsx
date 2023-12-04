"use client";
import ListItems from "../UI/ListItems";
import styles from "../scss/developer.module.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default async function ProjectByBuilder({ itemObj }) {   

   const projects = await getProjectByBuilder(itemObj.id);
   const properties = projects.projectbybuilder;
   //console.log(properties);
   return ( 
      <>    
         <Swiper
               className={styles.swiperCustomControl}
               modules={[Navigation]}
               spaceBetween={24}
               slidesPerView={1}
               navigation={{ clickable: true }}
               breakpoints={{
                  640: { slidesPerView: 2 },
               }}
                  > 
               {properties.map(function(property) {
                  return (
                        <SwiperSlide key={property.propId}>
                          <ListItems itemObj={property} />
                        </SwiperSlide>

                  );
               })}
         </Swiper>
      </>
  );
}

async function getProjectByBuilder(builderId) {
   //console.log(floorcatid);
   const formData = new URLSearchParams();

   formData.append('builder_id', builderId);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'builders/getprojectbybuilder/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });   
   return await finalresult.json();
}