import React from 'react'
import EditIcon from '../components/Icons/editIcon'
import Agent from '../components/images/agent'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import CloseIcon from '../components/Icons/closeIcon'
import PhoneInput from 'react-phone-input-2';
import PersonIcon from '../components/Icons/personIcon';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFFFFF',
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        border: '0',
        padding: '40px'

    },
};
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
    {
        id: 13,
        fullName: 'Tony Stark',
        agentId: '18720937',
        email: 'tonystark@email.com',
        mobNo: '+91 012 3456 789',
        companyName: 'RC Real Estate Pty Ltd',

    },
]
const Agents = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [mobphone, setmobPhone] = React.useState("+9239699999");
    const handleChangeMob = (newPhone) => {
        setmobPhone(newPhone);
    };
    return (

        <>
            <div className='content-page w-100' id='agentspage'>
                <div className='d-flex justify-content-end align-items-center w-100'>
                    <button className='btn-brown-bg' onClick={openModal}>Add New Agent</button>
                </div>
                <div className='w-100 rounded-8'>
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
                                            <span className='cr-p'><EditIcon /></span>
                                        </td>
                                    </tr>
                                )

                            })}

                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex justify-content-between align-items-center '>
                    <p className='font-24 font-weight-600 text-light-black'>Add<span className='text-skin'> New Agent</span></p>
                    <button onClick={closeModal}><CloseIcon /></button>
                </div>
                <div className='horizontal-line my-4'></div>
                <div className='pt-5 d-flex justify-content-between'>
                    <div className='pr-4'>
                        <div className=' bg-light-grey rounded-8 d-flex justify-content-center align-items-center grey-profile-box'>
                            <PersonIcon />
                        </div>
                        <button className='btn-brown-outline'>Upload Picture</button>
                    </div>
                    <form>
                        <div className='d-flex justify-content-between mb-4 align-items-center'>
                            <div className="d-flex flex-column w-100 mr-3">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="name">
                                    Full Name
                                </label>
                                <input type="text" required placeholder='Enter Full Name' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                            </div>
                            <div className="d-flex flex-column w-100">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Agent ID
                                </label>
                                <input required placeholder='Enter Agent ID' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mb-4 align-items-center'>
                            <div className="d-flex flex-column w-100 mr-3">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Email
                                </label>
                                <input required type='email' placeholder='Enter Email Address' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                            </div>
                            <div className="d-flex flex-column w-100">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="email">
                                    Mobile No.
                                </label>
                                <PhoneInput
                                    onChange={(mobphone) => handleChangeMob(mobphone)}
                                    specialLabel={""}
                                    disableDropdown={false}
                                    inputProps={{
                                        name: "phone",
                                        required: true,
                                        autoFocus: true,
                                    }}
                                    inputClass="h-48px form-control form-control border-grey p-input-style font-16 w-100"
                                />
                            </div>

                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-48px'>
                            <div className="d-flex flex-column mb-3 w-100">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="name">
                                    Company Name
                                </label>
                                <input type="text" required placeholder='Enter Company Name' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                            </div>
                        </div>
                        <div className="justify-content-end d-flex align-items-center ">
                            <button className='btn-brown-outline mr-3' onClick={closeModal}>
                                Cancel
                            </button>
                            <button className='btn-brown-bg' onClick={closeModal}>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default Agents
