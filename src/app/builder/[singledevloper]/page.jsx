import { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from "../../scss/develoer-single.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DeveloperSingle from "../../AllPages/DeveloperSingle";
import getHomeCompleteData from "../../api/getHomeCompleteData";
import getLocationType from "../../api/getLocationType";

export default async function SingleDeveloper({ params: { singledevloper } }) {

   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;

   const developer = getSingleBuilderDetails(singledevloper);
   const builderResult = await developer
   const message = builderResult.message;
   const builderData = builderResult.builder;

   return (
      <>
      <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
         { message=='success' &&
            <main className={styles.main}>
               <title>{builderData.seotitle}</title>
               <meta name="description" content={builderData.seodesc} />
               <section className={styles.bg}>
                  <Image src="/images/background-noimage-art.svg" className="w-100 img-fluid" width={500} height={250} alt="backgroun image" />
               </section>
               
               <Suspense fallback={<div>Loading...</div>}>
                  <DeveloperSingle itemObj={builderResult} />
               </Suspense> 
               
            </main>
         }
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}
async function getSingleBuilderDetails(singledevloper) {
   const formData = new URLSearchParams();

   formData.append('devurl', singledevloper);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'builders/getsingledeveloper/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}