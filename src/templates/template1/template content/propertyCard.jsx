import React from 'react'
import BedIcon from '../../../components/Icons/bedIcon';
import HeightIcon from '../../../components/Icons/heightIcon';
import BathroomIcon from '../../../components/Icons/bathroomIcon';


const PropertyCard = (props) => {
    const { price, text, location, picture, addedtime, bed, wroom, height, index } = props;
    return (
        <div key={index} className='d-flex position-relative flex-xl-row flex-column align-items-xl-center align-items-start justify-content-start property-list mb-32px pb-32px border-bottom'>
            {/* <div className='position-relative w-auto'> */}
            <p className='featured-btn text-white'>Featured</p>
            {picture}
            {/* <p className='graphic-btn-bottom text-white'><GraphicIcon /><span className='pl-2'>20</span></p> */}
            {/* </div> */}

            <div className='ml-lg-4 d-flex flex-column justify-content-between'>
                <p className='font-36 font-weight-600 mb-lg-4 mb-0 text-light-black'><span className='text-skin-brown'>AED </span>{price}</p>
                <div>
                    <p className='font-20 font-weight-600 mb-4 mt-2'>{text}</p>
                    <p className='font-18 font-weight-400 mb-3'>{location}</p>
                    <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                        <div className='d-flex align-items-center'>
                            <BedIcon />
                            <p className='pl-2'>{bed}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <BathroomIcon />
                            <p className='pl-2'>{wroom}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <HeightIcon />
                            <p className='pl-2'>{height}</p>
                        </div>
                    </div>
                    <p className='mb-4 font-14 font-weight-500 text-light-grey'>{addedtime}</p>
                </div>
                <div className='d-flex align-items-sm-center justify-content-start flex-sm-row flex-column gap-16 mt-1'>
                    <button className='btn-brown-bg w-160px'>Call</button>
                    <button className='premium-btn font-16 font-weight-600 h-48px w-160px'>Email</button>

                </div>

            </div>
        </div>)
}

export default PropertyCard