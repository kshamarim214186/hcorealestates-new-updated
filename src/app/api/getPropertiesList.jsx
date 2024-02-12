export default async function getPropertiesList(page,sort,getDev,getBed,getPType,priceMin,priceMax) {
   const formData = new URLSearchParams();
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   formData.append('page', page);
   formData.append('sortcon', sort);
   formData.append('devurl', getDev);
   formData.append('bed', getBed);
   formData.append('propertytype', getPType);
   formData.append('pricemin', priceMin);
   formData.append('pricemax', priceMax);
   const finalresult = await fetch(process.env.API_URL+'properties/getAllPropertiesData/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();

}