"use client";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../scss/properties.module.scss";

export default function Filter({ developer, currentpage, devObj, bedObj, ptypeObj }) {

   const pathname = usePathname();
   const currentPage = pathname+'?page='+currentpage

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const [getdeveloper, setDeveloper] = useState(devObj);
   const [getbed, setBed] = useState(bedObj);
   const [getptype, setPropertyType] = useState(ptypeObj);

   function formSubmitHandle(e) {
      e.preventDefault();
      if(getbed && getdeveloper && getptype){
         window.open(`${currentPage}&bed=${getbed}&dev=${getdeveloper}&propertytype=${getptype}`, '_self');
      }else if(getbed && getdeveloper){
         window.open(`${currentPage}&bed=${getbed}&dev=${getdeveloper}`, '_self');
      }else if(getptype && getdeveloper){
         window.open(`${currentPage}&propertytype=${getptype}&dev=${getdeveloper}`, '_self');
      }else if(getbed && getptype){
         window.open(`${currentPage}&bed=${getbed}&propertytype=${getptype}`, '_self');
      }else if(getdeveloper){
         window.open(`${currentPage}&dev=${getdeveloper}`, '_self');
      }else if(getbed){
         window.open(`${currentPage}&bed=${getbed}`, '_self');
      }else if(getptype){
         window.open(`${currentPage}&propertytype=${getptype}`, '_self');
      }else{
         window.open(`${pathname}`, '_self');
      }
   }
   
   return ( 
      <>
         <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
               <form onSubmit={formSubmitHandle}>
                  <div className="filter_header"></div>
                  <div className="mb-4">
                     <div className="border-bottom mb-3 pb-1">Bedroom</div>
                     <ToggleButtonGroup className={styles.checkboxes} type="checkbox" size="sm">
                        <ToggleButton variant="outline-primary" id="tbg-btn-1" value={1} onChange={(e) => setBed(e.target.value)}>
                          1 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-2" value={2} onChange={(e) => setBed(e.target.value)}>
                          2 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-3" value={3} onChange={(e) => setBed(e.target.value)}>
                          3 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-4" value={4} onChange={(e) => setBed(e.target.value)}>
                          4 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-5" value={5} onChange={(e) => setBed(e.target.value)}>
                          5 BHK
                        </ToggleButton>
                     </ToggleButtonGroup>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="floatCountry" className="mb-2">
                        Property Type
                     </label>
                     <select className="form-select" id="floatCountry"  value={getptype}  onChange={(e) => setPropertyType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="apartments">Apartments</option>
                        <option value="floors">Floors</option>
                        <option value="villas">Villas</option>                        
                        <option value="plots">Plots</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="retails&offices">Retails & Offices</option>
                        <option value="simplex&duplex">Simplex & Duplex</option>
                        <option value="triplex">Triplex</option>
                        <option value="it">IT</option>
                        <option value="medical">Medical</option>
                     </select>
                  </div>

                  <div className="mb-4">
                      <div className="pb-1">Budget</div>
                      <div className="d-flex column-gap-1">
                        <select className="form-select" id="">
                          <option value="1">Min Price</option>
                        </select>
                        <select className="form-select" id="">
                          <option value="1">Max Price</option>
                        </select>
                      </div>
                  </div>

                  <div className="mb-4">
                     <label htmlFor="floatCountry" className="mb-2">
                        Developers
                     </label>
                     <select className="form-select" id="" value={getdeveloper} onChange={(e) => setDeveloper(e.target.value)}>
                        <option value="">Select Developer</option>
                        {developer.map(function(data,idx) {
                           return (
                              <option value={data.shorturl} key={idx}>{data.name}</option>
                           )
                        })}
                     </select>
                  </div>
                  <div className="d-grid">
                     <button type="submit" className="btn btn-primary">
                        Filter Now
                     </button>
                  </div>
               </form>
            </Offcanvas.Body>
         </Offcanvas>
      </>
  );
}