import React from 'react'
import AllAgentsIcon from '../../components/Icons/allAgentsICon'
import BrownlocationIcon from '../../components/Icons/brownlocationIcon'
import FilterIcon from '../../components/Icons/filterIcon'
import MailIcon from '../../components/Icons/mailIcon'
import PhoneIcon from '../../components/Icons/phone'
import PropertiesIcon from '../../components/Icons/propertiesIcon'
import RightArrowsIcon from '../../components/Icons/rightArrowsIcon'
import Agent from '../../components/images/agent'
import Propertylist from '../../components/images/propertylist'
import AgentsCard from '../template1/template content/agentsCard'
import PropertyCard from '../template1/template content/propertyCard'
import santanaImage from '../../components/images/santanaImage.png'
import Premiumicon from '../../components/Icons/premiumicon'
import { MyMapComponent } from '../templatesmain'
import CompanyInfo from '../../components/Icons/companyInfo'

const propertieslist = [
    {
        picture: <Propertylist />,
        text: "5,000 Sq. Ft. Modern Spanish Bungalow For Sale in Za'abeel 2, Dubai ",
        location: "Za'abeel 2, Dubai",
        properties: '40 Properties',
        price: ' 5,00,000',
        bed: 6,
        wroom: 4,
        addedtime: 'Added 4 hours ago',
        height: '5000'
    },
    {
        picture: <Propertylist />,
        text: "5,000 Sq. Ft. Modern Spanish Bungalow For Sale in Za'abeel 2, Dubai ",
        location: "Za'abeel 2, Dubai",
        properties: '40 Properties',
        price: ' 5,00,000',
        bed: 6,
        wroom: 4,
        addedtime: 'Added 4 hours ago',
        height: '5000'
    },
    {
        picture: <Propertylist />,
        text: "5,000 Sq. Ft. Modern Spanish Bungalow For Sale in Za'abeel 2, Dubai ",
        location: "Za'abeel 2, Dubai",
        properties: '40 Properties',
        price: ' 5,00,000',
        bed: 6,
        wroom: 4,
        addedtime: 'Added 4 hours ago',
        height: '5000'
    },
    {
        picture: <Propertylist />,
        text: "5,000 Sq. Ft. Modern Spanish Bungalow For Sale in Za'abeel 2, Dubai ",
        location: "Za'abeel 2, Dubai",
        properties: '40 Properties',
        price: ' 5,00,000',
        bed: 6,
        wroom: 4,
        addedtime: 'Added 4 hours ago',
        height: '5000'
    },
    {
        picture: <Propertylist />,
        text: "5,000 Sq. Ft. Modern Spanish Bungalow For Sale in Za'abeel 2, Dubai ",
        location: "Za'abeel 2, Dubai",
        properties: '40 Properties',
        price: ' 5,00,000',
        bed: 6,
        wroom: 4,
        addedtime: 'Added 4 hours ago',
        height: '5000'
    },

]
const agents = [
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    }
    ,
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    }
    ,
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },
    {
        text: 'Tony Stark',
        location: 'RC Real Estate Pty Ltd',
        picture: <Agent />
    },

]
const Template6Content = () => {
    return (
        <div className='template-content'>
            <div className='d-flex flex-md-row flex-column align-items-md-end align-items-start template6section1'>
                <img src={santanaImage} className="teamname-s1"/>
                <div className='pl-md-5 d-flex flex-column align-items-start'>
                    <div className='d-flex align-items-lg-center pb-2 align-items-start flex-lg-row flex-column justify-content-between'>
                        <p className='font-36 font-weight-700  mr-5'> Santana Team</p>
                        <button className='premium-btn ml-xl-5 p-3 mr-3 font-12 font-weight-600 mb-sm-0 mb-3'> <Premiumicon /><span className='pl-1'>Verified Company</span></button>

                    </div>
                    <div className='d-flex align-items-lg-start align-items-start align-items-sm-center  gap-16 flex-lg-column flex-sm-row flex-column'>
                        <div className='font-18  font-weight-400 d-flex align-items-center'>
                            <BrownlocationIcon />
                            <span className='pl-3'>Block cc, DHA Phase 6, Lahore</span>
                        </div>
                        <div className='font-18 font-weight-400 d-flex align-items-center'>
                            <PropertiesIcon />
                            <span className='pl-3'>40 Properties</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row m-0 '>
                <div className='col-lg-8 col-12 mb-lg-0 mb-4 p-0 h-100'>
                    <div className='column-sub mr-lg-4 '>
                        <div className='d-flex py-3 mx-4 align-items-sm-center align-items-start justify-content-between flex-sm-row flex-column mb-4 bb-2px border-skin'>
                            <div className='d-flex align-items-center'>
                                <PropertiesIcon />
                                <p className='font-24 font-weight-700 pl-2 text-light-black'>Properties List</p>
                            </div>
                            <button className='d-flex align-items-center mt-sm-0 mt-2 btn-brown-bg'>
                                <FilterIcon /> <span className='pl-2'>Filter</span>
                            </button>
                        </div>

                        <div className='list-scroll'>
                            {propertieslist.map((list, index) => {
                                return (

                                    <PropertyCard key={index}
                                        price={list.price}
                                        location={list.location}
                                        text={list.text}
                                        bed={list.bed}
                                        wroom={list.wroom}
                                        height={list.height}
                                        addedtime={list.addedtime}
                                        picture={list.picture}
                                        index={index}
                                    />

                                )
                            })}
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 p-0 h-100'>
                    <div className='column-sub px-4 pb-4 mb-4'>
                        <div className='px-0 p16-24 mb-4 bb-2px border-skin w-100'>
                            <button className='py-2 text-light-black d-flex align-items-center font-18 font-weight-400'>
                                <CompanyInfo />
                                <p className='font-24 font-weight-700 pl-2'>Company Info</p>
                            </button>
                        </div>
                        <div className=''>
                            <div className='d-flex flex-column align-items-center'>
                                <img src={santanaImage} />
                                <p className='font-36 font-weight-700 pb-2 mx-auto w-max-content'> Santana Team</p>
                                <div className='d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-around mb-lg-5 mb-3 '>
                                    <button className='premium-btn p-3 h-40px mr-3 font-12 font-weight-600 mb-sm-0 mb-3'> <Premiumicon /><span className='pl-1'>Verified Company</span></button>
                                    <div className='d-flex align-items-center gap-8'>
                                        <div className='bg-skin-brown p-2 rounded-8'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17202 17.892 7.96802L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.73198 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='bg-skin-brown p-2 rounded-8'>
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 0H6C2.4 0 0 2.5 0 6.25V13.75C0 17.5 2.4 20 6 20H18C21.6 20 24 17.5 24 13.75V6.25C24 2.5 21.6 0 18 0ZM14.268 11.2875L11.304 13.1375C10.104 13.8875 9.11997 13.3125 9.11997 11.85V8.13751C9.11997 6.67501 10.104 6.10001 11.304 6.85001L14.268 8.69999C15.408 9.42499 15.408 10.575 14.268 11.2875Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='bg-skin-brown p-2 rounded-8'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.9803 11.2911C23.5723 4.33197 17.2491 -1.03133 9.96608 0.168518C4.95073 0.996411 0.931262 5.06386 0.151363 10.0792C-0.304578 12.9828 0.295371 15.7305 1.6032 17.9982L0.535322 21.9697C0.295353 22.8696 1.12322 23.6855 2.01111 23.4335L5.92261 22.3536C7.69838 23.3975 9.77411 23.9974 11.9938 23.9974C18.7609 23.9974 24.3762 18.0342 23.9803 11.2911ZM17.8611 16.4624C17.7531 16.6784 17.6211 16.8824 17.4531 17.0743C17.1531 17.3983 16.8292 17.6382 16.4692 17.7822C16.1093 17.9382 15.7133 18.0102 15.2934 18.0102C14.6815 18.0102 14.0216 17.8662 13.3376 17.5663C12.6417 17.2663 11.9579 16.8703 11.2739 16.3784C10.578 15.8745 9.9301 15.3105 9.30618 14.6986C8.68226 14.0747 8.13031 13.4148 7.62637 12.7309C7.13444 12.0469 6.73851 11.363 6.45055 10.6791C6.16258 9.99522 6.01862 9.33533 6.01862 8.71141C6.01862 8.30346 6.0906 7.90751 6.23458 7.54756C6.37857 7.1756 6.60656 6.83965 6.93051 6.53969C7.31447 6.15574 7.73438 5.97576 8.17833 5.97576C8.3463 5.97576 8.51425 6.01175 8.67023 6.08374C8.82621 6.15573 8.97022 6.26372 9.07821 6.4197L10.47 8.38743C10.578 8.5434 10.662 8.6754 10.71 8.80738C10.77 8.93936 10.794 9.05934 10.794 9.17933C10.794 9.32331 10.746 9.46731 10.662 9.61129C10.578 9.75527 10.47 9.89924 10.326 10.0432L9.87008 10.5231C9.79809 10.5951 9.77414 10.6671 9.77414 10.7631C9.77414 10.8111 9.78609 10.8591 9.79809 10.9071C9.82209 10.9551 9.83413 10.9911 9.84613 11.0271C9.95411 11.2311 10.1461 11.483 10.41 11.795C10.686 12.1069 10.974 12.4309 11.286 12.7429C11.6099 13.0668 11.9219 13.3548 12.2458 13.6307C12.5578 13.8947 12.8217 14.0747 13.0257 14.1827C13.0617 14.1947 13.0977 14.2187 13.1337 14.2307C13.1817 14.2547 13.2297 14.2547 13.2897 14.2547C13.3977 14.2547 13.4697 14.2187 13.5417 14.1467L13.9975 13.6908C14.1535 13.5348 14.2976 13.4268 14.4295 13.3548C14.5735 13.2708 14.7055 13.2228 14.8615 13.2228C14.9815 13.2228 15.1014 13.2468 15.2334 13.3068C15.3654 13.3668 15.5094 13.4388 15.6533 13.5468L17.6451 14.9626C17.8011 15.0706 17.909 15.2026 17.981 15.3465C18.041 15.5025 18.077 15.6465 18.077 15.8145C18.0051 16.0184 17.9571 16.2464 17.8611 16.4624Z" fill="white" />
                                            </svg>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className=' mb-5'>
                                <div className='font-18 pb-3 font-weight-400 d-flex align-items-center'>
                                    <PhoneIcon />
                                    <span className='pl-3'>+91 012 3456 789</span>
                                </div>
                                <div className='font-18 pb-3 font-weight-400 d-flex align-items-center'>
                                    <MailIcon />
                                    <span className='pl-3'>santanateam@email.com</span>
                                </div>
                                <div className='font-18 pb-3 font-weight-400 d-flex align-items-center'>
                                    <PropertiesIcon />
                                    <span className='pl-3'>40 Properties</span>
                                </div>
                                <div className='font-18 font-weight-400 d-flex align-items-center'>
                                    <BrownlocationIcon />
                                    <span className='pl-3'>Block cc, DHA Phase 6, Lahore</span>
                                </div>
                            </div>
                            <MyMapComponent
                                googleMapURL="https://maps.googleapis.com/maps/api/js"
                                loadingElement={<div style={{ borderRadius: '8px', height: `100%` }} />}
                                containerElement={<div style={{ height: `160px` }} />}
                                mapElement={<div style={{ borderRadius: '8px', height: `100%` }} />}
                            />
                        </div>

                    </div>



                    <div className='column-sub'>
                        <div className='p16-24 px-0 mx-4 mb-4 bb-2px border-skin d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center font-18 font-weight-400'>
                                <AllAgentsIcon />
                                <p className='font-24 font-weight-700 pl-2 text-light-black'>All Agents</p>
                            </div>
                            <div className='d-flex align-items-center text-skin-brown py-2'>
                                <span className='pr-3'>View All</span>
                                <RightArrowsIcon />
                            </div>
                        </div>

                        <div className='row m-0 list-scroll-720'>
                            {agents.map((agent, index) => {
                                return (
                                    <div className='col-lg-12 col-md-6 col-12 p-0 all-agents'>
                                        <AgentsCard
                                            key={index}
                                            location={agent.location}
                                            text={agent.text}
                                            picture={agent.picture}
                                            index={index}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template6Content