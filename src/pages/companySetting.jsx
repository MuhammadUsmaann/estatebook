import React from 'react'
import PhoneInput from 'react-phone-input-2';
import DeleteIcon from '../components/Icons/deleteIcon';
import Premiumicon from '../components/Icons/premiumicon';
import ProfilePicture from '../components/images/profile.png'
import UploadImage from '../components/images/uploadimage';
import CompanyFile from '../components/Icons/companyFile';

const CompanySetting = () => {
    const [mobphone, setmobPhone] = React.useState("+9239699999");
    const handleChangeMob = (newPhone) => {
        setmobPhone(newPhone);
    };
    const [landline, setlandline] = React.useState("+9239699999");
    const handleChangelandline = (newPhone) => {
        setlandline(newPhone);
    };
    return (
        <div className='content-page w-100' id='companysetting'>
            <div className=' row m-0 w-100 '>
                <div className='col-xl-7 p-0 col-eq-height'>
                    <div className='content-box col-eq-height'>
                        <div className='d-flex flex-xl-row flex-column justify-content-between align-items-xl-center pb56px'>
                            <div className='d-flex flex-wrap flex-sm-row flex-column justify-between mb-xl-0 mb-4 align-items-sm-center align-items-start
                    '>
                                <img className='pr-sm-3' src={ProfilePicture} />
                                <div className=' mt-sm-0 mt-2'>
                                    <h3 className='pb-2 font-24 font-weight-700 text-light-black'>RC Real Estate Pty Ltd</h3>
                                    <p className='pb-3 font-18 font-weight-400 text-grey'>company@email.com</p>
                                    <button className='premium-btn font-12 font-weight-600'> <Premiumicon /><span className='pl-1'>Premium User</span></button>
                                </div>
                            </div>
                            <div>
                                <p className='font-16 font-weight-600 pb-2 text-light-black'>
                                    Change Picture
                                </p>
                                <button className='btn-brown-outline'>Upload Picture</button>
                            </div>
                        </div>
                        <form>
                            <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                                <div className="d-flex flex-column mb-32 w-100 mr-md-4">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="name">
                                        Company Name
                                    </label>
                                    <input type="text" required placeholder='RC Real Estate Pty LTD' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                                </div>
                                <div className="d-flex flex-column mb-32 w-100">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="email">
                                        Email
                                    </label>
                                    <input required type='email' placeholder='Company@email.com' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                                </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                                <div className="d-flex flex-column mb-32  w-100 mr-md-4">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="mobile">
                                        Mobile
                                    </label>
                                    <PhoneInput
                                        onChange={(mobphone) => handleChangeMob(mobphone)}
                                        specialLabel={""}
                                        disableDropdown={false}
                                        inputProps={{
                                            name: "phone",
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                                    />                    </div>
                                <div className="d-flex flex-column mb-32 w-100">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="landline">
                                        Land Line
                                    </label>
                                    <PhoneInput
                                        onChange={(landline) => handleChangelandline(landline)}
                                        specialLabel={""}
                                        disableDropdown={false}
                                        inputProps={{
                                            name: "phone",
                                            required: true,
                                            autoFocus: true,
                                        }}
                                        inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                                <div className="d-flex flex-column mb-32 w-100 mr-md-4">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="companyid">
                                        Company ID
                                    </label>
                                    <input type="text" required placeholder='RC8719032' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                                </div>
                                <div className="d-flex flex-column mb-32 w-100">
                                    <label
                                        className="font-16 font-weight-600 pb-2 "
                                        htmlFor="referenceid">
                                        Reference ID
                                    </label>
                                    <input required type='text' placeholder='RC873692' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                                </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                                <div className="d-flex flex-column mb-32 w-100 mr-md-4">
                                    <div className='selectdiv'>
                                        <label
                                            className="font-16 font-weight-600 pb-2 "
                                            htmlFor="email">
                                            Country
                                        </label>
                                        <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                            <option>UAE</option>
                                        </select>                    </div>
                                </div>
                                <div className="d-flex flex-column mb-32 w-100">
                                    <div className='selectdiv'>
                                        <label
                                            className="font-16 font-weight-600 pb-2 "
                                            htmlFor="email">
                                            City
                                        </label>
                                        <select required className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100'>
                                            <option>Dubai</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column mb-5">
                                <label
                                    className="font-16 font-weight-600 pb-2 "
                                    htmlFor="address">
                                    Address
                                </label>
                                <input required type="text" placeholder='Enter address' className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100' />
                            </div>
                            <div className="justify-content-between align-items-start flex-md-row flex-column d-flex align-items-md-center ">
                                <label className="custom-checkbox mb-md-0 mb-3 d-flex align-items-center ">
                                    <span className="pl-2 text-light-black font-weight-400">
                                        Update details in all property listings
                                    </span>
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <button className='btn-brown-bg'>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='col-xl-5 p-0 col-eq-height'>
                    <div className='content-box mt-xl-0 mt-3 ml-xl-3 col-eq-height'>
                        <p className='font-24 font-weight-700 text-light-black'>Company Images & Videos</p>
                        <div className='horizontal-line'></div>
                        <div className='d-flex flex-column align-items-center upload-image-box p30px mb-2 text-center'>
                            <UploadImage />
                            <p className='font-18 font-weight-600 text-light-black pt-4 pb-3'>Drag and drop files, or <span className='text-skin-brown'>Browse</span></p>
                            <p className='font-14 text-light-grey font-weight-400'>Support PNG, JPEG, and MP4, GIF</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 upload-image-box mt-4 '>
                            <div className='d-flex align-items-center '>
                                <CompanyFile />
                                <div className='pl-3'>
                                    <p className='font-18 font-weight-600 text-light-black pb-2'>Image98.JPEG</p>
                                    <p className='font-12 text-light-grey font-weight-400'>238 Kb</p>
                                </div>
                            </div>
                            <div className='bg-light-skin rounded-8 p-2'>
                                <DeleteIcon />
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 upload-image-box mt-3 '>
                            <div className='d-flex align-items-center '>
                                <CompanyFile />
                                <div className='pl-3'>
                                    <p className='font-18 font-weight-600 text-light-black pb-2'>Image98.JPEG</p>
                                    <p className='font-12 text-light-grey font-weight-400'>238 Kb</p>
                                </div>
                            </div>
                            <div className='bg-light-skin rounded-8 p-2'>
                                <DeleteIcon />
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 upload-image-box mt-3 '>
                            <div className='d-flex align-items-center '>
                                <CompanyFile />
                                <div className='pl-3'>
                                    <p className='font-18 font-weight-600 text-light-black pb-2'>Image98.JPEG</p>
                                    <p className='font-12 text-light-grey font-weight-400'>238 Kb</p>
                                </div>
                            </div>
                            <div className='bg-light-skin rounded-8 p-2'>
                                <DeleteIcon />
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-wrap gap-8 upload-image-box mt-3 '>
                            <div className='d-flex align-items-center '>
                                <CompanyFile />
                                <div className='pl-3'>
                                    <p className='font-18 font-weight-600 text-light-black pb-2'>Image98.JPEG</p>
                                    <p className='font-12 text-light-grey font-weight-400'>238 Kb</p>
                                </div>
                            </div>
                            <div className='bg-light-skin rounded-8 p-2'>
                                <DeleteIcon />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default CompanySetting
