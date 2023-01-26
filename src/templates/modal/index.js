import Modal from 'react-modal';
import React from 'react'
import { useState } from 'react';
import CloseIcon from '../../components/Icons/closeIcon'

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
        padding: '40px',
        overflow: 'auto',
        // width: '780px',
        // height: '784px'

    },
    overlay: {
        zIndex: '10'
    },
};
const CustomModal = (props) => {
    const { children, openModalCheck, setopenModalCheck } = props;
    // const [modalIsOpen, setIsOpen] = useState(openModalCheck);
    // console.log(modalIsOpen, "sfsdsfs")

    function openModal() {
        setopenModalCheck(true);
    }

    function closeModal() {
        setopenModalCheck(false);
    }

    return (
        <Modal
            isOpen={openModalCheck}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"

        >
            <div className='d-flex justify-content-end align-items-center '>
                <button onClick={closeModal}><CloseIcon /></button>
            </div>
            {children}
            <div className='d-flex justify-content-end flex-sm-row flex-column align-items-sm-center flex-wrap'>
                <button className='btn-brown-outline h-48px mb-sm-0 mb-3' onClick={closeModal}>Cancel</button>
                <button className='btn-brown-bg ml-sm-3 px-5 h-48px'>Edit Template</button>

            </div>
        </Modal>

    )
}

export default CustomModal