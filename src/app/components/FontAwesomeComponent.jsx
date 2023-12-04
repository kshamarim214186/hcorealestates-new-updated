import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMusic, faBadgePercent, faBank, faCartShopping, faCheck, faIndianRupeeSign, faPhoneVolume, faTimeline } from "@fortawesome/pro-regular-svg-icons";
import getIconList from "../api/getIconList";

export default async function FontAwesomeComponent({ iconKey }) {
   const iconMapping = {
      coffee: faCoffee,
      music: faMusic,
   };
   //console.log(iconMapping);

   const getIcons = getIconList();
   const iconData = await getIcons;
   const finaliconData = iconData.icons;
   return (
      <>
         {iconMapping[iconKey] &&
            <FontAwesomeIcon icon={iconMapping[iconKey]} /> 
         }     
      </>
   );
}
