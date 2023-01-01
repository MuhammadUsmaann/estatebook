import React from 'react'

function AgentIcon(props) {
    const isActive = props.isActive;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isActive ? 'fill-skin-brown' : ''}`} width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M9.55181 11.7461C9.42632 11.734 9.27573 11.734 9.1377 11.7461C6.15105 11.6492 3.7793 9.28672 3.7793 6.3791C3.7793 3.4109 6.26399 1 9.35103 1C12.4255 1 14.9228 3.4109 14.9228 6.3791C14.9102 9.28672 12.5385 11.6492 9.55181 11.7461Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.6504 3.423C21.0849 3.423 23.0426 5.32507 23.0426 7.66329C23.0426 9.95304 21.1602 11.8188 18.8136 11.9036C18.7132 11.8915 18.6002 11.8915 18.4873 11.9036" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.27763 16.2166C0.240789 18.1792 0.240789 21.3776 3.27763 23.3281C6.72859 25.5573 12.3882 25.5573 15.8391 23.3281C18.876 21.3655 18.876 18.1671 15.8391 16.2166C12.4007 13.9995 6.74114 13.9995 3.27763 16.2166Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.0723 22.8072C21.9758 22.6254 22.8291 22.2741 23.5319 21.7532C25.4895 20.3357 25.4895 17.9975 23.5319 16.58C22.8417 16.0712 22.0009 15.732 21.1099 15.5381" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default AgentIcon