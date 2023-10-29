import { Container } from '@/components/globals'
import { SeoEngine } from '@/components/globals/SeoEngine'
import BreadCumb from '@/components/molecules/BreadCumb'
import CardBlog from '@/components/molecules/CardBlog'
import DetailsBlogDes from '@/components/molecules/DetailsBlogDes'
import { BlogPost, BlogPostData } from '@/interfaces/blog'
import { Blogs, BlogsData } from '@/interfaces/blogs'
import { baseApi } from '@/lib'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface BlogDetailsProps {
   blogPosts: BlogPostData[]
   blog: BlogPostData
   blogs: BlogsData
}

const Details = ({ blogPosts, blog, blogs }: BlogDetailsProps) => {
   const formate = new Date(blog.date)

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

   const breadCumbMenu = [
      {
         label: blog.title,
         url: `/${blog.slug}`,
      },
   ]
   const blogListAside = blogPosts.slice(0, 3).find((b) => b.title === blog.title)
      ? blogPosts.filter((blogs) => blogs.title !== blog.title).slice(0, 3)
      : blogPosts.slice(0, 3)

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

   console.log(blogPosts.length)
   return (
      <div className="main-page">
         <Container>
            {isMobile ? (
               <div>
                  <div className="blogDetails">
                     <div className="blogDetails-breadCumbMenu">
                        <BreadCumb breadCumbMenu={breadCumbMenu} />
                     </div>
                     <div className="blogDetails-containerprin">
                        <div className="blogDetails-conta">
                           <div>
                              <div className="blogDetails-image">
                                 <Image
                                    src={blog.image.url}
                                    width={1000}
                                    height={1000}
                                    alt=""
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="blogDetails-date">
                                 <i className="icon-calendarone"></i>
                                 <span>{formattedDate}</span>
                              </div>

                              <h1 className="blogDetails-title">{blog.title}</h1>
                              <div className="blogDetails-content">
                                 <ReactMarkdown>{blog.content}</ReactMarkdown>
                              </div>
                           </div>
                        </div>

                        {blogPosts.length > 1 && (
                           <div className="blogDetails-blog">
                              <h2 className="blogDetails-blogtitle">{blogs.title}</h2>
                              <h3 className="blogDetails-blogsubtitle">{blogs.subtitleDetails}</h3>
                              <div className="blogDetails-blogimg">
                                 <Image
                                    src={'/vector.png'}
                                    width={1000}
                                    height={1000}
                                    alt=""
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </div>
                        )}

                        <div className="blogDetails-containercard">
                           {blogListAside.slice(0, 3).map((blogs, index) => (
                              <CardBlog key={index} blogpost={blogs} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ) : blogPosts.length > 1 ? (
               <div>
                  <div className="blogDetails">
                     <div className="blogDetails-breadCumbMenu">
                        <BreadCumb breadCumbMenu={breadCumbMenu} />
                     </div>
                     <div className="blogDetails-containerprin">
                        <div className="blogDetails-conta">
                           <div>
                              <div className="blogDetails-image">
                                 <Image
                                    src={blog.image.url}
                                    width={1000}
                                    height={1000}
                                    alt=""
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="blogDetails-date">
                                 <i className="icon-calendarone"></i>
                                 <span>{formattedDate}</span>
                              </div>

                              <h1 className="blogDetails-title">{blog.title}</h1>
                              <div className="blogDetails-content">
                                 <ReactMarkdown>{blog.content}</ReactMarkdown>
                              </div>
                           </div>
                        </div>

                        <div className="blogDetails-blog">
                           <h2 className="blogDetails-blogtitle">{blogs.title}</h2>
                           <h3 className="blogDetails-blogsubtitle">{blogs.subtitleDetails}</h3>
                           <div className="blogDetails-blogimg">
                              <Image
                                 src={'/vector.png'}
                                 width={1000}
                                 height={1000}
                                 alt=""
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>

                        <div className={blogPosts.length === 2 ? 'HomeBlogs-listflex' : ' blogDetails-containercard'}>
                           {blogListAside.slice(0, 3).map((blogs, index) => (
                              <CardBlog key={index} blogpost={blogs} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <DetailsBlogDes blog={blog} />
            )}
         </Container>
         <SeoEngine seo={blog.seo} />
      </div>
   )
}

export default Details

export const getStaticPaths: GetStaticPaths = async () => {
   const { data: blogs } = await baseApi.get<BlogPost>('/blogposts?populate=deep')
   const paths = blogs.data.map(({ slug }) => ({ params: { slug } }))
   return {
      paths,
      fallback: 'blocking',
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const { slug } = params as { slug: string }
   const [{ data: blogPosts }, { data: blog }, { data: blogs }] = await Promise.all([
      baseApi.get<BlogPost>('/blogposts?populate=deep'),
      baseApi.get<BlogPost>(`/blogposts?filters[slug][$eq]=${slug}&populate=deep`),
      baseApi.get<Blogs>(`/blog?populate=deep`),
   ])

   return {
      props: {
         blogPosts: blogPosts.data,
         blog: blog.data[0],
         blogs: blogs.data,
      },
      revalidate: 1,
   }
}
