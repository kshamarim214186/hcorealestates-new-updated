"use client";
import Footer from "@/app/components/Footer"
import HeaderBlog from "@/app/components/header-blog"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../scss/blogs.module.scss";
import { Breadcrumb } from "react-bootstrap";
import BlogItems from "@/app/components/blog-items";
import Subscribe from "@/app/components/subscribe";
import SideAds from "@/app/components/side-ads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import getSinglePost from "../api/getSinglePost";
import TableOfContentPost from "@/app/components/TableOfContentPost";
import NotFound from "@/app/components/NotFound";

const adsData = [
  {
    id: 1,
    title: 'banner slide',
    img: '/images/side-ad.webp',
    url: ''
  },
  {
    id: 2,
    title: 'banner slide',
    img: '/images/side.webp',
    url: ''
  }
];


export default async function PostPage({ itemObj }) {   
   const date = new Date(' 2023-10-27');
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const postDate = date.getDay() <= 9 ? '0' + date.getDay() : date.getDay();

   const post = getSinglePost(itemObj);
   const resultpost = await post;
   const message = resultpost.message;
   const postData = resultpost.allpost;
   const singlepostData = resultpost.singlepost;
   const postDescription = resultpost.singlepostdesc;
   const postFaq = resultpost.postfaq;
   //console.log(singlepostData);
   return (
      <>
      {message=='success' ?
         <main>
            <title>{singlepostData.seotitle}</title>
            <meta name="description" content={singlepostData.seodesc} />
            <div className="container-xl">
              <Breadcrumb className="mt-3">
                <Breadcrumb.Item href={singlepostData.homeurl}>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/post/">Blogs</Breadcrumb.Item>
                <Breadcrumb.Item active>{singlepostData.name}</Breadcrumb.Item>
              </Breadcrumb>

            </div>
            <section className={`${styles.banner} ${styles.banner__inner}`}>
               <Image src={singlepostData.bannerimage} className="img-fluid" alt={singlepostData.name} width={1120} height={305} />
               <h1>{singlepostData.name}</h1>
               <ul className={styles.tags}>
                  <li>By <Link href='/'>Admin</Link></li>
                  <li>{`${postDate} ${months[date.getDay() + 1]}, ${date.getFullYear()}`}</li>
                  <li><Link href={singlepostData.homeurl}>Real Estates</Link></li>
               </ul>
               <ul className={`${styles.social} social`}>
                  <li><Link href=''><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                  <li><Link href=''><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                  <li><Link href=''><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                  <li><Link href=''><FontAwesomeIcon icon={faPinterest} /></Link></li>
               </ul>
            </section>
            <section className={styles.blogs}>
               <div className="container-xl">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className={styles.blogs__post}>
                           <p>{singlepostData.shortdesc}</p>                   
                           <TableOfContentPost itemObj={postDescription} />      
                        </div>

                        {postFaq.length>0 &&
                           <div className={styles.faq} itemScope="" itemType="http://schema.org/FAQPage">
                              <h3>Frequently asked questions</h3>
                              {postFaq.map(function(data,idx) {
                                 return (
                                    <div className={styles.faq__list} key={data.id} itemScope="" itemProp="mainEntity" itemType="http://schema.org/Question">
                                       <div itemProp="name" className={styles.question}> {data.question}</div>
                                       <div className={styles.answer} itemProp="acceptedAnswer" itemScope="" itemType="http://schema.org/Answer">
                                          <div itemProp="text">
                                             <p>{data.answer}</p>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })}
                           </div>
                        }
                     </div>

                     <div className="col-lg-4">
                        <div className={styles.blogs__right}>
                           <Subscribe />
                           <Swiper
                           spaceBetween={30}
                           centeredSlides={true}
                           autoplay={{
                             delay: 2500,
                             disableOnInteraction: false,
                           }}
                           pagination={{
                             clickable: true,
                           }}
                           >
                              {adsData.map(item => <SwiperSlide key={item.id}>
                                <SideAds adsObject={item} />
                              </SwiperSlide>)}
                         </Swiper>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {postData.length>0 &&
               <section className={`container-xl ${styles.similar}`}>
                  <h3>Related More Blogs</h3>
                  <Swiper
                   className={styles.swiperCustomControl}
                   modules={[Navigation]}
                   spaceBetween={24}
                   slidesPerView={1}
                   navigation={{ clickable: true }}
                   breakpoints={{
                     640: { slidesPerView: 2 },
                     1025: { slidesPerView: 3 },
                   }}
                  >
                     {postData.map((item) =>
                        <SwiperSlide key={item.id}>
                           <BlogItems newsObject={item} />
                        </SwiperSlide>
                     )}
                  </Swiper>
               </section>
            }
         </main>
      : <NotFound />
      }
      </>
   );
}