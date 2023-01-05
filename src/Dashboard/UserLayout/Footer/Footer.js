import React from 'react';

export default function Footer() {
  return (
    <>
      {/* <div className="d-flex footer-div justify-content-between align-items-senter w-100 text-light-grey font-16 font-weight-400">
        <p>© Copyright 2022 Estate Book. All Rights Reserved</p>
        <p>Terms & Conditions  |  Privacy Policy</p>
      </div> */}
      <div className="footer-div justify-content-between flex-md-row flex-column d-flex align-items-center w-100 text-light-grey font-16 font-weight-400">
        <p className='text-center mb-md-0 mb-2'>© Copyright 2022 Estate Book. All Rights Reserved</p>
        <p className='text-center'>Terms & Conditions  |  Privacy Policy</p>
      </div>
    </>
  );
}
