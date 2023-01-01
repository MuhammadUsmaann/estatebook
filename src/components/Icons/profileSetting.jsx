import React from 'react'

function ProfileSettingIcon(props) {
    const isActive = props.isActive;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isActive ? 'fill-skin-brown' : ''}`} width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M9.4 25H16.6C22.6 25 25 22.6 25 16.6V9.4C25 3.4 22.6 1 16.6 1H9.4C3.4 1 1 3.4 1 9.4V16.6C1 22.6 3.4 25 9.4 25Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.2842 20.92V17.32" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.2842 7.54V5.2" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.2841 13.78C19.0072 13.78 20.4041 12.3831 20.4041 10.66C20.4041 8.93688 19.0072 7.54001 17.2841 7.54001C15.5609 7.54001 14.1641 8.93688 14.1641 10.66C14.1641 12.3831 15.5609 13.78 17.2841 13.78Z" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.71582 20.8V18.46" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.71582 8.8V5.2" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.7157 18.46C10.4388 18.46 11.8357 17.0631 11.8357 15.34C11.8357 13.6169 10.4388 12.22 8.7157 12.22C6.99258 12.22 5.5957 13.6169 5.5957 15.34C5.5957 17.0631 6.99258 18.46 8.7157 18.46Z" stroke="#B5B5B5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default ProfileSettingIcon