import React from 'react'

const ChangePassword = () => {

    return (
        <div className='profile-setting-detail d-flex justify-content-center align-items-center'>
            <div className='w-50'>

                <form>
                    <div className=''>
                        <div className="d-flex flex-column mb-4 w-100 mr-4">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="password">
                                Old Password
                            </label>
                            <input type="password" required placeholder='Enter Older Password' className='form-control form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                New Password
                            </label>
                            <input required type='password' placeholder='Enter New Password' className='form-control form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                        <div className="d-flex flex-column mb-4 w-100">
                            <label
                                className="font-16 font-weight-600 pb-2 "
                                htmlFor="email">
                                Confirm Password
                            </label>
                            <input required type='password' placeholder='Confirm Password' className='form-control form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                        </div>
                    </div>

                    <div className="justify-content-end d-flex align-items-center mt-5">
                        <button className='btn-brown-bg'>
                            Save Changes
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ChangePassword
