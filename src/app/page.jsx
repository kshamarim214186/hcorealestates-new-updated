"use client";
import Header from "./components/Header";
import HomePage from "./AllPages/HomePage";
import Footer from "./components/Footer";
import getHomeCompleteData from "./api/getHomeCompleteData";
import getLocationType from "./api/getLocationType";

export default async function Home() {
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
            <HomePage result={result} />
         <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}