"use client";
import { useSearchParams } from 'next/navigation';
import { NextSeo } from "next-seo";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../../scss/properties.module.scss";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterList } from "@fortawesome/pro-regular-svg-icons";
import CustomButton from "@/app/UI/CustomButton";
import TextComponent from "@/app/UI/TextComponent";
import Accordion from "react-bootstrap/Accordion";
import SortFilter from "@/app/UI/sort-filter";
import ProjectBySector from "../../../components/ProjectBySector";
import Filter from "../../../components/Filter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CustomPagination from "@/app/components/CustomPagination";
import NotFound from "@/app/components/NotFound";
import getHomeCompleteData from "../../../api/getHomeCompleteData";
import getLocationType from "../../../api/getLocationType";

export default async function Page({ params: { locationurl, sector } }) {

   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);

   const sectorData = getSingleSectorDetails(sector);
   const sectorResult = await sectorData
   const message = sectorResult.message;
   const secData = sectorResult.sectordata;


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
         {message=='success' ?
            <main className={`${styles.container} container-xl`}>
               <title>{secData.seotitle}</title>
               <meta name="description" content={secData.seodesc} />
               <Breadcrumb className={styles.bredcurmb}>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href={secData.url}>{secData.locationame}</Breadcrumb.Item>
                  <Breadcrumb.Item active>Project</Breadcrumb.Item>
               </Breadcrumb>
               <div className="row">
                  <div className="col-lg-4">
                     <div className={`${styles.container__left} sticky-top`}>
                        <div className="d-lg-none d-flex justify-content-between">
                           <button className="btn btn-outline-primary btn-sm d-lg-none" onClick={handleShow}>
                              Filter <FontAwesomeIcon icon={faFilterList} />
                           </button>
                           <div className="">
                              <SortFilter />
                           </div>
                        </div>
                        <Filter />
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className={styles.container__right}>
                       <div className={styles.listInfo}>
                         <div className="">
                           <div className="h1">{secData.locationame} Location</div>
                           
                         </div>
                         <div className={styles.sort}>
                           <SortFilter />
                         </div>
                       </div>
                       <div className={styles.allList}>
                           <ProjectBySector itemObj={secData} page={page} currentpage={currentpage} />
                       </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className={styles.overview}>
                        <h1>{secData.h1}</h1>
                        <p>{secData.shortdesc}</p>
                        <Accordion defaultActiveKey="0">
                           <Accordion.Item eventKey="1">
                              <Accordion.Body><TextComponent itemObj={secData.fulldesc} /></Accordion.Body>
                              <Accordion.Header as={"div"}></Accordion.Header>
                           </Accordion.Item>
                        </Accordion>
                     </div>
                  </div>
               </div>
            </main>
            : <NotFound />
         }
         <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}

async function getSingleSectorDetails(sector) {
   //const  apiUrl = 'https://www.api.hcorealestates.org/';
   const formData = new URLSearchParams();

   formData.append('sectorurl', sector);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'sectors/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}