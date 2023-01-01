import React from 'react'
import { useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const UserLayout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='app-container'>
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
            <div className='main-content'>
            {children}
            </div>
        </ div>
    )
}

export default UserLayout