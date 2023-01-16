import React from 'react'
import RightArrowsIcon from '../components/Icons/rightArrowsIcon'
import SearchIcon from '../components/Icons/searchIcon'
import Section2Card1 from '../components/images/section2Card1'
import Section2Card2 from '../components/images/section2Card2'
import Section2Card3 from '../components/images/section2Card3'
import Section2Card4 from '../components/images/section2Card4'

import Section3card1 from '../components/images/section3card1'
import Section3card2 from '../components/images/section3card2'
import Section3card3 from '../components/images/section3card3'
import Section3card4 from '../components/images/section3card4'
import Section3card5 from '../components/images/section3card5'
import Section3card6 from '../components/images/section3card6'
import Section3card7 from '../components/images/section3card7'
import Section3card8 from '../components/images/section3card8'
import Section4image from '../components/images/section4image'

import Agent from '../components/images/agent'
const section3cards = [
    {
        picture: <Section3card1 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card2 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card3 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card4 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card5 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card6 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card7 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
    {
        picture: <Section3card8 />,
        text: 'RC Real Estate Pvt Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        properties: '40 Properties'
    },
]

const section5blog = [
    {
        picture: <Section3card1 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card2 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card3 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card4 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card5 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card6 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card7 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card8 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card4 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card5 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card6 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
    {
        picture: <Section3card7 />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ....'
    },
]

const ceoCLub = [
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    },
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    },
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    },
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    },
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    }
    ,
    {
        text: 'RC Real Estate Pty Ltd',
        location: 'Block cc, DHA Phase 6, Lahore',
        picture: <Agent />
    }
]
const LandingContent = () => {
    return (
        <div className='landing-content'>
            <div className='section-1'>
                <h1 className='font-72 font-weight-800 pb-4 text-center text-white w-75'>Just <span className='text-skin-brown'>One Click</span> And Get Your’s
                    <span className='text-skin-brown'> Desired Property</span></h1>
                <p className='text-center w-50 pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>

                <div className='form-div'>
                    <form>
                        <p className='font-24 font-weight-600 pb-4 text-skin border-bottom border-skin w-max-content'>Search Property </p>
                        <div className='row m-0 pt-4'>
                            <div className='col-md-8 col-12 p-0 position-relative'>
                                <input placeholder='Company ID' className='search-bar w-100' />
                                <button className='search-bar-icon'>
                                    <SearchIcon />
                                </button>
                            </div>
                            <div className='col-4 mt-md-0  mt-3 pl-md-3 p-0'><button className='btn-brown-bg w-100'>Search</button></div>
                        </div>
                    </form>
                </div>

            </div>

            <div className='section-2'>
                <div className='text-center'>
                    <h1 className=' font-weight-700 pb-3 text-center text-light-black font-36'>What You Will Get  <span className='text-skin-brown'>On Estate Book</span></h1>
                    <div className='skin-line m-auto '></div>
                    <p className='font-18 font-weight-400 text-grey pt-4 pb-5 w-50 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className='d-flex justify-content-center align-items-center section2-cards flex-md-row  flex-column'>
                        <div className='d-flex justify-content-center flex-xl-row  flex-column align-items-center'>
                            <div className='custom-card mr-3 mb-xl-0 mb-3'>
                                <Section2Card1 />
                                <p className='pt-3 font-24 font-weight-600'>Smart Property Finder</p>

                            </div>
                            <div className='custom-card mr-3 mb-md-0 mb-3'>
                                <Section2Card2 />
                                <p className='pt-3 font-24 font-weight-600'>Verified Companies & Agents</p>

                            </div>
                        </div>
                        <div className='d-flex justify-content-center flex-xl-row flex-column align-items-center'>
                            <div className='custom-card mr-3 mb-xl-0 mb-3'>
                                <Section2Card3 />
                                <p className='pt-3 font-24 font-weight-600'>Globally Property Finder </p>

                            </div>
                            <div className='custom-card mr-3 mb-md-0 mb-3'>
                                <Section2Card4 />
                                <p className='pt-3 font-24 font-weight-600'>Smart Area
                                    Guides</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='section-3'>
                <div className='text-left'>
                    <h1 className=' font-weight-700 pb-3 text-light-black font-36'>Featured <span className='text-skin-brown'>Companies</span></h1>
                    <div className='skin-line'></div>

                    <div className='mb-4 mt-5 d-flex w-100 justify-content-between align-items-center'>
                        <p className='font-18 font-weight-400 text-grey pt-4 pb-5 w-50 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='d-flex align-items-end text-skin-brown font-16 font-weight-600'>
                            <span className='pr-2'>View All</span>
                            <RightArrowsIcon />
                        </div>
                    </div>

                    <div className='row m-0'>
                        {
                            section3cards.map((cards, index) => {
                                return (
                                    <div className='col-lg-3 col-sm-6 col-12 p-0 mb-5' key={index}>
                                        <div className='mr-sm-4 section3card text-light-black'>
                                            <div className='w-100 pb-4 position-relative'>
                                                <p className='featured-btn text-white'>Featured</p>
                                                {cards.picture}
                                            </div>
                                            <p className='pb-3 font-24 font-weight-700'>{cards.text}</p>
                                            <p className='pb-2 font-14 font-weight-400'>{cards.location}</p>
                                            <p className='font-14 font-weight-400'>{cards.properties}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>



                </div>
            </div>

            <div className='section-4'>

                <div className='row m-0 flex-lg-row flex-column-reverse'>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex mt-lg-0 mt-4 flex-column h-100 justify-content-between'>

                            <div>
                                <p className='font-18 text-skin-brown pb-2 font-weight-600'>We Offer</p>
                                <p className='font-36 font-weight-700 text-light-black'>Customised <span className='text-skin-brown'>Company’s Profile</span>
                                    Builder </p>
                                <div className='skin-line mt-3 mb-4'></div>
                                <p className='font-16 font-weight-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <button className='w-max-content mt-5 btn-brown-bg font-16 font-weight-600 plan-btn'><span className='pr-3'>View Plans</span> <RightArrowsIcon /> </button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <Section4image />
                    </div>
                </div>




            </div>

            <div className='section-5'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className=' font-weight-700 pb-3 text-light-black  font-36'>Estate Book  <span className='text-skin-brown'>Community</span></h1>
                        <div className='skin-line m-auto '></div>
                    </div>
                    <div className='row m-0 mt-5'>
                        <div className='col-lg-4 col-12 h-100'>
                            <div className='section3card mb-lg-0 mb-4'>
                                <div className='d-flex w-100 justify-content-between mb-48px pb-4 align-items-center border-bottom border-skin'>
                                    <p className='font-24 font-weight-700 text-light-black  w-50 '>CEO’s Club</p>
                                    <div className='d-flex align-items-center text-skin-brown font-16 font-weight-600'>
                                        <span className='pr-2'>View All</span>
                                        <RightArrowsIcon />
                                    </div>
                                </div>
                                <div>
                                    {ceoCLub.map((ceo, index) => {
                                        return (
                                            <div key={index} className='d-flex justify-content-start align-items-center mb-40px'>
                                                {ceo.picture}
                                                <div className='pl-3'>
                                                    <p className='pb-1 font-20 font-weight-600'>{ceo.text}</p>
                                                    <p>{ceo.location}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-12 h-100'>
                            <div className='section3card'>
                                <div className=' d-flex w-100 justify-content-between mb-48px pb-4 align-items-center border-bottom border-skin'>
                                    <p className='font-24 font-weight-700 text-light-black w-50 '>Blogs</p>
                                    <div className='d-flex align-items-center text-skin-brown font-16 font-weight-600'>
                                        <span className='pr-2'>View All</span>
                                        <RightArrowsIcon />
                                    </div>
                                </div>
                                <div className='row m-0'>
                                    {
                                        section5blog.map((cards, index) => {
                                            return (
                                                <div className='col-xl-3 col-lg-4 col-sm-6 col-12 p-0 mb-3' key={index}>
                                                    <div className='mr-4 text-light-black'>
                                                        <div className='w-100 pb-2 position-relative'>
                                                            <p className='featured-btn text-white'>Featured</p>
                                                            {cards.picture}
                                                        </div>
                                                        <p className='pb-2 font-14 font-weight-400'>{cards.text}</p>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>







                </div>
            </div>
        </div>
    )
}

export default LandingContent