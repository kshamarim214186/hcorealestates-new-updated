"use client";
import HeaderBlog from "../../../components/header-blog";
import PostCatListing from "../../../AllPages/PostCatListing";
import Footer from "../../../components/Footer";
import getHomeCompleteData from "../../../api/getHomeCompleteData";
import getLocationType from "../../../api/getLocationType";

export default async function AllBlogs({ params }) {
   const props = getHomeCompleteData();
   const result = await props;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;
   return (
      <>
         <HeaderBlog />
            <PostCatListing itemObj={params.postcat} />
         <Footer resultFooter={result} commercialData={commercialData} residentialData={residentialData} />
      </>
   );
}
