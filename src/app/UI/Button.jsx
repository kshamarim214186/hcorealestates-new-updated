"use client";
import { useState } from "react";
import ModalForm from "@/app/components/ModalForm";
export default function Button({ itemObj }) {   
   const [showModal, setShowModal] = useState(false);
   const handleModalShow = () => setShowModal(true);   
   const handleModalClose = () => setShowModal(false);
   return(
      <>
         <button className={`btn btn-outline-primary btn-sm`} onClick={handleModalShow}>{itemObj}</button>
         <ModalForm showModalName={showModal} handleModalCloseName={handleModalClose} modalHeading="EXPRESS YOUR INTEREST!" />
      </>
   ) 
}