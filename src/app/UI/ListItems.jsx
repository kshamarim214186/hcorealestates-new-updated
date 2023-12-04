"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/pro-regular-svg-icons";
export default function FeatureProjectList({ itemObj, buttonName }) {

   return (
      <figure className="list">
         <div className="thumb">
            <Image src={itemObj.property_image} className="img-fluid w-100" alt={itemObj.property_image_alt_tag} width="360" height="405" />
           {itemObj.isOffer && <div className='offers'>Offers</div>}
         </div>
         <figcaption>
            <h5><Link href={itemObj.url} className="">{itemObj.name}</Link></h5>
            <ul>
               {(itemObj.locationname && itemObj.propsector && itemObj.locationUrl) && <li><Link href={itemObj.locationUrl}>{itemObj.propsector}, {itemObj.locationname}</Link></li>}
            </ul>
           <div className="price">
               <FontAwesomeIcon icon={faIndianRupeeSign} /> <span>{itemObj.price}</span>{!isNaN(itemObj.price) && <small>Cr.*</small>}
           </div>
         </figcaption>
      </figure>
   )
}