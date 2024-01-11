import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";

export default function CustomPagination({ totalrecord, pagename, currentpage, numberofpage }) {
   const numberofrecord = Array.from({ length: numberofpage }, (_, index) => index);
   return (
      <> 
         <Pagination className=" justify-content-center mt-3 mb-lg-0 mb-5">
            <Pagination.Prev disabled />
               {numberofrecord.map(function(data,idx) {
                  const pageval = idx+1; 
                  const pageUrl = "?page="+pageval;    
                  
                  if (parseInt(currentpage) === parseInt(pageval)) {
                     return ( 
                        <Pagination.Item href={pageUrl === '?page=1' ? pagename : pageUrl } key={idx} active>{pageval}</Pagination.Item>
                     )
                  }else{
                     return ( 
                        <Pagination.Item href={pageUrl === '?page=1' ? pagename : pageUrl } key={idx}>{pageval}</Pagination.Item>
                     )
                  }              
                  
               })}
            <Pagination.Next />
         </Pagination>
      </>
   );
}