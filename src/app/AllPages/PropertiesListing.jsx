"use client";
import { useSearchParams } from 'next/navigation'
import { NextSeo } from "next-seo";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../scss/properties.module.scss";
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
import Filter from "../components/Filter";
import ListItems from "../UI/ListItems";
import getPropertiesList from "@/app/api/getPropertiesList";
import CustomPagination from "@/app/components/CustomPagination";


export default async function PropertiesListing({ developers }) {

   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";
   const sort = searchParams.get('sort') ? searchParams.get('sort') : "";

   const PropertyData = getPropertiesList(page,sort);
   const propResult = await PropertyData
   const message = propResult.message;
   const properties = propResult.propertydata;
   const totalrecords = propResult.totalrecords;
   const perpagerecord = propResult.perpagerecord;
   const number_of_page = Math.ceil(totalrecords / perpagerecord); 
   const pageData = propResult.pagedata;
   //console.log(locData)

   return (
      <>
      { message=='success' &&
         <main className={`${styles.container} container-xl`}>
            <title>{pageData.proplistseotitle}</title>
            <meta name="description" content={pageData.proplistseodesc} />
            <Breadcrumb className={styles.bredcurmb}>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Properties</Breadcrumb.Item>
            </Breadcrumb>
            <div className="row">
               <div className="col-lg-4">
                  <div className={`${styles.container__left} sticky-top`}>                     
                     <Filter developer={developers} />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className={styles.container__right}>
                    <div className={styles.listInfo}>
                      <div className="">
                        <div className="h1">{pageData.proplisth2}</div>                        
                      </div>
                      <div className={styles.sort}>
                        <SortFilter sortObj={sort} />
                      </div>
                    </div>
                    <div className={styles.allList}>
                        <div className={styles.counts}>
                           {Number(totalrecords)} {Number(totalrecords) <= 1 ? "Property" : "Properties"} Found
                        </div>          
                        {properties.map(function(property) {
                           return (
                              <ListItems itemObj={property} key={property.id}/>
                           );
                        })}
                        <div className="col-12">
                           <div className={styles.paginContainer}>
                              <CustomPagination totalrecord={totalrecords} pagename="properties" currentpage={currentpage} numberofpage={number_of_page} />
                           </div>
                        </div>
                    </div>
                  </div>
               </div>               
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className={styles.overview}>
                     <h1>{pageData.proplisth1}</h1>
                     <p>{pageData.proplistshortdesc}</p>
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                           <Accordion.Body>{pageData.proplistfulldesc}</Accordion.Body>
                           <Accordion.Header as={"div"}></Accordion.Header>
                        </Accordion.Item>
                     </Accordion>
                  </div>
               </div>
            </div>
         </main>
      }
      </>
   );
}