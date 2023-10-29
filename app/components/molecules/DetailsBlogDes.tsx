import React from 'react'
import { Container } from '../globals'

import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import BreadCumb from './BreadCumb'
import { BlogPost, BlogPostData } from '@/interfaces/blog'

interface DetailsBlogDesProps {
   blog: BlogPostData
}
const DetailsBlogDes = ({ blog }: DetailsBlogDesProps) => {
   const breadCumbMenu = [
      {
         label: blog.title,
         url: `/${blog.slug}`,
      },
   ]
   return (
      <div className="DetailsBlogDes">
         <div className="DetailsBlogDes-breadCumbMenu">
            <BreadCumb breadCumbMenu={breadCumbMenu} />
         </div>

         <div className="DetailsBlogDes-image">
            <Image src={blog.image.url} alt="" height={1000} width={10000} className="w-full h-full" />

            <div className="DetailsBlogDes-Tips">
               <span className="DetailsBlogDes-span">TIPS</span>
            </div>
         </div>

         <div className="DetailsBlogDes-containertext">
            <h1 className="DetailsBlogDes-title">{blog.title}</h1>

            <div className="DetailsBlogDes-content">
               <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
         </div>
      </div>
   )
}

export default DetailsBlogDes
