import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '../../../components/Icons/menuIcon';
import SearchIcon from '../../../components/Icons/searchIcon.jsx';
import Logo from '../../../Logo.png'
import Hooks from "../../../hooks"
import { UserDropdownRoutes, NavbarRoutes } from './HeaderRoutes';
import UserIcon from '../../../components/Icons/userIcon';
import ProfileIcon from '../../../components/Icons/profileIcon';

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
        <div className=' d-flex h-100 justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <button className='mr-4' onClick={() => { setIsOpen(!isOpen) }}>
              <MenuIcon />
            </button>
            <div className='app-Logo d-flex align-items-center justify-content-center ml-3'>
              <img src={Logo} />
              <p className='App-logo-text d-none d-sm-block'>Profile <span className='text-skin-brown'>Builder</span></p>
            </div>
          </div>

          <div className='d-flex align-items-center gap-16'>
            <div className='d-flex align-items-center gap-16 listingbutton'>
              <button className='btn-brown-outline'>My Listing</button>
              <button className='btn-brown-bg'>Post Listing</button>
            </div>


            <div className='selectdiv listingbutton-select d-none' >
              <select required className='h-48px btn-brown-outline top-13px right-8px font-16 font-weight-400 w-100'>
                <option>Listings</option>
                <option className='btn-brown-outline'>My Listing</option>
                <option className='btn-brown-bg'>Post Listing</option>
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
            <div className='user'>
              Tony Stark
              <div className='user-icon'>
                <UserIcon />
              </div>
            </div>
            <div className="dropdown user-dropdown d-lg-none d-block">
              <button className="user-icon rounded-8" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <UserIcon/>  
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item d-flex align-items-center justify-content-center" href="#"><ProfileIcon/> <span className="pl-2">Tony Stark</span></a>
                <a className="dropdown-item d-flex align-items-center justify-content-center" href="#">My Listing</a>
                <a className="dropdown-item d-flex align-items-center justify-content-center" href="#">Post Listing</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
