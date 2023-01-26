import React from 'react'
import { Link } from 'react-router-dom'
import PaymentFailed from '../../components/images/paymentFailed'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="notfound">
                <div className="container h-100 w-100 d-flex justify-content-center align-items-center flex-column text-light-black">
                    <div className=" text-center p-3">
                        <PaymentFailed />
                        <h3 className="text-center mt-4 text-light-black">Page <span className='text-skin-brown'>Not</span> Found!</h3>
                        <p className="text-center mt-2 w-75 mx-auto">
                            Oops! Looks Like Something Going Rong We can’t seem to find the page
                            you’re looking for make sure that you have typed the currect URL
                        </p>
                    </div>
                    <div className="port-info mt-4">
                        <p  className="cr-p btn-brown-bg btn-lg" onClick={() => navigate(-1)}>
                            Go To Previous Page
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default NotFound