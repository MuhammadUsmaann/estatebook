import React from 'react'

const PropertyCard = (props) => {
    const { price, text, location, picture, addedtime, bed, wroom, height, index } = props;
    return (
        <div key={index} className='d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start property-list mb-32px pb-32px border-bottom'>
            {picture}
            <div className='ml-md-4'>
                <p className='font-36 font-weight-600 mb-lg-4 mb-0 text-light-black'><span className='text-skin-brown'>AED </span>{price}</p>
                <p className='font-20 font-weight-600 mb-4 mt-2'>{text}</p>
                <p className='font-18 font-weight-400 mb-3'>{location}</p>
                <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                    <p>{bed}</p>
                    <p>{wroom}</p>
                    <p>{height}</p>
                </div>
                <p className='mb-5 font-14 font-weight-500 text-light-grey'>{addedtime}</p>
                <div className='d-flex align-items-sm-center justify-content-start flex-sm-row flex-column gap-16'>
                    <button className='btn-brown-bg w-160px'>Call</button>
                    <button className='premium-btn font-16 font-weight-600 h-48px w-160px'>Email</button>

                </div>

            </div>
        </div>)
}

export default PropertyCard