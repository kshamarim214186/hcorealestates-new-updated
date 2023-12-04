"use client";
import styles from "../scss/blogs.module.scss";
import getPostListByCondition from "../api/getPostListByCondition";
import BlogItems from "../components/blog-items";
import CustomPagination from "@/app/components/CustomPagination";

export default async function PostByCategory({ itemPost, page, currentpage }) { 
   const post = getPostListByCondition('blog_category_id', itemPost, page);
   const resultpost = await post;
   const postData = resultpost.BlogDataByCon;
   const totalrecords = resultpost.totalrecords;
   const perpagerecord = resultpost.perpagerecord;
   const number_of_page = Math.ceil(totalrecords / perpagerecord);

   return ( 
      <>
         <div className={styles.blogs__all}> 
            {postData.map((item) => (
               <BlogItems key={item.id} newsObject={item} />
            ))}
         </div>
         <div className="row">
            <div className="col-12 mt-4">
               <div className=" justify-content-center mt-3 mb-lg-0 mb-5">
                  <CustomPagination totalrecord={totalrecords} pagename="post/category" currentpage={currentpage} numberofpage={number_of_page} />
               </div>
            </div>
         </div>
      </>   
   );
}