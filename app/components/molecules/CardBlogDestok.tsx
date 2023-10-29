import { BlogPostData } from '@/interfaces/blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface CardBlogProps {
   blogPost: BlogPostData
}
const CardBlogDestok = ({ blogPost }: CardBlogProps) => {
   return (
      <Link href={`/blog/${blogPost.slug}`}>
         <div className="CardBlogDestok">
            <div className="CardBlogDestok-image">
               <Image
                  src={blogPost.image.url}
                  alt={blogPost.image.name}
                  width={10000}
                  height={10000}
                  className="w-full h-full image "
               />

               <div className="CardBlogDestok-tips">
                  <span className="CardBlogDestok-span">TIPS</span>
               </div>
            </div>

            <div className="CardBlogDestok-contatext">
               <h1 className="CardBlogDestok-title">{blogPost.title}</h1>
               <div className="CardBlogDestok-content">
                  <ReactMarkdown>{blogPost.content.substring(0, 260)}</ReactMarkdown>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default CardBlogDestok
