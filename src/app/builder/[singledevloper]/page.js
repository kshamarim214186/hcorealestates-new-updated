"use client";
import Image from "next/image";
import Link from "next/link";
import ListItems from "../../UI/ListItems";
import styles from "../../scss/develoer-single.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CustomButton from "@/app/UI/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import AllDevelopers from "@/app/UI/all-developers";
import ProjectByBuilder from "../../components/ProjectByBuilder";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import getHomeCompleteData from "../../api/getHomeCompleteData";
import getLocationType from "../../api/getLocationType";

async function SingleDeveloper({ params: { singledevloper } }) {

   const developer = getSingleBuilderDetails(singledevloper);
   const builderResult = await developer
   const message = builderResult.message;
   const builderData = builderResult.builder;
   const developers = builderResult.allbuilders;
   //console.log(fdgjdfg);

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
      { message=='success' &&
         <main className={styles.main}>
            <title>{builderData.seotitle}</title>
            <meta name="description" content={builderData.seodesc} />
            <section className={styles.bg}>
               <Image src="/images/background-noimage-art.svg" className="w-100 img-fluid" width={500} height={250} alt="backgroun image" />
            </section>
            <div className="container-xl">
             <div className={styles.builder}>
               <Link href={builderData.url} className={styles.logo}>
                  <Image src={builderData.devphoto} alt={builderData.devName} className="img-fluid d-block" width={100} height={45} />
               </Link>
               <h4 className="mt-3">{builderData.devName}</h4>
               <div className="text-yellow-900 font-medium">60 Properties</div>
               <div dangerouslySetInnerHTML={{ __html: builderData.smalldesc }} />
               <Accordion defaultActiveKey="0">
                 <Accordion.Item eventKey="1">
                   <Accordion.Body>
                     <div dangerouslySetInnerHTML={{ __html: builderData.description }} />
                   </Accordion.Body>
                   <Accordion.Header as={"div"}></Accordion.Header>
                 </Accordion.Item>
               </Accordion>
             </div>

             <div className={styles.allList}>
               <div className={styles.category}>
                 <h2>{builderData.h2}</h2>
                 <ProjectByBuilder itemObj={builderData} />
               </div>
               
              
             </div>
            </div>

            <section className={styles.developers}>
               <div className="container-xl">
                  <h2><small>Featured </small>Developers</h2>
                  <p>Handpicked collections of flats in Delhi</p>
                  <Swiper
                    className={styles.swiperCustomControl}
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    breakpoints={{
                      768: { slidesPerView: 3 },
                      992: { slidesPerView: 7 },
                    }}
                  >
                     {developers.map((item) => (
                        <SwiperSlide key={item.id}>
                           <AllDevelopers developerObj={item} />
                        </SwiperSlide>
                    ))}
                  </Swiper>
                  <CustomButton url={builderData.builderurl} buttonName="Know More" />
               </div>
            </section>

         </main>
      }
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}

export default SingleDeveloper

async function getSingleBuilderDetails(singledevloper) {
   const formData = new URLSearchParams();

   formData.append('devurl', singledevloper);
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   const finalresult = await fetch(process.env.API_URL+'builders/getsingledeveloper/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}