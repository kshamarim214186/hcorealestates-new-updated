import { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PropertiesListingByCondition from "../../../AllPages/PropertiesListingByCondition";
import getHomeCompleteData from "../../../api/getHomeCompleteData";
import getLocationType from "../../../api/getLocationType";

export default async function Page({ params: { locationurl, sector } }) {
   const sectorData = getSingleSectorDetails(locationurl, sector);
   const sectorResult = await sectorData
   const message = sectorResult.message;
   const finalresult = sectorResult.sectordata;


   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;
   const columnname = 'sector_id';
   return (
      <>
      <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
      <Suspense fallback={<div>Loading...</div>}>
         <PropertiesListingByCondition itemObj={finalresult} message={message} column={columnname} />
      </Suspense>
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}

async function getSingleSectorDetails(locationurl,sector) {
   //const  apiUrl = 'https://www.api.hcorealestates.org/';
   const formData = new URLSearchParams();
   formData.append('locationurl', locationurl);
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