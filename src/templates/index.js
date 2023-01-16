import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingFooter from '../landing page/footer/landingFooter'
import FeaturedProperties from './template2/featured/featuredProperties'
import TemplatesHeader from './Header/Header'
import './template.css'
import Template1 from './template1'
import Template2 from './template2'
import Template03 from './template3/featured'
import Template4 from './template4'
import Template5 from './template5'


const PreDefinedTemplates = () => {
    return (
        <div>
            <TemplatesHeader />
            <Routes>
                <Route path="/template1" element={<Template1 />} />
                <Route path="/template2" element={<Template2 />} />
                <Route path="/template3" element={<Template03 />} />
                <Route path="/template4" element={<Template4 />} />
                <Route path="/template5" element={<Template5 />} />

            </Routes>
            <LandingFooter />
        </div>
    )
}

export default PreDefinedTemplates