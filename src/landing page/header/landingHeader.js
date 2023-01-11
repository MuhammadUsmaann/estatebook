import React, { useState } from 'react';
import MenuIcon from '../../components/Icons/menuIcon';
import SearchIcon from '../../components/Icons/searchIcon.jsx';
import Logo from '../../Logo.png'
import Hooks from "../../hooks"
import UserIcon from '../../components/Icons/userIcon';
import ProfileIcon from '../../components/Icons/profileIcon';
import { LandingHeaderRoutes } from './landingHeaderRoutes';
import { Link, useLocation } from 'react-router-dom';

export default function LandingHeader(props) {

    const Location = useLocation();

    const headerRoutes = LandingHeaderRoutes();

    return (
        <>
            <div className='landing-header'>
                <div className=' d-flex h-100 justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <div className='app-Logo d-flex align-items-center justify-content-center ml-3'>
                            <img src={Logo} />
                        </div>
                    </div>

                    <div className='d-flex align-items-center gap-16 '>
                        <div className='align-items-center gap-16 pr-5 d-xl-flex d-none'>
                            {
                                headerRoutes.map((item, index) => {
                                    return (<Link key={index} to={`${item.link.toLowerCase()}`} className={`header-item ${item.link.toLowerCase() === Location.pathname ? 'header-item-active' : ''}`}>
                                        <span className="pl-3"> {item.name} </span>
                                    </Link>)

                                })}
                        </div>


                        <div className='selectdiv  d-xl-none d-sm-block d-none' >
                            <select required className='h-48px py-2 btn-brown-outline top-13px right-8px font-16 font-weight-400 w-100'>
                                {
                                    headerRoutes.map((item, index) => {
                                        return (
                                            <option>
                                                {/* <Link key={index} to={`${item.link.toLowerCase()}`} className={`header-item ${item.link.toLowerCase() === Location.pathname ? 'header-item-active' : ''}`}> */}
                                                {item.name}
                                                {/* </Link> */}
                                            </option>
                                        )

                                    })}
                            </select>
                        </div>


                        <form>
                            <div className='position-relative d-md-block d-none'>
                                <input placeholder='Company ID' className='search-bar' />
                                <button className='search-bar-icon'>
                                    <SearchIcon />
                                </button>
                            </div>
                        </form>
                        <div className='user-icon rounded-8 d-sm-flex d-none'>
                            <UserIcon />
                        </div>
                        <div className="dropdown user-dropdown d-sm-none d-block">
                            <button className="user-icon rounded-8" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <UserIcon />
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    headerRoutes.map((item, index) => {
                                        return (
                                            <Link key={index} to={`${item.link.toLowerCase()}`} className={` dropdown-item d-flex align-items-center justify-content-center" ${item.link.toLowerCase() === Location.pathname ? 'header-item-active' : ''}`}>
                                                {item.name}
                                            </Link>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
