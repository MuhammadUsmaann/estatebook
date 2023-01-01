import React from 'react'

const Preferences = () => {

    return (
        <div className='profile-setting-detail d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <form>
                    <label className="d-flex align-items-center cr-p w-100 justify-content-between">
                        <div>
                            <p className='font-16 font-weight-600 text-light-black mb-2'>
                                Email Notification
                            </p>
                            <p className='font-14 font-weight-400 text-grey'>
                                Allow to to receive email notifications
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            className="custom-toggle-input2 ml-2"
                        />
                    </label>
                    <div className='horizontal-line'></div>

                    <label className="d-flex align-items-center cr-p w-100 justify-content-between">
                        <div>
                            <p className='font-16 font-weight-600 text-light-black mb-2'>
                                Newsletters
                            </p>
                            <p className='font-14 font-weight-400 text-grey'>
                                Allow to stay updated and receive newsletter
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            className="custom-toggle-input2 ml-2"
                        />
                    </label>
                    <div className='horizontal-line'></div>

                    <label className="d-flex align-items-center cr-p w-100 justify-content-between">
                        <div>
                            <p className='font-16 font-weight-600 text-light-black mb-2'>
                                Automated Reports
                            </p>
                            <p className='font-14 font-weight-400 text-grey'>
                                Allow to send us reports automatically incase of any issue
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            className="custom-toggle-input2 ml-2"
                        />
                    </label>
                    <div className='horizontal-line'></div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="d-flex flex-column mb-4 w-100 mr-4">
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="currency">
                                    Currency
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>AED</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <div className='selectdiv'>
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="areaunit">
                                    Area Unit
                                </label>
                                <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                    <option>Sq. Ft.</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="justify-content-end d-flex align-items-center ">

                        <button className='btn-brown-bg'>
                            Save Changes
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Preferences
