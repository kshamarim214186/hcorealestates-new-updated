"use client";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/pro-regular-svg-icons";
export default function HeaderBlog() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid="xl">
        <Navbar.Brand href="/">
          <Image src="https://www.hcorealestates.com/images/logo.svg" alt="Hcorealestates" width={170} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link href="tel:+919811999666">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 9811 999 666</span>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
