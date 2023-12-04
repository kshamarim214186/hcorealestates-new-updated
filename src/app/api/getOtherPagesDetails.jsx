export default async function getOtherPagesDetails(url) {
   const formData = new URLSearchParams();
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   formData.append('url', url);
   const finalresult = await fetch(process.env.API_URL+'other-pages/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();

}