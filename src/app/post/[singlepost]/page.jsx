"use client"
import HeaderBlog from "@/app/components/header-blog";
import PostPage from "../../AllPages/PostPage";
import Footer from "@/app/components/Footer";

export default function BlogSingle({ params }) {
   return <>
      <HeaderBlog />
         <PostPage itemObj={params.singlepost} />
      <Footer />
   </>
}