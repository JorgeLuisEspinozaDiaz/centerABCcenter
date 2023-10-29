import React, { useEffect, useState } from 'react'
import { Container } from '../globals'
import Image from 'next/image'
import { BlogPostData } from '@/interfaces/blog'
import CardBlog from '../molecules/CardBlog'
import { Element } from 'react-scroll'
import CardBlogDestok from '../molecules/CardBlogDestok'

interface HomeBlogProps {
   title: string
   subtitle: string
   blogPost: BlogPostData[]
}
const HomeBlog = ({ title, subtitle, blogPost }: HomeBlogProps) => {
   const [isMobile, setIsMobile] = useState(false)

   const MOBILE_BREAKPOINT = 1199
   const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
   }

   useEffect(() => {
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])
   return (
      <div className="HomeBlog-fond">
         <div className="HomeBlog-start">
            <Image src={'/startss.png'} alt="" width={1000} height={1000} />
         </div>
         <Container>
            <section className="HomeBlog" data-section={'/blog'} id="/blog">
               <h2 className="HomeBlog-title">{title}</h2>
               <h1 className="HomeBlog-subtitle">{subtitle}</h1>
               <div className="HomeBlog-image">
                  <Image src={'/vector.png'} alt="" width={1000} height={1000} />
               </div>

               <div
                  className={
                     blogPost.length === 2
                        ? 'HomeBlogs-listflex HomeBlog-container-card'
                        : blogPost.length > 1
                        ? 'HomeBlog-container-card'
                        : 'HomeBlog-container-card blogCardsflex'
                  }
               >
                  {isMobile
                     ? blogPost.map((blog, index) => <CardBlog key={index} blogpost={blog} />)
                     : blogPost.length > 1
                     ? blogPost.map((blog, index) => <CardBlog key={index} blogpost={blog} />)
                     : blogPost.map((blogPost) => <CardBlogDestok key={blogPost.id} blogPost={blogPost} />)}
               </div>
            </section>
         </Container>
      </div>
   )
}

export default HomeBlog
