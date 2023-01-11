import React from 'react'
import FeaturedImage from '../components/images/featuredImage'
import Soldproperty from '../components/images/soldproperty'
import TotalProperties from '../components/images/totalProperties'
import AgentsImage from '../components/images/agentsImage'
import { NavLink } from 'react-router-dom'

const totals = [
    {
        link: '/properties',
        text: 'Total Properties Listed',
        number: 40,
        icon: <TotalProperties />
    },
    {
        link: '/featuredproperties',
        text: 'Featured Properties',
        number: 20,
        icon: <FeaturedImage />
    },
    {
        link: '/soldproperties',
        text: 'Properties Sold',
        number: 129,
        icon: <Soldproperty />
    },
    {
        link: '/agents',
        text: 'Total Agents',
        number: 54,
        icon: <AgentsImage />
    },
]
const TemplateTotals = () => {
    return (
        <div className='template-totals h-100 row m-0 '>
            {
                totals.map((data, index) => {
                    return (
                        <div key={index} className='col-xl-3 col-md-6 col-12 mb-xl-0 mb-3 p-0 h-100' >
                            <NavLink to={data.link} className='subdiv text-light-black d-flex justify-content-start align-items-center mr-md-3'>
                                <div className='p-4 bg-skin-brown rounded-6 mr-3'>
                                    {data.icon}
                                </div>
                                <div>
                                    <p className='font-18 font-weight-500 mb-3'>{data.text}</p>
                                    <p className='font-64 font-weight-700'>{data.number}</p>

                                </div>
                            </NavLink>

                        </div>
                    )
                })
            }
        </div>

    )
}

export default TemplateTotals