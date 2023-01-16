import React from 'react'
import BuildingSectionOne from '../buildingSection'
import TemplateTotals from '../templateTotal'
import Template5Content from './template5content'

const Template5 = () => {
    return (
        <div className='bg-white'>
            <BuildingSectionOne />
            <TemplateTotals />
            <Template5Content />
        </div>
    )
}

export default Template5