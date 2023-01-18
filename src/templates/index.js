import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingFooter from '../landing page/footer/landingFooter'
import BillingIndex from './billing'
import TemplatesHeader from './Header/Header'
import SelectTemplate from './select template'
import Template1 from './template1'
import Template2 from './template2'
import Template03 from './template3/featured'
import Template4 from './template4'
import Template5 from './template5'
import Template6 from './template6'
import './template.css'


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
                <Route path="/template6" element={<Template6 />} />
                <Route path="/selecttemplate" element={<SelectTemplate />} />
                <Route path="/selecttemplate/billing" element={<BillingIndex />} />

            </Routes>
            <LandingFooter />
        </div>
    )
}

export default PreDefinedTemplates