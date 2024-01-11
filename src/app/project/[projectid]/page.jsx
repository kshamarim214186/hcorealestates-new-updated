import Header from "../../components/Header";
import ProjectPage from "../../AllPages/ProjectPage";
import Footer from "../../components/Footer";
import getHomeCompleteData from "../../api/getHomeCompleteData";
import getLocationType from "../../api/getLocationType";

export default async function Page({ params }) {
   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;
   
   const properties = getProjectDetails(params.projectid);
   const resultProp = await properties;
   const pageName = 'project';
   return (
      <>
      <Header resultHeader={result} commercialData={commercialData} residentialData={residentialData} />
         <ProjectPage itemObj={resultProp} />
      <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} pageName={pageName} />
      </>
   );
}

async function getProjectDetails(projectid) {
   //const  apiUrl = 'https://www.api.hcorealestates.org/';
   const formData = new URLSearchParams();

   formData.append('propurl', projectid);
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'properties/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}