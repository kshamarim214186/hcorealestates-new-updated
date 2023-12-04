"use client";
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/scss/autoplay";
import { Navigation } from "swiper";
import HeaderBlog from "../components/header-blog";
import Footer from "../components/Footer";
import styles from "../scss/blogs.module.scss";
import { Breadcrumb } from "react-bootstrap";
import Search from "../components/Search";
import CustomButton from "../UI/CustomButton";
import BlogItems from "../components/blog-items";
import Subscribe from "../components/subscribe";
import SideAds from "../components/side-ads";
import CustomPagination from "@/app/components/CustomPagination";
import ArrowButton from "../UI/ArrowButton";
import getHomeCompleteData from "../api/getHomeCompleteData";
import getPostList from "../api/getPostList";
import getPostListByCondition from "../api/getPostListByCondition";

const adsData = [
  {
    id: 1,
    title: "banner slide",
    img: "/images/side-ad.webp",
    url: "",
  },
  {
    id: 2,
    title: "banner slide",
    img: "/images/side-ad.webp",
    url: "",
  },
];

export default async function PostListing() {

   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";

   const props = getHomeCompleteData();
   const result = await props;
   const pageData = result.pagedata;

   const post = getPostList(page);
   const resultpost = await post;
   const postData = resultpost.blogdata;
   const totalrecords = resultpost.totalrecords;
   const perpagerecord = resultpost.perpagerecord;
   const number_of_page = Math.ceil(totalrecords / perpagerecord);  

   const postCon = getPostListByCondition('showin_slider','yes','');
   const resultpostCon = await postCon;
   const postDataSlider = resultpostCon.BlogDataByCon;
   return (
      <>
      <main>
      <title>{pageData.blogseotitle}</title>
      <meta name="description" content={pageData.blogseodesc} />
         <section className={styles.bg}>
            <div className="container-xl">
               <div className={styles.bredcrumb}>
                 <Breadcrumb>
                   <Breadcrumb.Item href={pageData.homeurl}>Home</Breadcrumb.Item>
                   <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
                 </Breadcrumb>
               </div>
            </div>
            <div className="">
               <Image src="/images/background-noimage-art.svg" className="w-100 img-fluid" width={500} height={250} alt="backgroun image" />
            </div>
            <div className={styles.bg__content}>
               <div className="container-xl">
                 <div className="row justify-content-center">
                   <div className="col-md-8">
                     <h1 className="mb-4">
                       <small>Grace your Knowledge</small>{pageData.blogdesc}
                     </h1>
                     <div className={styles.bg__search}>
                       <Search />
                     </div>
                   </div>
                 </div>
               </div>
            </div>
         </section>
         <section className={styles.slides}>
            <div className="container-xl">
               {postDataSlider.length > 0 &&
                  <Swiper className={styles.swiperCustomControl} modules={[Navigation]} spaceBetween={24} slidesPerView={1} navigation={{ clickable: true }}> 
                     {postDataSlider.map(function(data) {
                        return (                 
                           <SwiperSlide key={data.id}>
                                 <figure className={styles.slides__items}>
                                    <div className={styles.slides__thumb}>
                                      <Image src={data.listingimage} className="img-fluid w-100" alt={data.name} width={850} height={515} />
                                    </div>
                                    <figcaption className={styles.slides__info}>
                                      <h4>
                                          <Link href={data.url} className=" stretched-link">
                                             {data.name}
                                          </Link>
                                      </h4>
                                      <p>{data.shortdesc}</p>
                                      <ArrowButton buttonName="Read More" />
                                    </figcaption>
                                 </figure>
                           </SwiperSlide>
                        ) 
                     })}                  
                  </Swiper>
               }
            </div>
         </section>



         <section className={styles.blogs}>
            <div className="container-xl">
               <div className="row">
                  <div className="col-lg-8">
                     <div className={styles.blogs__all}>
                        {postData.map((item) => (
                          <BlogItems key={item.id} newsObject={item} />
                        ))}
                     </div>
                     <div className="row">
                        <div className="col-12 mt-4">
                           <div className=" justify-content-center mt-3 mb-lg-0 mb-5">   
                              <CustomPagination totalrecord={totalrecords} pagename="post" currentpage={currentpage} numberofpage={number_of_page} />
                           </div>                 
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className={styles.blogs__right}>
                        <Subscribe />
                        <Swiper
                          slidesPerView={1}
                          autoplay={{
                            delay: 100,
                            disableOnInteraction: true,
                          }}
                          speed={500}
                          loop={true}
                        >
                           {adsData.map((item) => (
                              <SwiperSlide key={item.id}>
                                 <SideAds adsObject={item} />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
      </>
   );
}