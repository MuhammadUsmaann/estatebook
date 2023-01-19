import React, { useRef, useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { loginValidationSchema, formDetail, billingValidationSchema } from "../../utils";
import CustomModal from '../modal';
import PaymentSuccess from '../../components/images/paymentSuccess';
import MasterCard from '../../components/images/masterCard';
import VisaImage from '../../components/images/visa';

const BillingDetail = () => {

    const [mobphone, setmobPhone] = useState("");
    const handleChangeMob = (newPhone) => {
        setmobPhone(newPhone);
    };
    const [landline, setlandline] = useState("");
    const handleChangelandline = (newPhone) => {
        setlandline(newPhone);
    };

    const [editbilldetail, seteditbilldetail] = useState(true);
    const submitBilling = (values) => {
        seteditbilldetail(!editbilldetail);

    }

    const [billingData, setBilling] = useState({
        fname: "",
        lname: "",
        companyname: "",
        companyemail: "",
        country: "",
        city: "",
        address: "",
    });
    const billingHandler = (e) => {
        const { name, value } = e.target;
        setBilling((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    };
    const [paymentData, setpaymentData] = useState({
        name: "",
        cardnumber: "",
        month: "",
        year: "",
        cvv: "",
    });

    const paymentHandler = (e) => {
        const { name, value } = e.target;
        setpaymentData((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    };

    // const initialValues = {
    //     fname: "",
    //     lname: "",
    //     companyname: "",
    //     companyemail: "",
    //     country: "",
    //     city: "",
    //     address: "",
    //     mobphone: "",
    // };

    function handleEnter(event) {
        if (event.key === "Enter") {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            console.log(index)
            form[index + 1].focus();
            event.preventDefault();
        }
    }

    const [ExpMonth, setExpMonth] = useState('');
    const [ExpYear, setExpYear] = useState('');
    const handleExpiryYear = event => {
        const limit = 4;
        setExpYear(event.target.value.slice(0, limit));
        if (event.target.value.length === 4) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            console.log(index)
            form[index + 1].focus();
            event.preventDefault();
        }

    };
    const handleExpiryMonth = event => {
        const limit = 2;
        setExpMonth(event.target.value.slice(0, limit));
        if (event.target.value.length === 2) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            console.log(index)
            form[index + 1].focus();
            event.preventDefault();
        }
    };
    const [Cvv, setCvv] = useState('');
    const handleCvv = event => {
        const limit = 3;
        setCvv(event.target.value.slice(0, limit));
    };

    const [openModalCheck, setopenModalCheck] = useState(false);
    function handlePaymentCheck(e) {
        e.preventDefault();
        setopenModalCheck(true);
        console.log("passed", openModalCheck)
    }
    return (
        <div className='template-content w-100 pt-100' id='billingdetail' >

            <div className=' row m-0 w-100 '>
                <div className='col-xl-8 col-md-7 col-12 p-0 col-eq-height'>
                    <div className='column-sub p-30px col-eq-height'>
                        <div className='pb-30px bb-2px  mb-30px border-skin text-light-black'>
                            <p className='font-24 font-weight-700 '>Billing Details</p>
                            {editbilldetail && <p className='font-18 pt-3 font-weight-600 line-height-24px '>Estate Book collects and uses personal data in accordance with our <u className='text-skin-brown'>Privacy Policy</u>. By creating an account,
                                you agree to our <u className='text-skin-brown'>Terms and Conditions.</u></p>}
                        </div>

                        {editbilldetail ?
                            <>
                                <form onSubmit={() => { seteditbilldetail(!editbilldetail) }}>
                                    <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                        <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder='Tony'
                                                className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.fname ? 'is-invalid' : ''}`}
                                                name="fname"
                                                value={billingData.fname}
                                                onChange={billingHandler} />
                                        </div>
                                        <div className="d-flex flex-column mb-32 w-100">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder='Stark'
                                                className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.lname ? 'is-invalid' : ''}`}
                                                name="lname"
                                                value={billingData.lname}
                                                onChange={billingHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                        <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="name">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder='RC Real Estate Pty LTD'
                                                className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.companyname ? 'is-invalid' : ''}`}
                                                name="companyname"
                                                value={billingData.companyname}
                                                onChange={billingHandler}
                                            />
                                        </div>
                                        <div className="d-flex flex-column mb-32 w-100">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                required
                                                type='email'
                                                placeholder='Company@email.com'
                                                className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.companyemail ? 'is-invalid' : ''}`}
                                                name="companyemail"
                                                value={billingData.companyemail}
                                                onChange={billingHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                        <div className="d-flex flex-column mb-32  w-100 mr-lg-4 mr-sm-4 mr-md-0">
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
                                                value={mobphone}
                                                required
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
                                                value={landline}
                                                inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                        <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                            <div className='selectdiv'>
                                                <label
                                                    className="font-16 font-weight-600 pb-2 "
                                                    htmlFor="email">
                                                    Country
                                                </label>
                                                <select
                                                    required
                                                    className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.country ? 'is-invalid' : ''}`}
                                                    name="country"
                                                    value={billingData.country}
                                                    onChange={billingHandler}
                                                >
                                                    <option>UAE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column mb-32 w-100">
                                            <div className='selectdiv'>
                                                <label
                                                    className="font-16 font-weight-600 pb-2 "
                                                    htmlFor="email">
                                                    City
                                                </label>
                                                <select
                                                    required
                                                    className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.city ? 'is-invalid' : ''}`}
                                                    name="city"
                                                    value={billingData.city}
                                                    onChange={billingHandler}
                                                >
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
                                        <input
                                            required
                                            type="text"
                                            placeholder='Enter address'
                                            className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!billingData.address ? 'is-invalid' : ''}`}
                                            name="address"
                                            value={billingData.address}
                                            onChange={billingHandler}
                                        />
                                    </div>
                                    <div className="justify-content-end d-flex align-items-center ">
                                        <button
                                            type="submit"
                                            className='btn-brown-bg' >
                                            Save and Continue
                                        </button>
                                    </div>
                                </form>

                                {/* <Formik
                                    initialValues={initialValues}
                                    validationSchema={billingValidationSchema}
                                    onSubmit={submitBilling}>
                                    {({ touched, errors, isSubmitting, values }) => (
                                        <Form action="" className="text-light-black">
                                            <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                                <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                                    <label
                                                        className="font-16 font-weight-600 pb-2 "
                                                        htmlFor="fname">
                                                        First Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                        ${touched.fname && errors.fname ? "is-invalid" : ""}`}
                                                        id="fname"
                                                        placeholder="Enter Name"
                                                        name='fname'
                                                    // value={billingData.fname}
                                                    // onChange={billingHandler}

                                                    />
                                                    <ErrorMessage component="div" name="fname" className="invalid-feedback" />
                                                </div>
                                                <div className="d-flex flex-column mb-32 w-100">
                                                    <label
                                                        className="font-16 font-weight-600 pb-2 "
                                                        htmlFor="name">
                                                        Last Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        placeholder='Stark'
                                                        className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                ${touched.lname && errors.lname ? "is-invalid" : ""}`}
                                                        name="lname"
                                                    // value={billingData.lname}
                                                    // onChange={billingHandler}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="lname"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                            </div>
                                            <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                                <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                                    <label
                                                        className="font-16 font-weight-600 pb-2 "
                                                        htmlFor="companyname">
                                                        Company Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        placeholder='RC Real Estate Pty LTD'
                                                        className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                ${touched.companyname && errors.companyname ? "is-invalid" : ""}`}
                                                        name="companyname"
                                                        // value={billingData.companyname}
                                                        // onChange={billingHandler}
                                                        id="companyname"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="companyname"
                                                        className="invalid-feedback"
                                                    />
                                                </div>
                                                <div className="d-flex flex-column mb-32 w-100">
                                                    <label
                                                        className="font-16 font-weight-600 pb-2 "
                                                        htmlFor="email">
                                                        Email
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        id="companyemail"
                                                        placeholder="abcd@gmail.com"
                                                        name="companyemail"
                                                        className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                ${touched.companyemail && errors.companyemail ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="companyemail"
                                                        className="invalid-feedback"
                                                    />

                                                </div>
                                            </div>
                                            <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                                <div className="d-flex flex-column mb-32  w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                                    <label
                                                        className="font-16 font-weight-600 pb-2 "
                                                        htmlFor="mobile">
                                                        Mobile
                                                    </label>
                                                    <PhoneInput
                                                        onChange={(mobphone) => handleChangeMob("mobphone", mobphone)}
                                                        specialLabel={""}
                                                        disableDropdown={false}
                                                        inputProps={{
                                                            name: "mobphone",
                                                            required: true,
                                                            autoFocus: true,
                                                        }}
                                                        containerClass="w-100"
                                                        value={mobphone}
                                                        inputClass={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                        ${touched.mobphone && errors.mobphone ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="mobphone"
                                                        className="invalid-feedback"
                                                    />

                                                </div>
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
                                                        value={landline}
                                                        inputClass="form-control h-48px form-control border-grey p-input-style font-16 w-100"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='d-flex flex-sm-row flex-md-column flex-lg-row flex-column justify-content-between align-items-center'>
                                                <div className="d-flex flex-column mb-32 w-100 mr-lg-4 mr-sm-4 mr-md-0">
                                                    <div className='selectdiv'>
                                                        <label
                                                            className="font-16 font-weight-600 pb-2 "
                                                            htmlFor="email">
                                                            Country
                                                        </label>
                                                        <Field as="select"
                                                            required
                                                            className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                ${touched.fname && errors.fname ? "is-invalid" : ""}`}
                                                            name="country"
                                                        // value={billingData.country}
                                                        // onChange={billingHandler}
                                                        >
                                                            <option>UAE</option>
                                                        </Field>

                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column mb-32 w-100">
                                                    <div className='selectdiv'>
                                                        <label
                                                            className="font-16 font-weight-600 pb-2 "
                                                            htmlFor="email">
                                                            City
                                                        </label>
                                                        <Field as="select"
                                                            required
                                                            className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                                ${touched.fname && errors.fname ? "is-invalid" : ""}`}
                                                            name="city"
                                                        // value={billingData.city}
                                                        // onChange={billingHandler}
                                                        >
                                                            <option>Dubai</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column mb-5">
                                                <label
                                                    className="font-16 font-weight-600 pb-2 "
                                                    htmlFor="address">
                                                    Address
                                                </label>
                                                <Field
                                                    type="text"
                                                    placeholder='Enter address'
                                                    className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${touched.address && errors.address ? "is-invalid" : ""}`}
                                                    name="address"
                                                // value={billingData.address}
                                                // onChange={billingHandler}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="address"
                                                    className="invalid-feedback"
                                                />

                                            </div>
                                            <div className="justify-content-end d-flex align-items-center ">
                                                <button
                                                    type="submit"
                                                    className='btn-brown-bg'>
                                                    Save and Continue
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik> */}
                            </>
                            :
                            <div className='d-flex justify-content-between align-items-start flex-md-row flex-column flex-wrap gap-24'>
                                <div>
                                    <p className='font-18 font-weight-400 pb-3'>{billingData.fname}{billingData.lname}</p>
                                    <p className='font-18 font-weight-400 pb-3'>{billingData.companyname}</p>
                                    <p className='font-18 font-weight-400 pb-3'>{billingData.companyemail}</p>
                                    <p className='font-18 font-weight-400 pb-3'>{mobphone}</p>
                                    <p className='font-18 font-weight-400'>{billingData.address}, {billingData.city}, {billingData.country}</p>
                                </div>
                                <button className='premium-btn h-48px px-5 font-weight-600 font-16' onClick={() => { seteditbilldetail(!editbilldetail) }}>
                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.9879 9.10156C17.4347 9.10156 17.7969 9.46374 17.7969 9.91051V11.5284C17.7969 13.6306 17.3814 15.3125 16.2454 16.4485C15.1094 17.5845 13.4275 18 11.3253 18H6.4716C4.36944 18 2.68748 17.5845 1.55148 16.4485C0.415478 15.3125 0 13.6306 0 11.5284V10.2988C0 9.85204 0.362179 9.48986 0.808949 9.48986C1.25572 9.48986 1.6179 9.85204 1.6179 10.2988V11.5284C1.6179 13.471 2.01137 14.6204 2.69551 15.3045C3.37964 15.9886 4.52901 16.3821 6.4716 16.3821H11.3253C13.2679 16.3821 14.4172 15.9886 15.1014 15.3045C15.7855 14.6204 16.179 13.471 16.179 11.5284V9.91051C16.179 9.46374 16.5412 9.10156 16.9879 9.10156Z" fill="#CCA353" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.55148 1.7546C2.68748 0.618603 4.36944 0.203125 6.4716 0.203125H8.08949C8.53627 0.203125 8.89844 0.565304 8.89844 1.01207C8.89844 1.45884 8.53627 1.82102 8.08949 1.82102H6.4716C4.52901 1.82102 3.37964 2.2145 2.69551 2.89863C2.01137 3.58277 1.6179 4.73213 1.6179 6.67472C1.6179 7.12149 1.25572 7.48367 0.808949 7.48367C0.362179 7.48367 0 7.12149 0 6.67472C0 4.57256 0.415478 2.8906 1.55148 1.7546Z" fill="#CCA353" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.891 0.0131159C14.8721 -0.0831878 15.8213 0.352499 16.7343 1.26546C17.6472 2.17842 18.0829 3.12766 17.9866 4.10875C17.8945 5.04741 17.3307 5.80931 16.7343 6.4057L15.8849 7.25509C15.569 7.57101 15.0568 7.57101 14.7409 7.25509C14.4249 6.93918 14.4249 6.42698 14.7409 6.11107L15.5903 5.26167C16.094 4.75789 16.3392 4.33063 16.3765 3.9507C16.4096 3.61321 16.2952 3.11442 15.5903 2.40949C14.8853 1.70455 14.3865 1.59015 14.049 1.62328C13.6691 1.66057 13.2419 1.9057 12.7381 2.40949L6.36355 8.78401C6.32168 8.82587 6.24657 8.92649 6.17456 9.06975C6.10244 9.21324 6.06703 9.33271 6.05881 9.3916L6.05845 9.39421L5.7106 11.8291L5.71015 11.8322C5.6774 12.0553 5.74507 12.1615 5.78904 12.2053C5.83441 12.2505 5.94585 12.3196 6.173 12.2888C6.17357 12.2887 6.17414 12.2886 6.17471 12.2886L8.60553 11.9413C8.65993 11.9335 8.77782 11.8986 8.92392 11.8252C9.06494 11.7543 9.1706 11.6785 9.22169 11.6302L12.3787 8.4732C12.6946 8.15728 13.2068 8.15728 13.5227 8.4732C13.8387 8.78911 13.8387 9.30131 13.5227 9.61723L10.3598 12.7802L10.3503 12.7895C10.1492 12.9841 9.89246 13.1491 9.65049 13.2708C9.41032 13.3915 9.11969 13.5022 8.83433 13.5429L6.39939 13.8908L6.39528 13.8914C5.74182 13.9813 5.10138 13.8039 4.64734 13.3517C4.19218 12.8984 4.01303 12.257 4.10915 11.599C4.10924 11.5984 4.10932 11.5978 4.10941 11.5973L4.45644 9.16801C4.45651 9.16751 4.45658 9.16702 4.45665 9.16652C4.49714 8.87805 4.60717 8.58555 4.72899 8.34318C4.85113 8.10017 5.0187 7.8408 5.21952 7.63998L11.594 1.26546C12.1904 0.66907 12.9523 0.105254 13.891 0.0131159Z" fill="#CCA353" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0342 1.97262C11.4643 1.85202 11.9108 2.10299 12.0314 2.53318C12.497 4.19381 13.797 5.49564 15.4692 5.96944C15.8991 6.09123 16.1488 6.53842 16.027 6.96827C15.9052 7.39812 15.4581 7.64785 15.0282 7.52606C12.8175 6.89969 11.0921 5.17605 10.4736 2.9699C10.353 2.53971 10.604 2.09321 11.0342 1.97262Z" fill="#CCA353" />
                                    </svg>

                                    <span className='ml-2'>Edit Info</span>
                                </button>
                            </div>
                        }
                    </div>
                    {!editbilldetail &&
                        <div className='column-sub p-30px col-eq-height mt-4'>
                            <div className='pb-4 bb-2px  mb-4 border-skin text-light-black'>
                                <p className='font-24 font-weight-700 '>Payment</p>

                            </div>
                            <form onSubmit={handlePaymentCheck}>
                                <div className='row m-0 '>
                                    <div className="col-lg-8 col-md-12 col-sm-8 p-0 d-flex flex-column mb-32  mr-lg-4 mr-lg-4 mr-md-0">
                                        <label
                                            className="font-16 font-weight-600 pb-2 "
                                            htmlFor="name">
                                            Name on Card
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder='Tony'
                                            className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!paymentData.cardnumber ? 'is-invalid' : ''}`}
                                            name="name"
                                            value={paymentData.name}
                                            onChange={paymentHandler}
                                            onKeyDown={(e) => handleEnter(e)}

                                        />

                                    </div>
                                </div>
                                <div className='row m-0 flex-lg-row flex-column-reverse '>
                                    <div className=" col-lg-8 col-md-12 col-sm-8 p-0 d-flex flex-column mb-32">
                                        <label
                                            className="font-16 font-weight-600 pb-2 "
                                            htmlFor="name">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder='8764 2300 9890 4328'
                                            className={`h-48px form-control border-grey p-input-style font-16 font-weight-400 w-100
                                            ${!paymentData.cardnumber ? 'is-invalid' : ''}`}
                                            name="cardnumber"
                                            value={cc_format(paymentData.cardnumber)}
                                            onChange={paymentHandler}
                                            onKeyDown={(e) => handleEnter(e)}

                                        />
                                    </div>
                                    <div className="col-lg-4 col-12 p-0 mb-lg-0 mb-3">
                                        <div className='d-flex gap-16 justify-content-left align-items-center h-100 ml-lg-4'>
                                            <VisaImage />
                                            <MasterCard />
                                        </div>
                                    </div>
                                </div>
                                <div className='row m-0'>
                                    <div className='col-8 p-0 d-flex flex-sm-row flex-wrap flex-md-column flex-lg-row flex-column justify-content-between align-items-lg-center'>
                                        <div className="d-flex flex-wrap flex-column mb-32   mr-lg-4 mr-sm-4 mr-md-0">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="name">
                                                Expiry Date
                                            </label>
                                            <div className='d-flex align-items-sm-center flex-sm-row flex-column'>
                                                <input
                                                    type="number"
                                                    required
                                                    placeholder='MM'
                                                    className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-118px'
                                                    name="month"
                                                    value={ExpMonth}
                                                    onChange={handleExpiryMonth}
                                                    onKeyDown={(e) => handleEnter(e)}

                                                />
                                                <p className='px-3'>/</p>
                                                <input
                                                    type="number"
                                                    required
                                                    maxLength={2}
                                                    placeholder='YY'
                                                    className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-118px'
                                                    name="year"
                                                    value={ExpYear}
                                                    onChange={handleExpiryYear}
                                                    onKeyDown={(e) => handleEnter(e)}


                                                />

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column mb-32 w-118px">
                                            <label
                                                className="font-16 font-weight-600 pb-2 "
                                                htmlFor="email">
                                                CVV
                                            </label>
                                            <input
                                                type="password"
                                                required
                                                className='h-48px form-control border-grey p-input-style font-16 font-weight-400 w-118px'
                                                name="cvv"
                                                value={Cvv}
                                                onChange={handleCvv}

                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="justify-content-end d-flex align-items-center ">
                                    <button className='btn-brown-bg' type='submit' >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>

                    }

                </div>
                <div className='col-xl-4 col-md-5 col-12 p-0 col-eq-height'>
                    <div className='column-sub p-30px mt-md-0 mt-4 ml-md-4 col-eq-height'>
                        <div className=' pb-30px bb-2px  mb-4 border-skin'>
                            <p className='font-24 font-weight-700 text-light-black'>Order Summary</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-wrap pb-4 font-18 '>
                            <p className='font-weight-400 line-height-24px '>Estate Book - Template 1</p>
                            <p className='font-weight-600 line-height-24px '>AED 499.00</p>
                        </div>
                        <div className='d-flex justify-content-between pb-30px mb-4 border-bottom align-items-center flex-wrap font-18'>
                            <p className='font-weight-400 line-height-24px '>Handling Fee</p>
                            <p className='font-weight-600 line-height-24px '>AED 499.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center font-weight-600 font-24 flex-wrap'>
                            <p>Total:</p>
                            <p>AED  549.00</p>
                        </div>


                    </div>
                </div>
            </div>

            <CustomModal openModalCheck={openModalCheck} setopenModalCheck={setopenModalCheck}>
                <div className='d-flex flex-column align-items-center px-8rem mt-5'>
                    <PaymentSuccess />
                    <p className='font-36 mt-5 font-weight-700 text-light-black pb-4'>Payment <span className='text-skin'> Successful!</span></p>
                    <p className='mb-100px font-18 text-grey font-weight-400'>Transaction Number: 8673528949</p>
                </div>
                <div className='d-flex justify-content-end flex-sm-row flex-column align-items-sm-center flex-wrap'>
                    <button className='btn-brown-outline h-48px mb-sm-0 mb-3'>Cancel</button>
                    <button className='btn-brown-bg ml-sm-3 px-5 h-48px'>Edit Template</button>

                </div>

            </CustomModal>

        </div>

    )
}

export default BillingDetail

function cc_format(value) {
    const v = value
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
        parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
}

const expriy_format = (value) => {
    const v = value
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .substr(0, 4);
    const parts = [];

    parts.push(v.substr(1, 4));

    return parts.length > 1 ? parts.join(" ") : value;
};
const onChangeExp = (e) => {
    setCard({
        ...card,
        expirydt: e.target.value
    });
};