"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../scss/others.module.scss"
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";
import getOtherPagesDetails from "../api/getOtherPagesDetails";

export default async function Disclaimer() {
    const privacyprops = getOtherPagesDetails('privacy-policy');
    const privacyresult = await privacyprops;
    const otherPageData = await privacyresult.otherpagedata;

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
          {otherPageData.name && <h1>{otherPageData.name}</h1>}
          {otherPageData.policyp1 && <p>{otherPageData.policyp1}</p>}
          {otherPageData.policyp2 && <p>{otherPageData.policyp2}</p>}
          {otherPageData.policyp3 && <p>{otherPageData.policyp3}</p>}
          {otherPageData.policyp3 && <p>{otherPageData.policyp4}</p>}
        </div>
      </div>
    </main>
    <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
  </>
}