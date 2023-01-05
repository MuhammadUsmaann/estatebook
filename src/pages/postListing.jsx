import React from 'react'
import CoupenIcon from '../components/Icons/coupenIcon'
import ImageIcon from '../components/Icons/imageIcon'
import InfoIcon from '../components/Icons/infoIcon'
import LocationIcon from '../components/Icons/locationIcon'
import PropertyType from '../components/Icons/propertyType'
import SelectLocation from '../components/Icons/selectLocation'
import TrueCheck from '../components/Icons/trueCheck'
import HomeDashboard from '../components/images/homeDashboard'
import PhoneInput from 'react-phone-input-2'
import UploadImage from '../components/images/uploadimage'
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs
} from "react-google-maps";



const exampleMapStyles = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#ebe3cd"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#523735"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#f5f1e6"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#c9b2a6"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#dcd2be"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#ae9e90"
            }
        ]
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
            {
                color: "#dfd2ae"
            }
        ]
    },
    {
        featureType: "poi",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#dfd2ae"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#93817c"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#a5b076"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#447530"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f1e6"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#fdfcf8"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#f8c967"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#e9bc62"
            }
        ]
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#e98d58"
            }
        ]
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#db8555"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#806b63"
            }
        ]
    },
    {
        featureType: "transit",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                color: "#dfd2ae"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#8f7d77"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#ebe3cd"
            }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
                color: "#dfd2ae"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#b9d3c2"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#92998d"
            }
        ]
    }
];

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
const defaultMapOptions = {
    fullscreenControl: false,
};

const rooms = [
    {
        id: 1,
        text: 'Studio',
        active: true
    },
    {
        id: 2,
        text: '1',
        active: false
    }, {
        id: 3,
        text: '2',
        active: false
    }, {
        id: 4,
        text: '3',
        active: false
    }, {

        id: 5,
        text: '4',
        active: false
    }, {
        id: 6,
        text: '5',
        active: false
    },
    {
        id: 7,
        text: '6',
        active: false
    }
    , {
        id: 8,
        text: '7',
        active: false
    }, {

        id: 9,
        text: '8',
        active: false
    }, {
        id: 10,
        text: '9',
        active: false
    },
    {
        id: 10,
        text: '10',
        active: false
    },
    {
        id: 11,
        text: '10+',
        active: false
    },
]
const bathrooms = [
    {
        id: 1,
        text: '1',
        active: true
    },
    {
        id: 2,
        text: '2',
        active: false
    }, {
        id: 3,
        text: '3',
        active: false
    }, {
        id: 4,
        text: '4',
        active: false
    }
]
const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            defaultOptions={{ styles: exampleMapStyles }}
            options={defaultMapOptions}


        >
            {props.isMarkerShown && (
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}

        </GoogleMap>
    ))
);
const PostListing = () => {

    const [mobphone, setmobPhone] = React.useState("+9239699999");
    const handleChangeMob = (newPhone) => {
        setmobPhone(newPhone);
    };
    const [landline, setlandline] = React.useState("+9239699999");
    const handleChangelandline = (newPhone) => {
        setlandline(newPhone);
    };

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

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="myTabContent">
                <div className="w-50 width-div">

                    <p className='font-24 font-weight-600'>Location and Purpose</p>
                    <div className='horizontal-line'></div>

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
                                className="property-type-links mb-2 pr-2 mr-sm-5 mr-2  active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                <span >Home</span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="property-type-links  mb-2 pr-2 mr-sm-5 mr-2  "
                                id="profile-tab"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                <span >Plot</span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a
                                className="property-type-links  mb-2 pr-2 "
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
                    <div className="tab-content w-100 pt-2 mb-32" id="mypropertytype">
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

                    <div className='d-flex mb-18 justify-content-start align-items-center mt-md-0 mt-4'>
                        <div className='bg-light-skin p-2 rounded-8'>
                            <LocationIcon />
                        </div>
                        <p className='font-24 pl-2 font-weight-500'>Select City</p>

                    </div>
                    <div className='selectdiv w-100 mb-32'>

                        <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                            <option>All Cities</option>
                        </select>
                    </div>

                    <div className='d-flex mb-18 justify-content-start align-items-center'>
                        <div className='bg-light-skin p-2 rounded-8'>
                            <SelectLocation />
                        </div>
                        <p className='font-24 pl-2 font-weight-500'>Select Location</p>

                    </div>
                    <div className='selectdiv w-100 mb-4 mt-2'>

                        <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                            <option>Search</option>
                        </select>
                    </div>

                    <MyMapComponent
                        googleMapURL="https://maps.googleapis.com/maps/api/js"
                        loadingElement={<div style={{ borderRadius: '8px', height: `100%` }} />}
                        containerElement={<div style={{ height: `160px` }} />}
                        mapElement={<div style={{ borderRadius: '8px', height: `100%` }} />}
                    />
                </div>
            </div>

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="myTabContent">
                <div className="w-50 width-div">

                    <p className='font-24 font-weight-600'>Price & Area</p>
                    <div className='horizontal-line'></div>

                    <div className='mb-32 ='>
                        <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <TrueCheck />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Sq. Ft.</p>
                        </div>
                        <div className='row m-0'>
                            <div className="col-lg-7 col-12 mb-lg-0 mb-3 p-0">

                                <input type="text" required placeholder='Enter Unit' className='h-48px form-control border-grey p-input-style font-16 font-weight-400' />
                            </div>
                            <div className='col-lg-5 col-12 p-0 selectdiv'>

                                <select required className='ml-lg-3 h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>All Cities</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='mb-32'>
                        <div className='d-flex mb-18 mt-3 justify-content-start align-items-center mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <PropertyType />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Price</p>

                        </div>
                        <div className='row m-0'>
                            <div className="col-lg-7 col-12 p-0 mb-lg-0 mb-3">

                                <input type="text" required placeholder='Enter Price' className='h-48px form-control border-grey p-input-style font-16 font-weight-400' />
                            </div>
                            <div className='col-lg-5 col-12 p-0 selectdiv'>

                                <select required className='ml-lg-3 h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>AED</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <label className="d-flex align-items-center mb-32 cr-p w-100 justify-content-between">
                        <div>
                            <p className='font-16 font-weight-600 text-light-black mb-2'>
                                Instalment Available
                            </p>
                            <p className='font-14 font-weight-400 text-grey'>
                                Enable if listing is available on instalments
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            className="custom-toggle-input2 ml-2"
                        />
                    </label>
                    
                    <label className="d-flex align-items-center cr-p w-100 justify-content-between">
                        <div>
                            <p className='font-16 font-weight-600 text-light-black mb-2'>
                                Ready for Possession
                            </p>
                            <p className='font-14 font-weight-400 text-grey'>
                                Enable if listing is ready for possession
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            className="custom-toggle-input2 ml-2"
                        />
                    </label>

                </div>
            </div>

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="adinfo">
                <div className="w-50 width-div">

                    <p className='font-24 font-weight-600'>Feature and Amenities</p>
                    <div className='horizontal-line'></div>

                    <div className='mb-32'>
                        <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <TrueCheck />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Bedrooms</p>
                        </div>
                        <ul className="nav nav-tabs border-0" id="bedrooms" role="tablist">
                            {
                                rooms.map((data, index) => {
                                    return (
                                        <li className="nav-item  mb-2 h-48px " key={index}>
                                            <a
                                                className={` btn-brown-outline px-3 mr-2 ${data.active ? 'active' : ''}`}
                                                id={data.id}
                                                data-toggle="tab"
                                                href={`# ${data.id}`}
                                                role="tab"
                                                aria-controls={data.id}
                                                aria-selected="true"
                                            >
                                                <span className=''>{data.text}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                    <div className="d-flex mb-32 flex-column w-100 mr-md-4">
                        <div className='d-flex mb-18 justify-content-start align-items-center'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <PropertyType />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Bathrooms</p>

                        </div>

                        <ul className="nav nav-tabs border-0" id="bedrooms" role="tablist">
                            {
                                bathrooms.map((data, index) => {
                                    return (
                                        <li className="nav-item  mb-2 h-48px " key={index}>
                                            <a
                                                className={` btn-brown-outline px-3 mr-2 ${data.active ? 'active' : ''}`}
                                                id={data.id}
                                                data-toggle="tab"
                                                href={`# ${data.id}`}
                                                role="tab"
                                                aria-controls={data.id}
                                                aria-selected="true"
                                            >
                                                <span className=''>{data.text}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>

                    </div>

                    <p className='font-18 font-weight-600 mb-2'>Feature and Amenities</p>
                    <p className='font-14 font-weight-400 text-light-grey mb-32'>Add additional features e.g. parking spaces, waste disposal, internet etc.</p>
                    <button className='btn-brown-bg'>Add Amenities</button>

                </div>
            </div>

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="adinfo">
                <div className="w-50 width-div">

                    <p className='font-24 font-weight-600'>Ad Information</p>
                    <div className='horizontal-line'></div>

                    <div className='mb-32'>
                        <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <TrueCheck />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Enter Title of your property</p>
                        </div>
                        <input type="text" required placeholder='Enter Email' className='h-48px form-control border-grey p-input-style font-16 font-weight-400' />

                    </div>

                    <div className="d-flex flex-column mb-32  w-100 mr-md-4">
                        <div className='d-flex mb-18 mt-3 justify-content-start align-items-center mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <PropertyType />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Description</p>

                        </div>

                        <textarea required placeholder='Add Description' className='form-control border-grey p-input-style font-16 font-weight-400'>
                        </textarea>
                    </div>


                </div>
            </div>

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="myTabContent">
                <div className="w-50 width-div">
                    <p className='font-24 font-weight-700 text-light-black'>Property Images and Videos</p>
                    <div className='horizontal-line'></div>
                    <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                        <div className='bg-light-skin p-2 rounded-8'>
                            <TrueCheck />
                        </div>
                        <p className='font-24 pl-2 font-weight-500'>Upload Images of your Property</p>
                    </div>
                    <div className='d-flex flex-column upload-image-box p-0 mb-5'>
                        <div className='text-center p30px'>
                            <UploadImage />
                            <p className='font-18 font-weight-600 text-light-black pt-4 pb-3'>Drag and drop files, or <span className='text-skin-brown'>Browse</span></p>
                            <p className='font-14 text-light-grey font-weight-400'>Support PNG, JPEG, and MP4, GIF</p>
                        </div>

                        <div className='text-left p30px border-dashed'>
                            <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <TrueCheck />
                                </div>
                                <p className='font-14 pl-2 font-weight-400'>Ads with pictures get 5x more views and leads</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <TrueCheck />
                                </div>
                                <p className='font-14 pl-2 font-weight-400'>Upload good quality pictures with proper lighting</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                                <div className='bg-light-skin p-2 rounded-8'>
                                    <TrueCheck />
                                </div>
                                <p className='font-14 pl-2 font-weight-400'>Cover all areas of your property</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                        <div className='bg-light-skin p-2 rounded-8'>
                            <TrueCheck />
                        </div>
                        <p className='font-24 pl-2 font-weight-500'>Add Videos of your Property</p>
                    </div>
                    <p className='font-14 font-weight-400 mb-18 text-light-grey'>Add videos of your property from Youtube. Upload on Youtube and paste
                        the link below.</p>
                    <div className='d-flex flex-column upload-image-box mb-2'>
                        <div className='text-center p30px'>
                            <UploadImage />
                            <p className='font-18 font-weight-600 text-light-black pt-4 pb-3'>Drag and drop files, or <span className='text-skin-brown'>Browse</span></p>
                            <p className='font-14 text-light-grey font-weight-400'>Support MP4, size 250MB</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="record-box w-100 d-flex justify-content-center content-box pad-40 mt-4" id="myTabContent">
                <div className="w-50 width-div">

                    <p className='font-24 font-weight-600'>Contact Information</p>
                    <div className='horizontal-line'></div>

                    <div className='mb-32'>
                        <div className='d-flex justify-content-start align-items-center mb-18 mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <TrueCheck />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Email</p>
                        </div>
                        <input type="email" required placeholder='Enter Email' className='h-48px form-control border-grey p-input-style font-16 font-weight-400' />

                    </div>

                    <div className="d-flex flex-column mb-32  w-100 mr-md-4">
                        <div className='d-flex mb-18 mt-3 justify-content-start align-items-center mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <PropertyType />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>Phone</p>

                        </div>
                        <PhoneInput
                            onChange={(mobphone) => handleChangeMob(mobphone)}
                            specialLabel={""}
                            disableDropdown={false}
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                            }}
                            inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                        />
                    </div>
                    <div className="d-flex flex-column mb-3 w-100">
                        <div className='d-flex mb-18 mt-3 justify-content-start align-items-center mt-md-0 mt-4'>
                            <div className='bg-light-skin p-2 rounded-8'>
                                <PropertyType />
                            </div>
                            <p className='font-24 pl-2 font-weight-500'>landline</p>

                        </div>
                        <PhoneInput
                            onChange={(landline) => handleChangelandline(landline)}
                            specialLabel={""}
                            disableDropdown={false}
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                            }}
                            inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                        />
                    </div>


                </div>
            </div>



            <div className="justify-content-end w-100 flex-sm-row flex-column d-flex align-items-sm-center align-items-end mt-5">

                <button className='btn-brown-outline mr-sm-3 mb-sm-0 mb-3'>
                    Save as Draft
                </button>
                <button className='btn-brown-bg'>
                    Post Ad
                </button>
            </div>

        </div>
    )
}

export default PostListing
