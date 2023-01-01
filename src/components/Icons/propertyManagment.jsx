import React from 'react'

function PropertManagmentIcon(props) {
    const isActive = props.isActive;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isActive ? 'fill-skin-brown' : ''}`} width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M6.85645 20.38V17.896" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" />
            <path d="M13 20.38V15.412" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" />
            <path d="M19.1436 20.38V12.916" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" />
            <path d="M19.1444 5.62003L18.5924 6.26803C15.5324 9.84403 11.4284 12.376 6.85645 13.516" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" />
            <path d="M15.6279 5.62003H19.1439V9.12403" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.4 25H16.6C22.6 25 25 22.6 25 16.6V9.4C25 3.4 22.6 1 16.6 1H9.4C3.4 1 1 3.4 1 9.4V16.6C1 22.6 3.4 25 9.4 25Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default PropertManagmentIcon