"use client";
import Image from "next/image";
import styles from "../scss/about.module.scss";
import { Breadcrumb, Accordion } from "react-bootstrap";
import Button from "../UI/Button";

export default function AboutFaq({ fqdata }) {
   const buttontext = 'Ask Any Question?';
   return (
      <section className={styles.faq}>
         <div className="container-xl">
         <div className="row">
            <div className="col-lg-5">
               <small>FAQ</small>
               <div className="h1">
                   Your questions, <span>answered</span>
               </div>
            </div>
            <div className="col-lg-7">
               {fqdata.length > 0 && 
                  <Accordion className={styles.accordion} defaultActiveKey={["0"]}>
                     {fqdata.map(function(fdata, index) {
                        return (
                           <Accordion.Item className={styles.faq__item} eventKey={index} key={index}>
                              <Accordion.Header as={"h5"}>{fdata.question}</Accordion.Header>
                              <Accordion.Body>{fdata.answer}</Accordion.Body>
                           </Accordion.Item>
                        )
                     })}                      
                  </Accordion>
               }
            </div>
            <div className="col-lg-12">
               <div className={styles.question}>
                  <div className={styles.question__left}>
                     <Image width={400} height={300} src="/images/about-us/question.svg" className="img-fluid" alt="Still have questions?" />
                  </div>
                  <div className={styles.question__right}>
                     <div className="h1">Still have questions?</div>
                     <p>Get answers from an experienced Super Advisor near you.</p>
                     <div className="">
                        <Button itemObj={buttontext} buttonClass={`btn btn-primary`} />
                     </div>
                  </div>
               </div>
            </div>
        </div>
        </div>
      </section>
   );
}