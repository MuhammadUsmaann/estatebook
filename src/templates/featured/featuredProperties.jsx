import React from 'react'
import RightArrowsIcon from '../../components/Icons/rightArrowsIcon'
import Agent from '../../components/images/agent'
import Section3card1 from '../../components/images/section3card1'
import Section3card2 from '../../components/images/section3card2'
import Section3card3 from '../../components/images/section3card3'
import Section3card4 from '../../components/images/section3card4'
import Section3card5 from '../../components/images/section3card5'
import Section3card6 from '../../components/images/section3card6'
import Section3card7 from '../../components/images/section3card7'
import Section3card8 from '../../components/images/section3card8'
import AgentsCard from '../template content/agentsCard'

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
]
const featuredpropertieslist = [
    {
        picture: <Section3card1 />,
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
        picture: <Section3card2 />,
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
        picture: <Section3card3 />,
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
        picture: <Section3card4 />,
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

const otherspropertieslist = [
    {
        picture: <Section3card5 />,
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
        picture: <Section3card6 />,
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
        picture: <Section3card7 />,
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
        picture: <Section3card8 />,
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
const FeaturedProperties = () => {
    return (
        <div className='featured-properties'>
            {/* featured */}
            <p className='font-36 font-weight-700 text-light-black'>Featured <span className='text-skin-brown'>Properties</span></p>
            <div className='row m-0'>
                {
                    featuredpropertieslist.map((cards, index) => {
                        return (
                            <div className='col-lg-3 col-sm-6 col-12 p-0 mb-5' key={index}>
                                <div className='mr-sm-4 section3card text-light-black'>
                                    <div className='w-100 pb-4'>
                                        {cards.picture}
                                    </div>
                                    <p className='mb-5 font-14 font-weight-500 text-light-grey'>{cards.addedtime}</p>
                                    <p className='font-20 font-weight-600 mb-4 mt-2'>{cards.text}</p>
                                    <p className='font-18 font-weight-400 mb-3'>{cards.location}</p>
                                    <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                                        <p>{cards.bed}</p>
                                        <p>{cards.wroom}</p>
                                        <p>{cards.height}</p>
                                    </div>
                                    <p className='font-36 font-weight-600 mb-lg-4 mb-0 text-light-black'><span className='text-skin-brown'>AED </span>{cards.price}</p>
                                    <div className='d-flex align-items-sm-center justify-content-start flex-sm-row flex-column gap-16'>
                                        <button className='btn-brown-bg w-160px'>Call</button>
                                        <button className='premium-btn font-16 font-weight-600 h-48px w-160px'>Email</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            {/* others */}
            <p className='font-36 font-weight-700 text-light-black'>Others <span className='text-skin-brown'>Properties</span></p>
            <div className='row m-0'>
                {
                    otherspropertieslist.map((cards, index) => {
                        return (
                            <div className='col-lg-3 col-sm-6 col-12 p-0 mb-5' key={index}>
                                <div className='mr-sm-4 section3card text-light-black'>
                                    <div className='w-100 pb-4'>
                                        {cards.picture}
                                    </div>
                                    <p className='mb-5 font-14 font-weight-500 text-light-grey'>{cards.addedtime}</p>
                                    <p className='font-20 font-weight-600 mb-4 mt-2'>{cards.text}</p>
                                    <p className='font-18 font-weight-400 mb-3'>{cards.location}</p>
                                    <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                                        <p>{cards.bed}</p>
                                        <p>{cards.wroom}</p>
                                        <p>{cards.height}</p>
                                    </div>
                                    <p className='font-36 font-weight-600 mb-lg-4 mb-0 text-light-black'><span className='text-skin-brown'>AED </span>{cards.price}</p>
                                    <div className='d-flex align-items-sm-center justify-content-start flex-sm-row flex-column gap-16'>
                                        <button className='btn-brown-bg w-160px'>Call</button>
                                        <button className='premium-btn font-16 font-weight-600 h-48px w-160px'>Email</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            {/* agents */}
            <div className=' mb-4 d-flex w-100 justify-content-between align-items-center'>
                <p className='font-36 font-weight-700 text-light-black'>All <span className='text-skin-brown'>Agents</span></p>
                <p className='d-flex align-items-center text-light-black'>
                    <span className='pr-3'>View All</span>
                    <RightArrowsIcon />
                </p>
            </div>
            <div className='row m-0'>
                {agents.map((agent, index) => {
                    return (
                        <div className='col-lg-3 col-md-6 col-12 p-0 all-agents'>
                            <div className='section3card mr-3'>
                                <AgentsCard
                                    key={index}
                                    location={agent.location}
                                    text={agent.text}
                                    picture={agent.picture}
                                    index={index}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedProperties