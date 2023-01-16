import React from 'react'
import BathroomIcon from '../../../components/Icons/bathroomIcon'
import BedIcon from '../../../components/Icons/bedIcon'
import GraphicIcon from '../../../components/Icons/graphicIcon'
import HeightIcon from '../../../components/Icons/heightIcon'
import RightArrowsIcon from '../../../components/Icons/rightArrowsIcon'
import Agent from '../../../components/images/agent'
import Section3card1 from '../../../components/images/section3card1'
import Section3card2 from '../../../components/images/section3card2'
import Section3card3 from '../../../components/images/section3card3'
import Section3card4 from '../../../components/images/section3card4'
import Section3card5 from '../../../components/images/section3card5'
import Section3card6 from '../../../components/images/section3card6'
import Section3card7 from '../../../components/images/section3card7'
import Section3card8 from '../../../components/images/section3card8'
import AgentsCard from '../../template1/template content/agentsCard'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
        original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvcIGYneFcKORoKkeGUn0WEKFVV0XRKKUO7wfvnJNpD_F_kUbiJ5zYXd61IrZbLgNpJ4&usqp=CAU',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvcIGYneFcKORoKkeGUn0WEKFVV0XRKKUO7wfvnJNpD_F_kUbiJ5zYXd61IrZbLgNpJ4&usqp=CAU',
    },
    {
        original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGI6MVnc4PyHx6DxWho0LVVwLhgmarjarvTcJtststZiaMFrdTdXA7DlN12EX2Tyqaudc&usqp=CAU',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGI6MVnc4PyHx6DxWho0LVVwLhgmarjarvTcJtststZiaMFrdTdXA7DlN12EX2Tyqaudc&usqp=CAU',
    },
];
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
const Template03Content = () => {
    return (
        <div className='featured-properties'>
            {/* featured */}
            <p className='font-36 font-weight-700 text-light-black'>Featured <span className='text-skin-brown'>Properties</span></p>
            <div className='row m-0 '>
                {
                    featuredpropertieslist.map((cards, index) => {
                        return (
                            <div className='col-xl-3 col-md-6 col-12 p-0 mb-5 row1featured-properties' key={index}>
                                <div className='mr-md-4 section3card text-light-black'>
                                    <div className='w-100 pb-4 position-relative'>
                                        <p className='featured-btn text-white'>Featured</p>
                                        {cards.picture}
                                        <p className='graphic-btn text-white'><GraphicIcon /><span className='pl-2'>20</span></p>

                                    </div>
                                    <p className='mb-5 font-14 font-weight-500 text-light-grey'>{cards.addedtime}</p>
                                    <p className='font-20 font-weight-600 mb-4 mt-2'>{cards.text}</p>
                                    <p className='font-18 font-weight-400 mb-3'>{cards.location}</p>
                                    <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                                        <div className='d-flex align-items-center'>
                                            <BedIcon />
                                            <p className='pl-2'>{cards.bed}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <BathroomIcon />
                                            <p className='pl-2'>{cards.wroom}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <HeightIcon />
                                            <p className='pl-2'>{cards.height}</p>
                                        </div>
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
            <div className='row m-0 '>
                {
                    otherspropertieslist.map((cards, index) => {
                        return (
                            <div className='col-xl-3 col-md-6 col-12 p-0 mb-5 row2featured-properties' key={index}>
                                <div className='mr-md-4 section3card text-light-black'>
                                    <div className='w-100 pb-4 position-relative'>
                                        <p className='featured-btn text-white'>Featured</p>
                                        {cards.picture}
                                        <p className='graphic-btn text-white'><GraphicIcon /><span className='pl-2'>20</span></p>

                                    </div>
                                    <p className='mb-5 font-14 font-weight-500 text-light-grey'>{cards.addedtime}</p>
                                    <p className='font-20 font-weight-600 mb-4 mt-2'>{cards.text}</p>
                                    <p className='font-18 font-weight-400 mb-3'>{cards.location}</p>
                                    <div className='d-flex align-items-center justify-content-start gap-16 font-18 font-weight-600 mb-4'>
                                        <div className='d-flex align-items-center'>
                                            <BedIcon />
                                            <p className='pl-2'>{cards.bed}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <BathroomIcon />
                                            <p className='pl-2'>{cards.wroom}</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <HeightIcon />
                                            <p className='pl-2'>{cards.height}</p>
                                        </div>
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
                            <div className='section3card mr-md-3'>
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

            {/* image gallery */}
            <p className='font-36 font-weight-700 text-light-black w-max-content m-auto mt-5 pb-3 '>Gallery</p>
            <div className='skin-line m-auto mb-100px'>
            </div>
            <ImageGallery items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                renderRightNav={(onClick, disabled) => (
                    <RightNav onClick={onClick} disabled={disabled} />)}
                renderLeftNav={(onClick, disabled) => (
                    <LeftNav onClick={onClick} disabled={disabled} />)}
                originalClass="rounded-8"
            />
        </div>
    )
}

export default Template03Content

const RightNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <svg width={110} height={77} viewBox="0 0 110 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="72.3285" cy="38.4247" rx="37.6712" ry="38.4247" fill="#CCA353" />
                <path fillRule="evenodd" clipRule="evenodd" d="M59.392 24.3863C60.0964 23.6685 61.2764 23.6321 62.0277 24.3051L76.9448 37.6667C77.3208 38.0035 77.5341 38.474 77.5341 38.9664C77.5341 39.4588 77.3208 39.9293 76.9448 40.2661L62.0277 53.6277C61.2764 54.3007 60.0964 54.2643 59.392 53.5465C58.6877 52.8287 58.7258 51.7013 59.477 51.0283L72.9432 38.9664L59.477 26.9045C58.7258 26.2316 58.6877 25.1041 59.392 24.3863Z" fill="#342F26" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 38.9661C0 37.9822 0.834829 37.1846 1.86464 37.1846H71.3656C72.3954 37.1846 73.2302 37.9822 73.2302 38.9661C73.2302 39.95 72.3954 40.7477 71.3656 40.7477H1.86464C0.834829 40.7477 0 39.95 0 38.9661Z" fill="#342F26" />
            </svg>
        </button>
    );
});

const LeftNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <svg width={110} height={77} viewBox="0 0 110 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse rx="37.6712" ry="38.4247" transform="matrix(-1 0 0 1 37.6715 38.4247)" fill="#CCA353" />
                <path fillRule="evenodd" clipRule="evenodd" d="M50.608 24.3863C49.9036 23.6685 48.7236 23.6321 47.9723 24.3051L33.0552 37.6667C32.6792 38.0035 32.4659 38.474 32.4659 38.9664C32.4659 39.4588 32.6792 39.9293 33.0552 40.2661L47.9723 53.6277C48.7236 54.3007 49.9036 54.2643 50.608 53.5465C51.3123 52.8287 51.2742 51.7013 50.523 51.0283L37.0568 38.9664L50.523 26.9045C51.2742 26.2316 51.3123 25.1041 50.608 24.3863Z" fill="#342F26" />
                <path fillRule="evenodd" clipRule="evenodd" d="M110 38.9661C110 37.9822 109.165 37.1846 108.135 37.1846H38.6344C37.6046 37.1846 36.7698 37.9822 36.7698 38.9661C36.7698 39.95 37.6046 40.7477 38.6344 40.7477H108.135C109.165 40.7477 110 39.95 110 38.9661Z" fill="#342F26" />
            </svg>

        </button>
    );
});