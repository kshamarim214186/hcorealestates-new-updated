"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../scss/others.module.scss";
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";
import getOtherPagesDetails from "../api/getOtherPagesDetails";

export default async function Disclaimer() {
    const disclprops = getOtherPagesDetails('disclaimer');
    const disclresult = await disclprops;
    const otherPageData = await disclresult.otherpagedata;

   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;
  return <>
    <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
    <main className={styles.wrapper}>
      <title>{otherPageData.seotitle}</title>
      <meta name="description" content={otherPageData.seodesc} />
      <div className="container-xl">
        <div className={styles.disclaimer}>
          {otherPageData.name && <h1>Disclaimer</h1>}
          {otherPageData.disclaimerp1 && <p>{otherPageData.disclaimerp1}</p>}
          {otherPageData.disclaimerp2 && <p>{otherPageData.disclaimerp2}</p>}
          {otherPageData.disclaimerp3 && <p>{otherPageData.disclaimerp3}</p>}
          {otherPageData.disclaimerp4 && <p>{otherPageData.disclaimerp4}</p>}
          {otherPageData.disclaimerp5 && <p>{otherPageData.disclaimerp5}</p>}
          {otherPageData.disclaimerp6 && <p>{otherPageData.disclaimerp6}</p>}
        </div>
      </div>
    </main>
    <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
  </>
}