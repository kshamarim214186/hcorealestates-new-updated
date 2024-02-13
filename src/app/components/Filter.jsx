"use client";
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilterList } from "@fortawesome/pro-regular-svg-icons";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../scss/properties.module.scss";
import SortFilter from "@/app/UI/sort-filter";

export default function Filter({ developer, currentpage, devObj, bedObj, ptypeObj, minObj, maxObj }) {

   const pathname = usePathname();
   const currentPage = pathname+'?page='+currentpage

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);

   const [getdeveloper, setDeveloper] = useState(devObj);
   const [getminprice, setMinprice] = useState(minObj);
   const [getmaxprice, setMaxprice] = useState(maxObj);
   const [getbed, setBed] = useState(bedObj);
   const [getptype, setPropertyType] = useState(ptypeObj);

   const numberArray = getbed ? [0, parseInt(getbed)] : [0,6];   
   const [value, setValue] = useState(numberArray);
   const handleChange = (val) => setValue(val);

   function formSubmitHandle(e) {
      e.preventDefault();
      if(getminprice || getmaxprice){
         if(getminprice && getmaxprice){
            window.open(`${currentPage}&price_min=${getminprice}&price_max=${getmaxprice}`, '_self');
         }else if(getminprice){
            window.open(`${currentPage}&price_min=${getminprice}`, '_self');
         }else if(getmaxprice){
            window.open(`${currentPage}&price_max=${getmaxprice}`, '_self');
         }else{
            window.open(`${pathname}`, '_self');
         }
      }else{
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
   }

   const [priceFilter, setpriceFilter] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const formData = new URLSearchParams();
            formData.append('token1', process.env.token1);
            formData.append('token2', process.env.token2);
            const finalresult = await fetch(process.env.API_URL+'users/GetPriceList/', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
               },
               body: formData,
            });   
           const result = await finalresult.json();
           setpriceFilter(result.price);
         } catch (error) {
            console.error('Error fetching data:', error);
         } finally {
           setLoading(false);
         }
      };
      fetchData();
      return () => {

      };
   }, []);
   //console.log(priceFilter);
   return ( 
      <>
         <div className="d-lg-none d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm d-lg-none" onClick={handleShow}>
               Filter <FontAwesomeIcon icon={faFilterList} />
            </button>
            <div className="">
               <SortFilter />
            </div>
         </div>
         <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
               <form onSubmit={formSubmitHandle}>
                  <div className="filter_header"></div>
                  <div className="mb-4">
                     <div className="border-bottom mb-3 pb-1">Bedroom</div>
                     <ToggleButtonGroup className={styles.checkboxes} type="checkbox" size="sm" value={value} onChange={handleChange}>
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
                        <select className="form-select" id="" value={getminprice} onChange={(e) => setMinprice(e.target.value)}>
                           <option value="">Min Price</option>
                           {priceFilter.map(function(data,idx) {
                              return (
                                 <option value={data.price} key={idx}>{data.price}</option>
                              )
                           })}
                        </select>
                        <select className="form-select" id=""  value={getmaxprice} onChange={(e) => setMaxprice(e.target.value)}>
                           <option value="">Max Price</option>
                           {priceFilter.map(function(data,idx) {
                              return (
                                 <option value={data.price} key={idx}>{data.price}</option>
                              )
                           })}
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