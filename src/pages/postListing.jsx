import React from 'react'
import CoupenIcon from '../components/Icons/coupenIcon'
import ImageIcon from '../components/Icons/imageIcon'
import InfoIcon from '../components/Icons/infoIcon'
import LocationIcon from '../components/Icons/locationIcon'
import PropertyType from '../components/Icons/propertyType'
import SelectLocation from '../components/Icons/selectLocation'
import TrueCheck from '../components/Icons/trueCheck'
import HomeDashboard from '../components/images/homeDashboard'
const recordTabs = [
    {
        id: 1,
        text: 'Location and Purpose',
        active: true
    },
    {
        id: 2,
        text: 'Price & Area',
        active: false
    }, {
        id: 3,
        text: 'Ad Information',
        active: false
    }, {
        id: 4,
        text: 'Property Images & Videos',
        active: false
    }, {

        id: 5,
        text: 'Contact Information',
        active: false
    }, {
        id: 6,
        text: 'Contact Information',
        active: false
    },
]
const options = [
    {
        id: 1,
        text: 'House',
        active: true
    },
    {
        id: 2,
        text: 'Flat',
        active: false
    }, {
        id: 3,
        text: 'Farm House',
        active: false
    }, {
        id: 4,
        text: 'Pent House',
        active: false
    }, {

        id: 5,
        text: 'Room',
        active: false
    }, {
        id: 6,
        text: 'Upper Portion',
        active: false
    },
    {
        id: 7,
        text: 'Lower Portion',
        active: false
    },
]
const PostListing = () => {
    return (
        <div className='content-page' id='postlisting'>
            <div className='content-box w-100 pad-40'>
                <div className='row m-0 w-100 '>
                    <div className='col-xl-7 col-12  p-0'>
                        <p className='font-36 font-weight-700 mb-4'>Reach Millions of Buyers on our Platform</p>
                        <p className='font-24 font-weight-500 mb-4 text-light-grey'>On just a one click! </p>
                        <div className='d-flex flex-md-row flex-column justify-content-between align-items-md-center align-items-start pt-2 pb-3'>
                            <div className='d-flex justify-content-center mb-md-0 mb-2 align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <InfoIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Listings Information</p>

                            </div>
                            <div className='d-flex justify-content-center mb-md-0 mb-2 align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <CoupenIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Property Price</p>
                            </div>
                            <div className='d-flex justify-content-center  align-items-center'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <ImageIcon />
                                </div>
                                <p className='font-18 font-weight-500 pl-3'>Quality Property Images</p>
                            </div>

                        </div>
                        <button className='btn-brown-bg mt-4'>Post Your Ad Now</button>
                    </div>
                    <div className='col-xl-5 col-12 p-0 text-xl-right text-center'>
                        <HomeDashboard />
                    </div>
                </div>

            </div>

            <ul className="nav nav-tabs border-0 mt-5" id="myrecordTab" role="tablist">
                {
                    recordTabs.map((data, index) => {
                        return (
                            <li className="nav-item mb-2 h-48px " key={index}>
                                <a
                                    className={`links mr-3 ${data.active ? 'active' : ''}`}
                                    id={data.id}
                                    data-toggle="tab"
                                    href={`# ${data.id}`}
                                    role="tab"
                                    aria-controls={data.id}
                                    aria-selected="true"
                                >
                                    <span className='pl-2'>{data.text}</span>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>

            <div className="tab-content w-100 record-box content-box pad-40 mt-4" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >

                </div>
                {
                    recordTabs.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`tab-pane fade show h-100 w-100 ${data.active ? 'active' : ''}`}
                                id={data.id}
                                role="tabpanel"
                                aria-labelledby={data.id}
                            >
                                <div className='row m-0'>
                                    <div className='col-xl-6 col-12'>
                                        <div className='d-flex justify-content-start align-items-center mt-md-0 mt-4'>
                                            <div className='bg-light-skin p-2 rounded-8'>
                                                <TrueCheck />
                                            </div>
                                            <p className='font-24 pl-2 font-weight-500'>Select Purpose</p>

                                        </div>
                                        <div
                                            className="btn-group flex-md-row flex-column btn-group-toggle mb-5 mt-4"
                                            data-toggle="buttons"
                                        >
                                            <label className="btn font-14 mr-3 mb-md-0 mb-2 btn-brown-outline rounded-8 active d-flex align-items-center">
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    id="option1"
                                                    autoComplete="off"
                                                    checked
                                                    readOnly
                                                />
                                                Sell
                                                <span className="pl-2">Grid</span>
                                            </label>
                                            <label className="btn font-14  btn-brown-outline rounded-8 d-flex align-items-center">
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    id="option2"
                                                    autoComplete="off"
                                                />
                                                Rent
                                                <span className="pl-2">List</span>
                                            </label>
                                        </div>

                                        <div className='d-flex mb-4 mt-3 justify-content-start align-items-center mt-md-0 mt-4'>
                                            <div className='bg-light-skin p-2 rounded-8'>
                                                <PropertyType />
                                            </div>
                                            <p className='font-24 pl-2 font-weight-500'>Select Property Type</p>

                                        </div>

                                        <ul className="nav pt-2 nav-tabs w-max-content mb-4" id="myTab" role="tablist">
                                            <li className="nav-item ">
                                                <a
                                                    className="property-type-links mb-2 mr-3 active"
                                                    id="home-tab"
                                                    data-toggle="tab"
                                                    href="#home"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true"
                                                >
                                                    <span >Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="property-type-links  mb-2 mr-3 "
                                                    id="profile-tab"
                                                    data-toggle="tab"
                                                    href="#profile"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false"
                                                >
                                                    <span >Home</span>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a
                                                    className="property-type-links  mb-2 mr-3 "
                                                    id="contact-tab"
                                                    data-toggle="tab"
                                                    href="#contact"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false"
                                                >
                                                    <span >Commercial</span>

                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content w-100 pt-2" id="mypropertytype">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                            >
                                                <ul className="nav nav-tabs border-0" id="homeTab" role="tablist">
                                                    {
                                                        options.map((data, index) => {
                                                            return (
                                                                <li className="nav-item mb-2 h-48px " key={index}>
                                                                    <a
                                                                        className={`links mr-3 ${data.active ? 'active' : ''}`}
                                                                        id={data.id}
                                                                        data-toggle="tab"
                                                                        href={`# ${data.id}`}
                                                                        role="tab"
                                                                        aria-controls={data.id}
                                                                        aria-selected="true"
                                                                    >
                                                                        <span className='pl-2'>{data.text}</span>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>


                                            <div
                                                className="tab-pane fade"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                            >
                                                <ul className="nav nav-tabs border-0" id="plotTab" role="tablist">
                                                    {
                                                        options.map((data, index) => {
                                                            return (
                                                                <li className="nav-item mb-2 h-48px " key={index}>
                                                                    <a
                                                                        className={`links mr-3 ${data.active ? 'active' : ''}`}
                                                                        id={data.id}
                                                                        data-toggle="tab"
                                                                        href={`# ${data.id}`}
                                                                        role="tab"
                                                                        aria-controls={data.id}
                                                                        aria-selected="true"
                                                                    >
                                                                        <span className='pl-2'>{data.text}</span>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>


                                            <div
                                                className="tab-pane fade"
                                                id="contact"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab"
                                            >
                                                <ul className="nav nav-tabs border-0" id="commercialTab" role="tablist">
                                                    {
                                                        options.map((data, index) => {
                                                            return (
                                                                <li className="nav-item mb-3 h-48px " key={index}>
                                                                    <a
                                                                        className={`links mr-2 ${data.active ? 'active' : ''}`}
                                                                        id={data.id}
                                                                        data-toggle="tab"
                                                                        href={`# ${data.id}`}
                                                                        role="tab"
                                                                        aria-controls={data.id}
                                                                        aria-selected="true"
                                                                    >
                                                                        <span className='pl-2'>{data.text}</span>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        </div>

                                    </div>



                                    <div className='col-xl-6 pt-xl-0 pt-4 col-12 position-relative'>
                                        <div className='leftline d-xl-block d-none'></div>
                                        <div className='d-flex mb-4 justify-content-start align-items-center mt-md-0 mt-4'>
                                            <div className='bg-light-skin p-2 rounded-8'>
                                                <LocationIcon />
                                            </div>
                                            <p className='font-24 pl-2 font-weight-500'>Select City</p>

                                        </div>

                                        <div className='selectdiv w-50 pb-5'>

                                            <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                                <option>All Cities</option>
                                            </select>
                                        </div>

                                        <div className='d-flex mb-4 justify-content-start align-items-center'>
                                            <div className='bg-light-skin p-2 rounded-8'>
                                                <SelectLocation />
                                            </div>
                                            <p className='font-24 pl-2 font-weight-500'>Select Location</p>

                                        </div>
                                        <div className='selectdiv w-50 mt-2'>

                                            <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                                <option>Search</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default PostListing
