import React, { useEffect, useState } from 'react';
import ListItems from "../UI/ListItems";
import styles from "../scss/developer.module.scss";
import CustomPagination from "@/app/components/CustomPagination";

export default function ProjectByCondition({ itemObj, page, currentpage, columnname, sortObj, devObj, bedObj }) { 

   const [properties, setProperties] = useState([]);
   const [message, setMessage] = useState('');
   const [totalrecords, setTotalrecords] = useState('');
   const [perpagerecord, setPerpagerecord] = useState('');
   const [number_of_page, setNumberofpage] = useState('');
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const formData = new URLSearchParams();

            formData.append('columnval', itemObj.id);
            formData.append('column', columnname);
            formData.append('token1', process.env.token1);
            formData.append('token2', process.env.token2);
            formData.append('page', page);
            formData.append('sortcon', sortObj);
            formData.append('devurl', devObj);
            formData.append('bed', bedObj);
            const finalresult = await fetch(process.env.API_URL+'properties/getprojectbyCondition/', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
               },
               body: formData,
            });   
           const result = await finalresult.json();
           setProperties(result.projectbyconn);
           setMessage(result.message);
           setTotalrecords(result.totalrecords);
           setPerpagerecord(result.perpagerecord);
           setNumberofpage(Math.ceil(result.totalrecords / result.perpagerecord))
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
   return ( 
      <> 
         <div> 
            {loading ? (
              <div>Loading...</div>
            ) : (<div>      
            <div className={styles.counts}>
               {Number(totalrecords)} {Number(totalrecords) <= 1 ? "Property" : "Properties"} Found
            </div>          
            {properties.map(function(property) {
               return (
                  <ListItems itemObj={property} key={property.propId}/>
               );
            })}
            {message=='success' &&
               <div className="col-12">
                  <div className={styles.paginContainer}>
                    <CustomPagination totalrecord={totalrecords} pagename={itemObj.urlval} currentpage={currentpage} numberofpage={number_of_page} />
                  </div>
               </div>
            }</div>)}
         </div> 
      </>
   );
}