import { Suspense } from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BuilderListing from "../AllPages/BuilderListing";
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";


export default async function AllDevelopers() {
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
         <Suspense>
            <BuilderListing />
         </Suspense>         
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}