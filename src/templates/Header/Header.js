import React, { useState } from 'react';
import MenuIcon from '../../components/Icons/menuIcon';
import Logo from '../../Logo.png'
import UserIcon from '../../components/Icons/userIcon';
import GobackIcon from '../../components/Icons/gobackIcon';
import { useNavigate } from 'react-router-dom';

export default function TemplatesHeader(props) {
  // const { isOpen, setIsOpen } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className='template-header'>
        <div className=' d-flex h-100 justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            {/* <button className='mr-4' onClick={() => { setIsOpen(!isOpen) }}>
              <MenuIcon />
            </button> */}
            <button className='menu-btn mr-4' >
              <MenuIcon />
            </button>
            <div className='app-Logo d-flex align-items-center justify-content-center ml-3'>
              <img src={Logo} />
              <p className='App-logo-text d-sm-block d-none'>Estate Book</p>
            </div>
          </div>

          <div className='d-flex align-items-center gap-16'>
            <div className='d-flex align-items-center'>
              <div className='align-items-center d-md-flex d-none mr-5 cr-p' onClick={() => navigate(-1)}>
                <GobackIcon />
                <span className='font-18 font-weight-400 pl-3'>Go Back</span>
              </div>
              <button className='btn-brown-bg d-lg-flex d-none'>Edit Template</button>
            </div>



            <div className='user'>
              Tony Stark
              <div className='user-icon'>
                <UserIcon />
              </div>
            </div>

            <div className="dropdown user-dropdown d-lg-none d-block">
              <button className="user-icon rounded-8" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <UserIcon />
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item d-flex align-items-center justify-content-center border-bottom pb-2 font-18 font-weight-400" >Edit Template</a>
                <a className="dropdown-item font-18 font-weight-400 pt-2" >
                  <p className='d-md-none d-flex align-items-center justify-content-center'> <GobackIcon /><span className=' pl-3'>Go Back</span></p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
