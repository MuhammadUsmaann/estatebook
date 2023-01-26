import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingFooter from './footer/landingFooter'
import LandingHeader from './header/landingHeader'
import LandingContent from './landingcontent'
import './landingpage.css'
import { useLocation } from 'react-router-dom';
import NotFound from '../utils/notFound'

const LandingPage = () => {
    const location = useLocation();

    return (
        <div>

            <LandingHeader />
            <Routes>

                <Route path="/" element={<LandingContent />} />
                <Route path="*" element={<Navigate replace to="/notfound" />} />

            </Routes>

            <LandingFooter />
        </div>
    )
}

export default LandingPage