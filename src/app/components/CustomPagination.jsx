import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";
import { useSearchParams } from 'next/navigation'
export default function CustomPagination({ totalrecord, pagename, currentpage, numberofpage }) {
   const numberofrecord = Array.from({ length: numberofpage }, (_, index) => index);

   const searchParams = useSearchParams() 
   const getDev = searchParams.get('dev') ? searchParams.get('dev') : "";
   const getBed = searchParams.get('bed') ? searchParams.get('bed') : "";
   const getPType = searchParams.get('propertytype') ? searchParams.get('propertytype') : "";
   return (
      <> 
         <Pagination className=" justify-content-center mt-3 mb-lg-0 mb-5">
            <Pagination.Prev disabled />
               {numberofrecord.map(function(data,idx) {
                  const pageval = idx+1;                   
                  //const pageUrl = (getDev || getBed || getPType) ? "?page="+pageval+"&dev="+getDev+"&bed="+getBed+"&propertytype="+getPType : "?page="+pageval; 

                  const pageUrl = (getDev && getBed && getPType) ? "?page="+pageval+"&dev="+getDev+"&bed="+getBed+"&propertytype="+getPType 
                                 : (getDev && getBed) ? "?page="+pageval+"&dev="+getDev+"&bed="+getBed
                                 : (getBed && getPType) ? "?page="+pageval+"&bed="+getBed+"&propertytype="+getPType 
                                 : (getDev && getBed) ? "?page="+pageval+"&dev="+getDev+"&bed="+getBed 
                                 : getPType ? "?page="+pageval+"&propertytype="+getPType 
                                 : getBed ? "?page="+pageval+"&bed="+getBed
                                 : getDev ? "?page="+pageval+"&dev="+getDev
                                 : "?page="+pageval;
                  
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
            <Pagination.Next disabled />
         </Pagination>
      </>
   );
}