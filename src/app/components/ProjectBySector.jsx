"use client";
import ListItems from "../UI/ListItems";
import styles from "../scss/developer.module.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomPagination from "@/app/components/CustomPagination";

export default async function ProjectBySector({ itemObj, page, currentpage }) {   

   const projects = await getProjectBySector(itemObj.id, page);
   const properties = projects.projectbysector;
    const message = projects.message;
   const totalrecords = projects.totalrecords;
   const perpagerecord = projects.perpagerecord;
   const number_of_page = Math.ceil(totalrecords / perpagerecord);
   //console.log(properties);
   return ( 
      <>
         
         <div className={styles.counts}>
            {Number(totalrecords)} {Number(totalrecords) <= 1 ? "Property" : "Properties"} Found
         </div>          
         {properties.map(function(property) {
            return (
               <ListItems itemObj={property} key={property.propId}/>
            );
         })}
         {message=='success' &&
            <div className="col-12">
               <div className={styles.paginContainer}>
                 <CustomPagination totalrecord={totalrecords} pagename={itemObj.urlval} currentpage={currentpage} numberofpage={number_of_page} />
               </div>
            </div>
         }

      </>
  );
}

async function getProjectBySector(sectorId,page) {
   //console.log(floorcatid);
   const formData = new URLSearchParams();

   formData.append('sector_id', sectorId);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   formData.append('page', page);
   const finalresult = await fetch(process.env.API_URL+'sectors/getprojectbysectorId/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });   
   return await finalresult.json();
}