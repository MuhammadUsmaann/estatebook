import React from 'react'
import HomeDashboard from '../components/images/homeDashboard'
import CutomizedDashboard from '../components/images/cutomizedDashboard'
import FasterSellDashboard from '../components/images/fasterSellDashboard'
import RecordFile from '../components/images/recordFile'
import RightArrowsIcon from '../components/Icons/rightArrowsIcon'
import CoupenIcon from '../components/Icons/coupenIcon'
import PersonsIcon from '../components/Icons/personsIcon'
import StatusIcon from '../components/Icons/statusIcon'

const Dashboard = () => {
    return (
        <div className='content-page'>
            <div className='content-box w-100 pad-40'>
                <div className='row m-0 w-100 '>
                    <div className='col-7 p-0'>
                        <p className='font-36 font-weight-600 mb-4'>Looking to Sell or Rent Your Property</p>
                        <p className='font-24 font-weight-500 mb-4 text-light-grey'>Post now on Estate Book to reach millions of genuine users! </p>
                        <div className='d-flex justify-content-between align-items-center pt-2 pb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <CoupenIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Get Better Price</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <PersonsIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Connect With Real Buyers</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <StatusIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Realtime Stats</p>

                            </div>
                        </div>
                        <button className='btn-brown-bg mt-4'>Post Your Ad Now</button>
                    </div>
                    <div className='col-5 p-0 text-right'>
                        <HomeDashboard />
                    </div>
                </div>

            </div>
            <div className=' w-100 mb-2 mt-4'>
                <div className='row m-0 w-100 '>
                    <div className=' col-6 p-0'>
                        <div className='content-box pad-40 mr-4 h-100'>
                            <p className='font-36 font-weight-600 mb-1'>Get Your Own Customised </p>
                            <p className='font-36 font-weight-600 mb-4 '>Profile</p>

                            <div className='d-flex justify-content-between  pt-2 pb-3'>
                                <div className='d-flex justify-content-between flex-column'>
                                    <p className='font-24 font-weight-500 mb-4 text-light-grey'>Become a Premium User </p>
                                    <button className='btn-brown-outline mt-4 w-75'>See Plans</button>
                                </div>

                                <CutomizedDashboard />
                            </div>
                        </div>
                    </div>
                    <div className=' col-6 p-0'>
                        <div className='content-box pad-40 h-100'>
                            <p className='font-36 font-weight-600 mb-1 '>Make Your Property </p>
                            <p className='font-36 font-weight-600 mb-4 '>Featured and Sell Faster</p>

                            <div className='d-flex justify-content-between  pt-2 pb-3'>
                                <div className='d-flex justify-content-between flex-column'>
                                    <p className='font-24 font-weight-500 mb-4 text-light-grey'>Become a Premium User </p>
                                    <button className='btn-brown-outline mt-4 w-75'>See Plans</button>
                                </div>

                                <FasterSellDashboard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mb-4 mt-5 d-flex w-100 justify-content-between align-items-center'>
                <p className='font-36 font-weight-600 '>My Recent Listing</p>
                <div className='d-flex align-items-center text-skin-brown font-16 font-weight-600'><span className='pr-2'>View All Listings</span> <RightArrowsIcon /></div>
            </div>
            <div className='content-box w-100 pad-40'>
                <div className='h-100 d-flex  flex-column justify-content-center align-items-center'>
                    <RecordFile />
                    <p className='pt-5 font-24 font-weight-500 text-light-grey'> No Record Found</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
