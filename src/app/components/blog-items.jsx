import Image from "next/image"
import Link from "next/link"
import ArrowButton from "../UI/ArrowButton"

export default function BlogItems({ newsObject }) {
   return(
      <figure className="news__item">
         <Image src="/images/home/blog-01.jpg" className="img-fluid w-100" alt={newsObject.name} width={355} height={215} />
         <figcaption>
         <h4>
            <Link href={newsObject.url} className="stretched-link">
               {newsObject.name}
            </Link>
         </h4>
         <p>{newsObject.shortdesc}</p>
         <ArrowButton buttonName="Read More" />
         </figcaption>
      </figure>
   )
}