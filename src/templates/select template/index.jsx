import React from 'react'
import templateDesign1 from '../../components/images/templatedesign1.png'
import templateDesign2 from '../../components/images/templatedesign2.png'
import templateDesign3 from '../../components/images/templatedesign3.png'
import templateDesign4 from '../../components/images/templatedesign4.png'
import selectTemplate from '../../components/images/selecttemplate-s1.png'
import { NavLink } from 'react-router-dom'

const SelectTemplate = () => {
    return (
        <div className='bg-white'>
            <div className='selecttemplate-s1'>
                <img src={selectTemplate} />
                <div className='selecttemplate-s1-content'>
                    <p className='font-18 pb-2 font-weight-600 text-light-black'>Select a Premium</p>
                    <h2 className='font-36 font-weight-700 text-skin-brown line-height-100'>Profile Template</h2>
                </div>

            </div>

            <div className='template-content'>
                <div className='d-flex flex-md-row flex-column gap-24 mb-4 mb-md-0'>
                    <div className='  mb-md-4'>
                        <div className='column-sub p-4 '>
                            <div className='d-flex pb-4  align-items-sm-center bb-2px align-items-start justify-content-between flex-sm-row flex-column mb-4 border-skin'>
                                <p className='font-24 font-weight-700 text-light-black'>Estate Book - Template 1</p>
                            </div>
                            <img src={templateDesign1} />
                            <div className='d-flex justify-content-between mt-5 flex-sm-row flex-column align-items-center gap-16'>
                                <NavLink to='billing' className='btn-brown-bg px-3 h-56px font-16 font-weight-600 w-100'> Get This Template </NavLink>
                                <NavLink to='/template2' className='premium-btn h-56px font-16 font-weight-600 w-100'> Preview  </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=' mb-md-4'>
                        <div className='column-sub p-4 '>
                            <div className='d-flex pb-4  align-items-sm-center bb-2px align-items-start justify-content-between flex-sm-row flex-column mb-4 border-skin'>
                                <p className='font-24 font-weight-700 text-light-black'>Estate Book - Template 2</p>
                            </div>
                            <img src={templateDesign2} />
                            <div className='d-flex justify-content-between mt-5 flex-sm-row flex-column align-items-center gap-16'>
                                <NavLink to='billing' className='btn-brown-bg px-3 h-56px font-16 font-weight-600 w-100'> Get This Template </NavLink>
                                <NavLink to='/template4' className='premium-btn h-56px font-16 font-weight-600 w-100'> Preview  </NavLink>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-flex flex-md-row flex-column gap-24'>
                    <div className='  mb-md-4'>
                        <div className='column-sub p-4 '>
                            <div className='d-flex pb-4  align-items-sm-center bb-2px align-items-start justify-content-between flex-sm-row flex-column mb-4 border-skin'>
                                <p className='font-24 font-weight-700 text-light-black'>Estate Book - Template 3</p>
                            </div>
                            <img src={templateDesign3} />
                            <div className='d-flex justify-content-between mt-5 flex-sm-row flex-column align-items-center gap-16'>
                                <NavLink to='billing' className='btn-brown-bg px-3 h-56px font-16 font-weight-600 w-100'> Get This Template </NavLink>
                                <NavLink to='/template3' className='premium-btn h-56px font-16 font-weight-600 w-100'> Preview  </NavLink>

                            </div>
                        </div>
                    </div>
                    <div className=' mb-md-4 '>
                        <div className='column-sub p-4 '>
                            <div className='d-flex pb-4  align-items-sm-center bb-2px align-items-start justify-content-between flex-sm-row flex-column mb-4 border-skin'>
                                <p className='font-24 font-weight-700 text-light-black'>Estate Book - Template 4</p>
                            </div>
                            <img src={templateDesign4} />
                            <div className='d-flex justify-content-between mt-5 flex-sm-row flex-column align-items-center gap-16'>
                                <NavLink to='billing' className='btn-brown-bg px-3 h-56px font-16 font-weight-600 w-100'> Get This Template </NavLink>
                                <NavLink to='/template1' className='premium-btn h-56px font-16 font-weight-600 w-100'> Preview  </NavLink>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SelectTemplate