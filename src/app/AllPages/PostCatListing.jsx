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
import PostByCategory from "../components/PostByCategory";
import Subscribe from "../components/subscribe";
import SideAds from "../components/side-ads";
import ArrowButton from "../UI/ArrowButton";
import NotFound from "@/app/components/NotFound";
import getPostByCat from "../api/getPostByCat";

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

export default async function PostCatListing({ itemObj }) {
   const searchParams = useSearchParams() 
   const page = searchParams.get('page') ? searchParams.get('page') : "";
   const currentpage = searchParams.get('page') ? searchParams.get('page') : "1";

   const postCat = getPostByCat(itemObj);
   const resultpostCat = await postCat;
   const postCatData = resultpostCat.blogcatdata;
   const message = resultpostCat.message;
   return (
      <>
      {message=='success' ?
         <main>
            <title>{postCatData.seotitle}</title>
            <meta name="description" content={postCatData.seodesc} />
            <section className={styles.bg}>
               <div className="container-xl">
                  <div className={styles.bredcrumb}>
                    <Breadcrumb>
                      <Breadcrumb.Item href={postCatData.homeurl}>Home</Breadcrumb.Item>
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
                          {postCatData.h1}
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
               </div>
            </section>

            <section className={styles.blogs}>
               <div className="container-xl">
                  <div className="row">
                     <div className="col-lg-8">
                        <PostByCategory itemPost={postCatData.id} page={page} currentpage={currentpage} />
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
         : <NotFound />
      }
      </>
   );
}