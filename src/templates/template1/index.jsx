import React from 'react'
import TemplateContent from './template content/index'
import TemplateMain from '../templatesmain'
import TemplateTotals from '../templateTotal'

const Template1 = () => {
    return (
        <div>
            <TemplateMain />
            <TemplateTotals />
            <TemplateContent />
        </div>
    )
}

export default Template1