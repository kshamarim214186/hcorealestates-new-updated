"use client";
import Image from "next/image";
import styles from "../scss/about.module.scss";
import { Breadcrumb, Accordion } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutFaq from "../components/AboutFaq";
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";
import getOtherPagesDetails from "../api/getOtherPagesDetails";
import getTeamDetails from "../api/getTeamDetails";

export default async function AboutUs() {
    const aboutprops = getOtherPagesDetails('about-us');
    const aboutresult = await aboutprops;
    const otherPageData = await aboutresult.otherpagedata;


   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;


   const teamprops = getTeamDetails();
   const teamresult = await teamprops;
   const conndata = await teamresult.connectiondata;
   const fqdata = await teamresult.faqdata;
   const awdata = await teamresult.awarddata;
   const tdata = await teamresult.teamdata;
   return (
    <>
      <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
      <main>
        <title>{otherPageData.seotitle}</title>
        <meta name="description" content={otherPageData.seodesc} />
            <section className={styles.about__banner}>
               {otherPageData.banner && <Image src={otherPageData.banner} className="img-fluid w-100" alt="Dynamic required" width={1500} height={550} />}
            </section>
            <section className={styles.aboutSection}>
               <div className="container-xl">
                  <Breadcrumb className={styles.bredcrumb}>
                    <Breadcrumb.Item href={otherPageData.homeurl}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className={styles.aboutLeft}>
                        <div className={styles.aboutLeft__heading}>
                          <small>About</small>
                          {otherPageData.name &&<h1>{otherPageData.name}</h1>}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className={styles.aboutRight}>
                      {otherPageData.aboutp1 && <p>{otherPageData.aboutp1}</p>}
                      {otherPageData.aboutp2 && <p>{otherPageData.aboutp2}</p>}
                      {otherPageData.aboutp3 && <p>{otherPageData.aboutp3}</p>}
                      </div>
                    </div>
                  </div>
                  {conndata.length > 0 && 
                     <div className="row">
                        <div className="col-12">
                           <div className={styles.others}>                              
                                 {conndata.map(function(keydata, index) {
                                    return (
                                       <div className={styles.othersList}>
                                          <div className={styles.count}>
                                             <div className={styles.h1}>{keydata.number}</div>
                                             <small>{keydata.name}</small>
                                          </div>
                                          <div className="icons">
                                             <Image src={keydata.image} alt={keydata.name} width={50} height={30} />
                                          </div>
                                         <div className="others-text">{keydata.description}</div>
                                       </div>
                                    )
                                 })}                               
                           </div>
                        </div>
                     </div>
                  }
               </div>
            </section>
            <section className={styles.teamContent}>
               <div className="container-xl">
                  {otherPageData.h2 &&<div className="h2">{otherPageData.h2}</div>}
                  <div className="arrow">
                     <Image width={93} height={72} src="/images/about-us/arrow.png" alt="Awards" />
                  </div>
                  {tdata.length > 0 && 
                     <div className="row">                        
                        {tdata.map(function(tdata, index) {
                           return (
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                 <div className={styles.teams}>
                                    <figure>
                                       <div className={styles.imgBg}>
                                          <Image width={210} height={210} src={tdata.image} className="img-fluid" alt={tdata.name} />
                                       </div>
                                       <figcaption>
                                          <h4>{tdata.name}</h4>
                                          <div className="sales">{tdata.description}</div>
                                       </figcaption>
                                    </figure>
                                 </div>
                              </div>
                           )
                        })} 
                     </div>
                  }
               </div>
            </section>

            <section className={styles.award}>
               <div className={styles.leaves}>
                  <Image width={83} height={173} src="/images/about-us/tree-leave.svg" alt="Tree Leaves" />
               </div>
               <div className="container-xl">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                    {otherPageData.h3 &&<h2>{otherPageData.h3}</h2>}
                    {otherPageData.h3desc &&<p>{otherPageData.h3desc}</p>}
                    </div>
                  </div>
                  {awdata.length > 0 && 
                     <div className="row">
                        {awdata.map(function(awdata, index) {
                           return (
                             <div className="col-md-3 col-sm-6">
                               <figure className={styles.awards}>
                                 <Image className="img-fluid" width={94} height={163} src={awdata.image} alt={awdata.name} />
                                 <figcaption>{awdata.name}</figcaption>
                               </figure>
                             </div>                       
                           )
                        })} 
                     </div>
                  }
               </div>
            </section>

            <section className={styles.process}>
               {otherPageData.h4 &&<h2>{otherPageData.h4}</h2>}
               <Image width={1600} height={611} src={otherPageData.teamimage} alt="Overview" className="img-fluid" />
               <div className="container-xl">
                  <div className="row">
                     <div className="col-md-4">
                        <div className={styles.process__sub}>
                           {otherPageData.teamheading &&<div className="h3">{otherPageData.teamheading}</div>}
                           {otherPageData.teamdesc &&<p>{otherPageData.teamdesc}</p>}
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className={styles.process__sub}>
                           {otherPageData.mottoheading &&<div className="h3">{otherPageData.mottoheading}</div>}
                           {otherPageData.mottodesc &&<p>{otherPageData.mottodesc}</p>}
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className={styles.process__sub}>
                           {otherPageData.visionheading &&<div className="h3">{otherPageData.visionheading}</div>}
                           {otherPageData.visiondesc &&<p>{otherPageData.visiondesc}</p>}
                        </div>
                     </div>
                  </div>
               </div>
           </section>

         <AboutFaq fqdata={fqdata} />
      </main>
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
    </>
  );
}