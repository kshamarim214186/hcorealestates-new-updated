"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../scss/others.module.scss";
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
          <h1>Disclaimer</h1>
          <p>The information contained in this website is for general information purposes only. All efforts have been made to provide the most comprehensive and accurate information on this site. The information and materials have been made available keeping our clients interest in mind. The information is provided by Honey Money Associates Limited and while our endeavour is to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. The information and materials are however, subject to change without prior notice.</p>

          <p>In no event <strong>Honey Money Associates Limited</strong> will be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this site or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, in connection with the use of this website. </p>

          <p>Every effort is made to keep the website up and running smoothly. However, Honey Money Associates Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. </p>


          <p>Any use of this website would expressly mean that you irrevocably accept all the terms of this user agreement. You understand that the decision to accept or to not accept, as the case may be, the terms and conditions contained herein is totally guided by your own free will. In the event, you are not comfortable in accepting the terms and conditions as contained herein, in such case, you are advised to not use or access this website in any manner. </p>

          <p>Reproduction, redistribution or transmission of the information on this website is strictly prohibited and would constitute a regulatory breach .The Content provided on the Website is not professional advice or any kind of services and should not be relied upon as such. <em><strong>Honey Money Associates Limited</strong></em> assumes no responsibility towards investments done based on the information given in the website and any such investments / trades are subject to investment / commercial risks / tax implications for which Honey Money Associates Limited shall not be responsible. It is assumed that you will make independent judgment/assessment of information gathered by you with independent / personal inquiries and arrive at decisions that meet your requirements. </p>

          <p>Honey Money Associates Limited reserves the right, in its sole discretion and with or without notice to you, to suspend or to edit, alter and or remove any content, in whole or in part, that may be available on the Website. Any of the aforesaid variations shall override the contents previously appearing on the Website. </p>
        </div>
      </div>
    </main>
    <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
  </>
}