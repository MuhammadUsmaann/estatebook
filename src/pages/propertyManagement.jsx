import React from 'react'
import RecordFile from '../components/images/recordFile'

const recordTabs = [
    {
        id: 1,
        text: 'Active (0)',
        active: true
    },
    {
        id: 2,
        text: 'Pending (0)',
        active: false
    }, {
        id: 3,
        text: 'Rejected (0)',
        active: false
    }, {
        id: 4,
        text: 'Expired (0)',
        active: false
    }, {

        id: 5,
        text: 'Deleted (0)',
        active: false
    }, {
        id: 6,
        text: 'Downgraded (0)',
        active: false
    }, {
        id: 7,
        text: 'InActive (0)',
        active: false
    },
]
const PropertyManagement = () => {
    return (
        <>
            <div className='content-page w-100 ' id='propertymanagement'>
                <form className='w-100 content-box pad-40'>
                    <div className='row m-0 mb-4'>
                        <div className='col-3 py-0 pl-0'>
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="name">
                                ID
                            </label>
                            <input type="text" required placeholder='Enter Property ID' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                        <div className='col-3 py-0 pl-0'>
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    City
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>All Cities</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-3 py-0 pl-0'>
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Location
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>Search Location</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-3 py-0 pl-0'>
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Property Type
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>Select Type</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    <div className='row m-0'>
                        <div className='col-3 py-0 pl-0'>
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Purpose
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>Select Purpose</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-3 py-0 pl-0'>
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                Listed Date
                            </label>
                            <input type="date" required placeholder='Select Date' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />

                        </div>
                        <div className='col-3 py-0 pl-0'>
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                Price Range
                            </label>
                            <div className='d-flex justify-content-between align-items-center'>
                                <input type='number' placeholder='Start Price' className='mr-3 h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                                <input type='number' placeholder='End Price' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />

                            </div>
                        </div>

                    </div>
                </form>

                <ul className="nav nav-tabs border-0 mt-5" id="myrecordTab" role="tablist">
                    {
                        recordTabs.map((data, index) => {
                            return (
                                <li className="nav-item h-48px" key={index}>
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
                                    <div className='h-100 d-flex  flex-column justify-content-center align-items-center'>
                                        <RecordFile />
                                        <p className='pt-5 font-24 font-weight-500 text-light-grey'> No Record Found</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default PropertyManagement
