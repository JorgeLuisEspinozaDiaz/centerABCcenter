import { BlogPostData } from '@/interfaces/blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardBlogProps {
   blogpost: BlogPostData
}
const CardBlog = ({ blogpost }: CardBlogProps) => {
   const { title, date, image, slug } = blogpost

   const formate = new Date(date)

   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]
   const monthIndex = formate.getMonth()
   const month = months[monthIndex]

   const day = formate.getDate()
   const year = formate.getFullYear()

   const formattedDate = `${month} ${day}, ${year}`

   return (
      <Link href={`/blog/${slug}`}>
         <div className="CardBlog">
            <div className="CardBlog-image">
               <Image src={image.url} alt="" width={1000} height={1000} className="w-full h-full object-cover img" />
            </div>
            <div className="CardBlog-container">
               <div className="CardBlog-date">
                  <i className="CardBlog-calendar icon-calendarone "></i>
                  <span className="CardBlog-calendartex">{formattedDate}</span>
               </div>
               <h2 className="CardBlog-title">{title}</h2>

               <hr className="CardBlog-line" />

               <div className="CardBlog-buttom">
                  <span className="CardBlog-buttomspan">Read More</span>
                  <i className="CardBlog-i icon-right"></i>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default CardBlog
