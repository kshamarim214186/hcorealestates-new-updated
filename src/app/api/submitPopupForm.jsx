export default async function submitPopupForm(name,email,country,mobileNo) {
   const formData = new URLSearchParams();
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   formData.append('name', name);
   formData.append('email', email);
   formData.append('country', country);
   formData.append('mobileNo', mobileNo);
   const finalresult = await fetch(process.env.API_URL+'users/submitQueryForm/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();

}