import React from 'react'

const AgentsCard = (props) => {
    const { text, location, picture, index } = props;
    return (
        <div key={index} className=' d-flex justify-content-start align-items-center '>
            {picture}
            <div className='pl-3'>
                <p className='pb-1 font-20 font-weight-600'>{text}</p>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default AgentsCard