import React from 'react'
import EditIcon from '../components/Icons/editIcon'
import Agent from '../components/images/agent'

const tableData = [
    {
        id: 1,
        image: '',
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 2,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 3,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    ,
    {
        id: 4,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    ,
    {
        id: 5,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    ,
    {
        id: 2,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 3,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 4,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 5,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 6,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 7,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 8,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 9,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    }
    ,
    {
        id: 10,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 11,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
    {
        id: 12,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
]
const Agents = () => {
    return (

        <>
            <div className='content-page' id='agentspage'>
                <div className='d-flex justify-content-end align-items-center w-100'>
                    <button className='btn-brown-bg'>Add New Agent</button>
                </div>
                <div className='w-100'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>
                                    #No.
                                </th>
                                <th>
                                </th>
                                <th>
                                    Full Name
                                </th>
                                <th>
                                    Agent ID
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Mobile No.
                                </th>
                                <th>
                                    Company Name
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {tableData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {data.id}
                                        </td>
                                        <td>
                                            <Agent />
                                        </td>
                                        <td>
                                            {data.fullName}
                                        </td>
                                        <td>
                                            {data.agentId}
                                        </td>
                                        <td>
                                            {data.email}
                                        </td>
                                        <td>
                                            {data.mobNo}
                                        </td>
                                        <td>
                                            {data.companyName}
                                        </td>
                                        <td>
                                            <EditIcon />
                                        </td>
                                    </tr>
                                )

                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Agents
