import SinglePropSection from "../UI/SinglePropSection";

export default async function BuildersProjectByConn({ itemObj }) {   

   const projects = await getProjectByPropId(itemObj);
   const property = projects.propdetail;
   
   return ( 
      <>  
         <SinglePropSection itemObj={property} />
      </>
  );
}

async function getProjectByPropId(propId) {
   const formData = new URLSearchParams();   
   formData.append('column', 'id');
   formData.append('propId', propId);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'builders/getprojectbyPropId/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });   
   return await finalresult.json();
}