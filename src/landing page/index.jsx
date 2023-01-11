import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PreDefinedTemplates from '../templates'
import LandingFooter from './footer/landingFooter'
import LandingHeader from './header/landingHeader'
import LandingContent from './landingcontent'
import './landingpage.css'
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
    const location = useLocation();

    return (
        <div>

            <LandingHeader />
            <Routes>

                <Route path="/" element={<LandingContent />} />
                {/* <Route path="/properties" element={<PreDefinedTemplates />} /> */}
                {/* <Route path="/postlisting" element={<PostListing />} />
                <Route path="/profilesettings" element={<ProfileSetting />} />
                <Route path="/companysettings" element={<CompanySetting />} />
                <Route path="/agents" element={<Agents />} /> */}

            </Routes>

            <LandingFooter />
        </div>
    )
}

export default LandingPage