"use client";
import styles from "../scss/main.module.scss";

export default async function FloorPlan({ itemObj, propId }) {   

   const propSpecification = await getProjectSpecification(itemObj.specicatid,propId);
   const propertySpeci = propSpecification.specification;

   return (
      <> 
         {propertySpeci.map(function(propSpecification) {
            return (
               <div className={styles.lines} key={propSpecification.specid}>
                 <strong>{propSpecification.specsubcat}</strong>{propSpecification.specname}
               </div>
            )
         })} 
      </>
   );
}

async function getProjectSpecification(floorcatid,propId) {
   //console.log(floorcatid);
   const formData = new URLSearchParams();

   formData.append('projectid', propId);
   formData.append('catid', floorcatid);
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   const finalresult = await fetch(process.env.API_URL+'properties/getprojectspecification/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });   
   return await finalresult.json();
}