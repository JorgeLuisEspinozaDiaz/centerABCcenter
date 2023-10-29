import { Picture } from '@/interfaces/shared'
import Image from 'next/image'
import React from 'react'
import ButtomWithe from '../atoms/ButtomWithe'
import { Container } from '../globals'
import { Element } from 'react-scroll'
import { HomeSchedule, HomeListSchedule } from '@/interfaces/home';

interface HomeScheduleProps {
    home_schedule: HomeSchedule
    home_list_schedule: HomeListSchedule[]
 }
 const HomeSchedule = ({ home_schedule, home_list_schedule }: HomeScheduleProps) => {
    return (
       <section className="HomeSchedule">
            <div className="HomeSchedule-icon-1">
                <Image src={'/bg-stars.png'} alt="stars" width={150} height={20} />
            </div>
            <div className="HomeSchedule-icon-2">
                <Image src={'/bg-children.png'} alt="children" width={150} height={20} />
            </div>
            <Container>
                <div className="HomeSchedule-head">
                    
                    <h2 className="HomeSchedule-title">{home_schedule.title}</h2>
                    <div className="HomeSchedule-image">
                        <Image src={'/vector.png'} alt="ico" width={150} height={20} />
                    </div>
                    <p className="HomeSchedule-text">{home_schedule.content}</p>
                </div>
                <div className="HomeSchedule-list">
                    {home_list_schedule.map(({ title, schedule, slug, img, list_schedule }, index) => (
                        <div className={`HomeSchedule-schedule ${slug ? `title-${slug}` : ''}`} key={index} >
                            <div className="HomeSchedule-schedule-head">
                                <div className="HomeSchedule-head-circles">
                                    {Array(5).fill(null).map((_, spanindex) => (
                                        <span key={spanindex}></span>
                                    ))}
                                </div>

                                <h3>
                                    <figure>
                                        <Image src={img.url} alt={title} width={30} height={30} />
                                    </figure>
                                    {title}
                                </h3>
                                <p>{schedule}</p>
                            </div>
                            <div className="HomeSchedule-schedule-content">
                                <ul className="HomeSchedule-schedule-list">
                                    {list_schedule.map(({ title_list, hour, content }, outerIndex) => (
                                        <li className="HomeSchedule-schedule-item" key={outerIndex}>
                                            <div className="HomeSchedule-schedule-item-hour">{hour}</div>
                                            <div className="HomeSchedule-schedule-item-info">
                                                <h4>{title_list}</h4>
                                                <p>
                                                    {content.split('/').map((part, innerIndex) => (
                                                        <span key={innerIndex} className={innerIndex === 1 ? 'after-slash' : ''}>
                                                            {part}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
       </section>
    )
 }
 
 export default HomeSchedule