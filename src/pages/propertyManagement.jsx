import React from 'react'
import EditIcon from '../components/Icons/editIcon'
import GreyDeleteIcon from '../components/Icons/greyDeleteIcon'
import InvalidIcon from '../components/Icons/invalidIcon'

const recordTabs = [
    {
        id: 'home-tab',
        text: 'Active (2)',
        href: 'home',
        active: true
    }, {

        id: 'profile-tab',
        text: 'Deleted (3)',
        href: 'profile',
        active: false
    }, {
        id: 'contact-tab',
        text: 'InActive (5)',
        href: 'contact',
        active: false
    },
]
const activeData = [
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },

]
const inactiveData = [
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },

]
const deletedData = [
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },
    {
        id: '18720937',
        property: '5000 Sq. Yard House For Sale',
        location: 'Abu Dhabi',
        price: '1,50,500 AED',
        plateform: 'Estate Book',
        postedon: 'Jan 05, 2023',
        views: '10',
        status: 'Active'

    },

]
const PropertyManagement = () => {
    return (
        <>
            <div className='content-page w-100 ' id='propertymanagement'>
                <form className='w-100 content-box pad-40'>
                    <div className='row m-0 mb-xl-4'>
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4  pr-lg-3 p-0 pl-0'>
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="name">
                                ID
                            </label>
                            <input type="text" required placeholder='Enter Property ID' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4 py-0 pr-lg-3 p-0 pl-0'>
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
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4 py-0 pr-lg-3 p-0 pl-0'>
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
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4 py-0 pr-lg-3 p-0 pl-0'>
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
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4 py-0 pr-lg-3 p-0 pl-0'>
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
                        <div className='col-xl-3 col-lg-6 col-12 pb-xl-0 pb-4 py-0 pr-lg-3 p-0 pl-0'>
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                Listed Date
                            </label>
                            <input type="date" required placeholder='Select Date' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />

                        </div>
                        <div className='col-xl-3 col-12 py-0 pr-lg-3 p-0 pl-0'>
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
                                <li className="nav-item mb-2 h-48px " key={index}>
                                    <a
                                        className={`links mr-3 ${data.active ? 'active' : ''}`}
                                        id={data.id}
                                        data-toggle="tab"
                                        href={`#${data.href}`}
                                        role="tab"
                                        aria-controls={data.href}
                                    >
                                        <span className='pl-2'>{data.text}</span>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>

                <div className="tab-content w-100 record-box content-box  mt-4" id="myTabContent">
                    {
                        recordTabs.map((data, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        className={`tab-pane fade  h-100 w-100 ${data.active ? 'active show' : ''}`}
                                        id={data.href}
                                        role="tabpanel"
                                        aria-labelledby={data.id}
                                    >
                                        <div className='w-100 rounded-8 overflow-auto'>
                                            <table className='w-100'>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            ID
                                                        </th>
                                                        <th>
                                                            Property
                                                        </th>
                                                        <th>
                                                            Location
                                                        </th>
                                                        <th>
                                                            Price
                                                        </th>
                                                        <th>
                                                            Plateform
                                                        </th>
                                                        <th>
                                                            Posted On
                                                        </th>
                                                        <th>
                                                            Views
                                                        </th>
                                                        <th>
                                                            Status
                                                        </th>
                                                        <th></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.href === 'home' ?
                                                        <>
                                                            {activeData.map((data, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            {data.id}
                                                                        </td>
                                                                        <td>
                                                                            {data.property}
                                                                        </td>
                                                                        <td>
                                                                            {data.location}
                                                                        </td>
                                                                        <td>
                                                                            {data.price}
                                                                        </td>
                                                                        <td>
                                                                            {data.plateform}
                                                                        </td>
                                                                        <td>
                                                                            {data.postedon}
                                                                        </td>
                                                                        <td>
                                                                            {data.views}
                                                                        </td>
                                                                        <td>
                                                                            {data.status}
                                                                        </td>
                                                                        <td>

                                                                            <span className='cr-p'>
                                                                                <div className="dropdown ">
                                                                                    <button className="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <EditIcon />
                                                                                    </button>
                                                                                    <div className="dropdown-menu edit-dropdown" aria-labelledby="dropdownMenuButton">
                                                                                        <a className="dropdown-item  d-flex align-items-center justify-content-center" href="#">
                                                                                            <InvalidIcon />  <span className='pl-2'>Inactive</span> </a>
                                                                                        <div className='horizontal-line my-2 m-0'></div>
                                                                                        <a className="dropdown-item  d-flex align-items-center justify-content-center" href="#">
                                                                                            <GreyDeleteIcon /> <span className='pl-2'>Delete</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                )

                                                            })}

                                                        </> :
                                                        <>
                                                            {data.href === 'profile' ?
                                                                <>
                                                                    {deletedData.map((data, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    {data.id}
                                                                                </td>
                                                                                <td>
                                                                                    {data.property}
                                                                                </td>
                                                                                <td>
                                                                                    {data.location}
                                                                                </td>
                                                                                <td>
                                                                                    {data.price}
                                                                                </td>
                                                                                <td>
                                                                                    {data.plateform}
                                                                                </td>
                                                                                <td>
                                                                                    {data.postedon}
                                                                                </td>
                                                                                <td>
                                                                                    {data.views}
                                                                                </td>
                                                                                <td>
                                                                                    {data.status}
                                                                                </td>
                                                                                <td>
                                                                                    <span className='cr-p'>
                                                                                        <div className="dropdown ">
                                                                                            <button className="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <EditIcon />
                                                                                            </button>
                                                                                            <div className="dropdown-menu edit-dropdown" aria-labelledby="dropdownMenuButton">

                                                                                                <a className="dropdown-item  d-flex align-items-center justify-content-center" href="#">
                                                                                                    <GreyDeleteIcon /> <span className='pl-2'>Delete Permanently</span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        )

                                                                    })}

                                                                </> :

                                                                <>
                                                                    {inactiveData.map((data, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    {data.id}
                                                                                </td>
                                                                                <td>
                                                                                    {data.property}
                                                                                </td>
                                                                                <td>
                                                                                    {data.location}
                                                                                </td>
                                                                                <td>
                                                                                    {data.price}
                                                                                </td>
                                                                                <td>
                                                                                    {data.plateform}
                                                                                </td>
                                                                                <td>
                                                                                    {data.postedon}
                                                                                </td>
                                                                                <td>
                                                                                    {data.views}
                                                                                </td>
                                                                                <td>
                                                                                    {data.status}
                                                                                </td>
                                                                                <td>
                                                                                    <span className='cr-p'>
                                                                                        <div className="dropdown ">
                                                                                            <button className="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <EditIcon />
                                                                                            </button>
                                                                                            <div className="dropdown-menu edit-dropdown" aria-labelledby="dropdownMenuButton">
                                                                                                <a className="dropdown-item  d-flex align-items-center justify-content-center" href="#">
                                                                                                    <GreyDeleteIcon />  <span className='pl-2'>Active</span> </a>
                                                                                                <div className='horizontal-line my-2 m-0'></div>
                                                                                                <a className="dropdown-item  d-flex align-items-center justify-content-center" href="#">
                                                                                                    <InvalidIcon /> <span className='pl-2'>Delete</span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        )

                                                                    })}
                                                                </>
                                                            }
                                                        </>
                                                    }



                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default PropertyManagement
