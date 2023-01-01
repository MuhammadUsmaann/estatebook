import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '../../../components/Icons/menuIcon';
import SearchIcon from '../../../components/Icons/searchIcon.jsx';
import Logo from '../../../Logo.png'
import Hooks from "../../../hooks"
import { UserDropdownRoutes, NavbarRoutes } from './HeaderRoutes';
import UserIcon from '../../../components/Icons/userIcon';

export default function Header(props) {
  const { isOpen, setIsOpen } = props;

  const userinfo = useSelector((state) => state.UserLogin.data.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const { Logout, ActivatedRoutes } = Hooks();
  const ToggleProfileDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropDown = UserDropdownRoutes();
  const NavBarRoutes = NavbarRoutes();

  return (
    <>
      <div className='app-header'>
        <div className=' d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <button className='mr-4' onClick={() => { setIsOpen(!isOpen) }}>
              <MenuIcon />
            </button>
            <div className='app-Logo d-flex align-items-center justify-content-center ml-3'>
              <img src={Logo} />
              <p className='App-logo-text'>Profile <span className='text-skin-brown'>Builder</span></p>
            </div>
          </div>

          <div className='d-flex align-items-center gap-16'>
            <button className='btn-brown-outline'>My Listing</button>
            <button className='btn-brown-bg'>Post Listing</button>
            <form>
              <div className='position-relative'>
                <input placeholder='Company ID' className='search-bar' />
                <button className='search-bar-icon'>
                  <SearchIcon />
                </button>
              </div>
            </form>
            <div className='user'>
              Tony Stark
              <div className='user-icon'>
                <UserIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
