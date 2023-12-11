import { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import submitPopupForm from "../api/submitPopupForm";

export default function MainForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [country, setCountry] = useState("2");
   const [mobileNo, setMobileNo] = useState("");
   function formSubmitHandle(e) {
      e.preventDefault();
      const formfdsf = submitPopupForm(name,email,country,mobileNo);
      console.log(formfdsf);
   }

   return (
      <form onSubmit={formSubmitHandle}>
         <div className="form-floating mb-3">
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="floatName" placeholder="Enter Your Name" />
            <label htmlFor="floatName">Enter Your Name</label>
         </div>
         <div className="form-floating mb-3">
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatEmail" placeholder="Email address" />
            <label htmlFor="floatEmail">Email address</label>
         </div>

         <div className="form-floating mb-3">
            <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)} id="floatCountry">
            <option value="2">India</option>
               <CountryDropDown />
            </select>
            <label htmlFor="floatCountry">Select Your Country</label>
         </div>
         <div className="form-floating mb-3">
            <input type="tel" className="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} id="floatPhoneNumber" placeholder="Mobile No." />
            <label htmlFor="floatPhoneNumber">Mobile No.</label>
         </div>

         <div className="d-grid">
            <button type="submit" className="btn btn-primary">Get Callback</button>
         </div>
      </form>
   )
}