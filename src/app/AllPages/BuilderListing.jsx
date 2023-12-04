"use client";
import { useSearchParams } from 'next/navigation'; 
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../scss/developer.module.scss";
import { Navigation } from "swiper";
import CustomButton from "@/app/UI/CustomButton";
import ProjectByBuilder from "../components/ProjectByBuilder";
import CustomPagination from "@/app/components/CustomPagination";
import getDeveloperList from "../api/getDeveloperList";

export default async function BuilderListing() {

   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "1";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";

   const props = getDeveloperList(page);
   const result = await props;
   const pageData = result.pagedata;
   const builderData = result.builderdata;
   const totalrecords = result.totalrecords;
   const perpagerecord = result.perpagerecord;
   const number_of_page = Math.ceil(totalrecords / perpagerecord);   

   //console.log(page);
   return (
      <>
      <main className={styles.main}>      
      <title>{pageData.builderseotitle}</title>
      <meta name="description" content={pageData.builderseodesc} />
      {builderData.length > 0 &&
         <div className="container-xl">
            <Breadcrumb className={styles.bredcrumb}>
               <Breadcrumb.Item href={pageData.homeurl}>Home</Breadcrumb.Item>
               <Breadcrumb.Item active>Developers</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{pageData.builderseotitle}</h1>
            <div className="row">
               <div className="col-12">
                  {builderData.map((dev) => (
                    <div key={dev.id} className={styles.builder}>
                      <div className={styles.builder__info}>
                        <Link href={dev.url} className={styles.logo}>
                          <Image src={dev.devphoto} alt={dev.name} className="img-fluid d-block" width={100} height={45} />
                        </Link>
                        <h4 className="mt-3">{dev.name}</h4>
                        { /*<div className="text-yellow-900 font-medium">{5} Properties</div>*/ }
                        <div dangerouslySetInnerHTML={{ __html: dev.description }} />
                        <CustomButton buttonName="Read More" url={dev.url} />
                      </div>
                      <div className={styles.builder__projects}>                  
                           <ProjectByBuilder itemObj={dev} />
                      </div>
                    </div>
                  ))}
               </div>
               <div className="col-12">
                  <div className={styles.paginationcontent}>
                     <CustomPagination totalrecord={totalrecords} pagename="builder" currentpage={currentpage} numberofpage={number_of_page} />
                  </div>
               </div>
            </div>
         </div>
      }
    </main>
    </>
  );
}