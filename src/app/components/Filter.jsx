"use client";
import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../scss/properties.module.scss";

export default function Filter({ developer }) {
    const [value, setValue] = useState([0, 10]);
   const handleChange = (val) => setValue(val);

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   return ( 
      <>
         <Offcanvas show={show} onHide={handleClose} placement="end" responsive="lg">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
               <form>
                  <div className="filter_header"></div>
                  <div className="mb-4">
                     <div className="border-bottom mb-3 pb-1">Bedroom</div>
                     <ToggleButtonGroup className={styles.checkboxes} type="checkbox" size="sm" value={value} onChange={handleChange}>
                        <ToggleButton variant="outline-primary" id="tbg-btn-1" value={1}>
                          1 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-2" value={2}>
                          2 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-3" value={3}>
                          3 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-4" value={4}>
                          4 BHK
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-5" value={5}>
                          5 BHK
                        </ToggleButton>
                     </ToggleButtonGroup>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="floatCountry" className="mb-2">
                        Property Sub Type
                     </label>
                     <select className="form-select" id="floatCountry">
                        <option value="1">Independent Floors</option>
                        <option value="2">Apartments</option>
                        <option value="3">Floors</option>
                        <option value="3">Villas</option>
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
                        Posession In
                     </label>
                     <select className="form-select" id="">
                        <option value="1">Ready to Move</option>
                     </select>
                  </div>

                  <div className="mb-4">
                     <label htmlFor="floatCountry" className="mb-2">
                        Developers
                     </label>
                     <select className="form-select" id="">
                        <option value="1">Select Developer</option>
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