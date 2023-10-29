import { SeoEngine } from '@/components/globals/SeoEngine'
import HomeAbout from '@/components/organisms/HomeAbout'
import HomeBanner from '@/components/organisms/HomeBanner'
import HomeBlog from '@/components/organisms/HomeBlog'
import HomeChooseOne from '@/components/organisms/HomeChooseOne'
import HomeMap from '@/components/organisms/HomeMap'
import HomePrograms from '@/components/organisms/HomePrograms'
import HomeSchedule from '@/components/organisms/HomeSchedule'
import { useNavbarContext } from '@/context/navbar.context'
import { BlogPost, BlogPostData } from '@/interfaces/blog'
import { Home, HomeData } from '@/interfaces/home'
import { Programs, ProgramsData } from '@/interfaces/programs'
import { baseApi, goToSection } from '@/lib'
import { GetStaticProps } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface homeProps {
   home: HomeData
   programs: ProgramsData[]
   blogPost: BlogPostData[]
}

export default function Home({ home, programs, blogPost }: homeProps) {
   const { scrolltoSectionFromOtherPage } = useNavbarContext()
   useEffect(() => {
      if (scrolltoSectionFromOtherPage !== '/contact') {
         goToSection(scrolltoSectionFromOtherPage)
      }
   }, [scrolltoSectionFromOtherPage])

   return (
      <main className="main-page">
         <HomeBanner
            title={home.home_prin.title}
            subtitle={home.home_prin.subtitle}
            text={home.home_prin.text}
            media={home.home_prin.media}
            title_mobile={home.home_prin.title_mobile}
         />
         <HomeChooseOne
            title={home.home_choose.title}
            subtitle={home.home_choose.subtitle}
            text_one={home.home_choose.text_one}
            text_two={home.home_choose.text_two}
            list_choose={home.home_choose.list_choose}
            image={home.home_choose.image}
         />
         <HomePrograms title={home.home_programs.title} subtitle={home.home_programs.subtitle} programs={programs} />
         <HomeSchedule
            home_schedule={home.home_schedule}
            home_list_schedule={home.home_list_schedule}
         />
         <HomeAbout
            title={home.home_choose_two.title}
            subtitle={home.home_choose_two.subtitle}
            text={home.home_choose_two.text}
            image={home.home_choose_two.image}
         />
         <HomeBlog title={home.home_blog.title} subtitle={home.home_blog.subtitle} blogPost={blogPost} />
         <HomeMap
            title={home.home_map.title}
            subtitle={home.home_map.subtitle}
            text={home.home_map.text}
            url_map={home.home_map.url_map}
            icon={home.home_map.icon}
         />
         
         <SeoEngine seo={home.seo} />
      </main>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   const [{ data: home }, { data: programs }, { data: blogPost }] = await Promise.all([
      baseApi.get<Home>('/home?populate=deep'),
      baseApi.get<Programs>('/programs?populate=deep'),
      baseApi.get<BlogPost>('/blogposts?populate=deep'),
   ])

   return {
      props: {
         home: home.data,
         programs: programs.data,
         blogPost: blogPost.data,
      },
      revalidate: 1,
   }
}
