"use client";
import HeaderBlog from "../../../components/header-blog";
import PostCatListing from "../../../AllPages/PostCatListing";
import Footer from "../../../components/Footer";

export default function AllBlogs({ params }) {
  return (
    <>
      <HeaderBlog />
         <PostCatListing itemObj={params.postcat} />
      <Footer />
    </>
  );
}
