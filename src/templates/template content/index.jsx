import React from 'react'
import AllAgentsIcon from '../../components/Icons/allAgentsICon'
import FilterIcon from '../../components/Icons/filterIcon'
import PropertiesIcon from '../../components/Icons/propertiesIcon'
import RightArrowsIcon from '../../components/Icons/rightArrowsIcon'
import Agent from '../../components/images/agent'
import Propertylist from '../../components/images/propertylist'
import AgentsCard from './agentsCard'
import PropertyCard from './propertyCard'
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
]
const TemplateContent = () => {
    return (
        <div className='template-content'>
            <div className='row m-0 '>
                <div className='col-lg-8 col-12 mb-lg-0 mb-4 p-0 h-100'>
                    <div className='column-sub mr-lg-4'>
                        <div className='d-flex p16-24 align-items-sm-center align-items-start justify-content-between flex-sm-row flex-column mb-4 border-bottom border-skin'>
                            <div className='d-flex align-items-center'>
                                <PropertiesIcon />
                                <p className='font-24 font-weight-700 pl-2'>Properties List</p>
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
                                        addedtime={list.text}
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
                    <div className='column-sub'>
                        <div className=' p16-24 mb-4 border-bottom border-skin d-flex w-100 justify-content-between align-items-center'>
                            <div className='d-flex align-items-center font-18 font-weight-400'>
                                <AllAgentsIcon />
                                <p className='font-24 font-weight-700 pl-2'>All Agents</p>
                            </div>
                            <button className='d-flex align-items-centerF text-skin-brown bg-transparent btn-brown-bg'>
                                <span className='pr-3'>View All</span>
                                <RightArrowsIcon />
                            </button>
                        </div>

                        <div className='row m-0 list-scroll'>
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

export default TemplateContent