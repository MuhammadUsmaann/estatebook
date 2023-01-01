import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const UserLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                {children}



            </div>

        </>
    )
}

export default UserLayout