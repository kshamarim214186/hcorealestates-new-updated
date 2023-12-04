"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../scss/contact.module.scss";
import { Breadcrumb, Tab, Nav } from "react-bootstrap";
import SocialMedia from "../UI/SocialMedia";
import MainForm from "../components/MainForm";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getOtherPagesDetails from "../api/getOtherPagesDetails";
import getHomeCompleteData from "../api/getHomeCompleteData";
import getLocationType from "../api/getLocationType";

export default async function ContactUs() {
   const props = getOtherPagesDetails('contact-us');
   const result = await props;
   const otherPageData = await result.otherpagedata;


   const propsHome = getHomeCompleteData();
   const resultHome = await propsHome;
   const pageData = resultHome.pagedata;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;

   return ( 
      <>
         <Header resultHeader={resultHome} commercialData={commercialData} residentialData={residentialData} />
         <main>
            <title>{otherPageData.seotitle}</title>
            <meta name="description" content={otherPageData.seodesc} />
            <section className={styles.bg}>
               <div className="container-xl">
                  <Breadcrumb className={styles.bredcrumb}>
                     <Breadcrumb.Item href={otherPageData.homeurl}>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className={styles.info}>
                     <h1><small>Contact Us </small>{otherPageData.name}</h1>
                     <div className={styles.para} dangerouslySetInnerHTML={{ __html: otherPageData.overview }} />
                  </div>
               </div>
            </section>
            <section className={styles.contact}>
               <div className="container-xl">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className={styles.contact__left}>
                           <div className="h5">We would love to hear from you!</div>
                           <div className={styles.contact__info}>
                              <Link href=""><span>t.</span>+91 {otherPageData.callnumber} (30 Lines)</Link>
                              <Link href=""><span>m.</span>+91 {otherPageData.whatsnumber}</Link>
                              <Link href=""><span>e.</span>enquiry@hcorealestates.com</Link>
                              <Link href={otherPageData.homeurl}><span>w.</span>{otherPageData.homeurl}</Link>
                           </div>
                           <div className={styles.follow}>
                              <div className="h5">Follow Us</div>
                              <SocialMedia itemObj={pageData} />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className={styles.contact__right}>
                           <div className="h3 text-center mb-3">Get in touch with us!</div>
                           <MainForm />
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className={styles.tabs}>
               <div className="container-xl">
                  <div className="row">
                     <div className="col-12">
                        <div className="h2 mb-4">Our Offices in Delhi/NCR</div>
                        <div className={styles.tabs__area}>
                           <Tab.Container id="left-tabs-example" defaultActiveKey="office1">
                              <Nav variant="pills" className={styles.tabs__left}>
                                 <Nav.Item>
                                    <Nav.Link eventKey="office1"><div className="office_heading">Corporate Office :</div>
                                    <span dangerouslySetInnerHTML={{ __html: otherPageData.coffice }} ></span></Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="office2"><div className="office_heading">Gurgaon Office :</div>
                                    <span dangerouslySetInnerHTML={{ __html: otherPageData.goffice }}></span></Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="office3">
                                       <div className="office_heading">New Gurgaon Office :</div>
                                       <span dangerouslySetInnerHTML={{ __html: otherPageData.ngoffice }}></span>
                                    </Nav.Link>
                                 </Nav.Item>
                              </Nav>
                              <Tab.Content className={styles.tabs__right}>
                                 <Tab.Pane eventKey="office1">
                                    <iframe src={otherPageData.cofficeiframe} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="office2">
                                    <iframe src={otherPageData.gofficeiframe} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="office3">
                                    <iframe src={otherPageData.ngofficeiframe} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer resultFooter={resultHome} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}