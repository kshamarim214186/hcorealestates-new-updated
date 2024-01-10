"use client";
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import { NextSeo } from "next-seo";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../scss/properties.module.scss";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterList } from "@fortawesome/pro-regular-svg-icons";
import CustomButton from "@/app/UI/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import SortFilter from "@/app/UI/sort-filter";
import ProjectByStatus from "../../components/ProjectByStatus";
import Filter from "../../components/Filter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import NotFound from "@/app/components/NotFound";
import getHomeCompleteData from "../../api/getHomeCompleteData";
import getLocationType from "../../api/getLocationType";


export default async function PropertyStatus({ params: { statusurl } }) {

   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";

   const statusData = getSingleStatusDetails(statusurl);
   const statusResult = await statusData
   const message = statusResult.message;
   const statsData = statusResult.statusdata;
   //console.log(locData)

   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;

   return (
      <>
      <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
      <Suspense fallback={<div>Loading...</div>}>
      {message=='success' ?
         <main className={`${styles.container} container-xl`}>
            <title>{statsData.seotitle}</title>
            <meta name="description" content={statsData.seodesc} />
            <Breadcrumb className={styles.bredcurmb}>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href={statsData.url}>{statsData.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="row">
               <div className="col-lg-4">
                  <div className={`${styles.container__left} sticky-top`}>                     
                     <Filter />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className={styles.container__right}>
                    <div className={styles.listInfo}>
                      <div className="">
                        <div className="h1">{statsData.name}</div>                        
                      </div>
                      <div className={styles.sort}>
                        <SortFilter />
                      </div>
                    </div>
                    <div className={styles.allList}>
                        <ProjectByStatus itemObj={statsData} page={page} currentpage={currentpage} />
                    </div>
                  </div>
               </div>               
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className={styles.overview}>
                     <h1>{statsData.name}</h1>
                     <p>{statsData.shortdesc}</p>
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                           <Accordion.Body dangerouslySetInnerHTML={{ __html: statsData.fulldesc }}></Accordion.Body>
                           <Accordion.Header as={"div"}></Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                  </div>
               </div>
            </div>
         </main>
         : <NotFound />
      }
      </Suspense>
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}

async function getSingleStatusDetails(statusurl) {
   //const  apiUrl = 'https://www.api.hcorealestates.org/';
   const formData = new URLSearchParams();

   formData.append('statusurl', statusurl);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'property-status/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}