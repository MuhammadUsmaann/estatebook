import React from 'react'
import Profile from '../pages/profilesetting-profile'
import Preferences from '../pages/profilesetting-preference'
import ChangePassword from '../pages/profilesetting-changepassword'
import ProfileIcon from '../components/Icons/profileIcon'
import PreferenceIcon from '../components/Icons/preferenceIcon'
import LockIcon from '../components/Icons/lockIcon'
const ProfileSetting = () => {
    return (
        <div className='content-page w-100' id='profilesetting'>

            <ul className="nav nav-tabs border-0 mb-1" id="myTab" role="tablist">
                <li className="nav-item ">
                    <a
                        className="links  mb-2 mr-3 active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        <ProfileIcon /> <span className='pl-2'>Profile</span>
                    </a>
                </li>
                <li className="nav-item ">
                    <a
                        className="links  mb-2 mr-3 "
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        <PreferenceIcon /> <span className='pl-2'>Preferences</span>
                    </a>
                </li>
                <li className="nav-item ">
                    <a
                        className="links  mb-2 mr-3 "
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                    >
                        <LockIcon /> <span className='pl-2'>Change Password</span>

                    </a>
                </li>
            </ul>
            <div className="tab-content w-100" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    <Profile />
                </div>
                <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <div className="audio-messages">
                        <Preferences />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                >
                    <div className="audio-messages">
                        <ChangePassword />
                    </div>
                </div>
            </div>


            {/* <div className="justify-content-between flex-md-row flex-column d-flex align-items-center w-100 pt-4 text-light-grey font-16 font-weight-400">
                <p className='text-center mb-md-0 mb-2'>© Copyright 2022 Estate Book. All Rights Reserved</p>
                <p className='text-center'>Terms & Conditions  |  Privacy Policy</p>
            </div> */}
        </div>
    )
}

export default ProfileSetting
