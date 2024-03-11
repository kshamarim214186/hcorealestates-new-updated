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
            <div className="row">
              <div className="col-12">
                <div className={styles.others}>
                  <div className={styles.othersList}>
                    <div className={styles.count}>
                      <div className={styles.h1}>10,000+</div>
                      <small>Happy Customers</small>
                    </div>
                    <div className="icons">
                      <Image src="/images/about-us/thumbs-up.png" className="img-fluid" alt="Name Here" width={50} height={30} />
                    </div>
                    <div className="others-text">We have Satisfied 1000+ Families from around the World.</div>
                  </div>
                  <div className={styles.othersList}>
                    <div className={styles.count}>
                      <div className={styles.h1}>100+</div>
                      <small>Top Hundred Real Estate Developers</small>
                    </div>
                    <div className="icons">
                      <Image src="/images/about-us/rent.png" className="img-fluid" alt="Name Here" width={50} height={30} />
                    </div>
                    <div className="others-text">We work with Top Real Estate Buiders in Dubai.</div>
                  </div>
                  <div className={styles.othersList}>
                    <div className={styles.count}>
                      <div className={styles.h1}>20+</div>
                      <small>Active Years in The Industry</small>
                    </div>
                    <div className="icons">
                      <Image src="/images/about-us/thumbs-up.png" className="img-fluid" alt="Name Here" width={50} height={30} />
                    </div>
                    <div className="others-text">We always work with 100% Client Centric Approach for past 20 Years.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.teamContent}>
          <div className="container-xl">
          {otherPageData.h2 &&<div className="h2">{otherPageData.h2}</div>}
            <div className="arrow">
              <Image width={93} height={72} src="/images/about-us/arrow.png" alt="Awards" />
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.teams}>
                  <figure>
                    <div className={styles.imgBg}>
                      <Image width={210} height={210} src="/images/about-us/team-01.png" className="img-fluid" alt="Manish Bhatia" />
                    </div>
                    <figcaption>
                      <h4>Manish Bhatia</h4>
                      <div className="sales">Principle Advisor</div>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.teams}>
                  <figure>
                    <div className={styles.imgBg}>
                      <Image width={210} height={210} src="/images/about-us/team-03.png" className="img-fluid" alt="Ajay Kalra" />
                    </div>
                    <figcaption>
                      <h4>Ajay Kalra</h4>
                      <div className="sales">Vice President</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.teams}>
                  <figure>
                    <div className={styles.imgBg}>
                      <Image width={210} height={210} src="/images/about-us/team-04.png" className="img-fluid" alt="Mohit Sinha" />
                    </div>
                    <figcaption>
                      <h4>Mohit Sinha</h4>
                      <div className="sales">General Manager</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.teams}>
                  <figure>
                    <div className={styles.imgBg}>
                      <Image width={210} height={210} src="/images/about-us/team-02.png" className="img-fluid" alt="Rajni Verma" />
                    </div>
                    <figcaption>
                      <h4>Rajni Verma</h4>
                      <div className="sales">Sales Executive</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
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
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <figure className={styles.awards}>
                  <Image className="img-fluid" width={94} height={163} src="/images/about-us/awards-01.png" alt="Awards" />
                  <figcaption>Achievement Awards</figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure className={styles.awards}>
                  <Image className="img-fluid" width={94} height={163} src="/images/about-us/awards-02.png" alt="Awards" />
                  <figcaption>Best Consultant of The Year</figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure className={styles.awards}>
                  <Image className="img-fluid" width={94} height={163} src="/images/about-us/awards-03.png" alt="Awards" />
                  <figcaption>Top Performer Awards</figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure className={styles.awards}>
                  <Image className="img-fluid" width={94} height={163} src="/images/about-us/awards-04.png" alt="Awards" />
                  <figcaption>Principle Performer</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.process}>
        {otherPageData.h4 &&<h2>{otherPageData.h4}</h2>}
          <Image width={1600} height={611} src={otherPageData.teamimage} alt="Overview" className="img-fluid" />
          <div className="container-xl">
            <div className="row">
              <div className="col-md-4">
                <div className={styles.process__sub}>
                  <div className="h3">Our Team</div>
                  <p>Our Team of Talented and Dedicated Professionals will make sure that your Real Estate Experience is Hassle-Free and Swift.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.process__sub}>
                  <div className="h3">Our Motto</div>
                  <p>We are always ready to give the Best Real Estate Options Available in the Market that exceeds your expectations.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.process__sub}>
                  <div className="h3">Our Vision</div>
                  <p>Our goal is to offer a one stop solution for finding dream properties in Dubai that meet all of your requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutFaq />
      </main>
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
    </>
  );
}