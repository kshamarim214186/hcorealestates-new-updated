"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../scss/others.module.scss"
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";

export default async function Disclaimer() {
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
      <div className="container-xl">
        <div className={styles.disclaimer}>
          <h1>Privacy Policy</h1>
          <p>Honey Money Associates LTD is committed to respecting clients or website visitors privacy and to complying with applicable data protection and privacy laws. Clients can visit this site <Link href="https://www.hcorealestates.com/">https://www.hcorealestates.com/</Link> without disclosing any personal information.</p>

          <p>Anonymous information collected includes your IP address, browser type, domain name and access time. This information is used for our own research purposes. We do not link IP addresses to any personal information. IP addresses may be used to assist in deterring and/or preventing abusive or criminal activity on the website.</p>

          <p>Personally identifiable Information collected by the forms will be used solely to respond to your enquiries and/or service requests.</p>

          <p>While care is taken to provide secure transmission of information from your computer to our servers, unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure.</p>
        </div>
      </div>
    </main>
    <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
  </>
}