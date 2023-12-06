"use client";
import Image from "next/image";
import styles from "../scss/about.module.scss";
import { Breadcrumb, Accordion } from "react-bootstrap";
export default function AboutFaq({ showModalName, handleModalCloseName, modalHeading, children }) {
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
            <Accordion className={styles.accordion} defaultActiveKey={["0"]}>
                <Accordion.Item className={styles.faq__item} eventKey="0">
                <Accordion.Header as={"h5"}>What is the distance from DLF One Midtown to the nearest metro station?</Accordion.Header>
                <Accordion.Body>The distance from DLF One Midtown to the nearest metro station is 0.61 Km.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.faq__item} eventKey="1">
                <Accordion.Header as={"h5"}>What are the possession status and possession date of DLF One Midtown? </Accordion.Header>
                <Accordion.Body>The possession status of DLF One Midtown is Under Construction and is available for possession in/from Jul, 2026. </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.faq__item} eventKey="2">
                <Accordion.Header as={"h5"}>What are the possession status and possession date of DLF One Midtown? </Accordion.Header>
                <Accordion.Body>The possession status of DLF One Midtown is Under Construction and is available for possession in/from Jul, 2026. </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.faq__item} eventKey="3">
                <Accordion.Header as={"h5"}>How much is the area of 3 BHK in DLF One Midtown? </Accordion.Header>
                <Accordion.Body>The total area of a 3 BHK in DLF One Midtown is 2278.0 sq.ft.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#footerModal">
                        Ask Any Question?
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}