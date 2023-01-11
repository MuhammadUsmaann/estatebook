import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingFooter from '../landing page/footer/landingFooter'
import FeaturedProperties from './featured/featuredProperties'
import TemplatesHeader from './Header/Header'
import TemplateContent from './template content'
import './template.css'
import TemplateMain from './templatesmain'
import TemplateTotals from './templateTotal'

const PreDefinedTemplates = () => {
    return (
        <div>
            <TemplatesHeader />
            <TemplateMain />
            <TemplateTotals />
            <Routes>
                <Route path="/properties" element={<TemplateContent />} />
                <Route path="/featuredproperties" element={<FeaturedProperties />} />
            </Routes>
            <LandingFooter />
        </div>
    )
}

export default PreDefinedTemplates