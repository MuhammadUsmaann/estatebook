import React, { useState } from "react";
import Accountvmain from "../components/images/accountvmain";
import "./pform.css";
import OTPInput from "otp-input-react";

const AccountVerification = () => {
  const [OTPEMAIL, setOTPEMAIL] = useState("");
  const [OTPPNO, setOTPPHNENO] = useState("");

  return (
    <>
      <div className="row m-0" id="estatelogin">
        <div className="p-left p-0">
          <div className="p-left-sub">
            <p className="text-skin font-56 font-weight-800 w-50 pb-3">
              2-Step <span className="text-light-black">Verification</span>
            </p>
            <div className="orangeline"></div>
            <form action="" className="text-light-black">
              <div className="d-flex flex-column mb-4">
                <label
                  className="font-16 font-weight-600 pb-2 "
                  htmlFor="email"
                >
                  Verify Your Email
                </label>
                <OTPInput
                  value={OTPEMAIL}
                  onChange={setOTPEMAIL}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  inputClassName="e-btn-style w-56px h-72px m-0 text-dark font-40 font-weight-600"
                  className="justify-content-between"
                />
              </div>
              <div className="d-flex flex-column mb-3 mt-2">
                <label
                  className="font-16 font-weight-600 pb-2 "
                  htmlFor="email"
                >
                  Verify Your Mobile Number
                </label>
                <OTPInput
                  value={OTPPNO}
                  onChange={setOTPPHNENO}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  inputClassName="e-btn-style w-56px h-72px m-0 text-dark font-40 font-weight-600"
                  className="justify-content-between"

                />
              </div>

              <button className="e-btn-style bg-skin mt-5 text-white font-weight-600 mb-5 w-100 mb-220px">
                Verify
              </button>
            </form>

            <p className="pt-5 text-light-black font-weight-500 copyright">
              © Copyright 2022 Estate Book. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="p-right  p-0">
          <div className="p-right-sub">
            <p className="text-skin font-56 font-weight-800">
              <span className="text-light-black"> Verify Your</span> Mobile
              Number and
              <span className="text-light-black"> Email Address</span>
            </p>

            <p className="pt-4 pb-5 text-light-black font-weight-500 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-100 d-flex align-items-center ">
              <Accountvmain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountVerification;
