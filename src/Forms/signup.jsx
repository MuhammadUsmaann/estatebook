import React from "react";
import Facebook from "../components/images/facebook";
import Google from "../components/images/Google";
import Signupnewmain from "../components/images/signupnewmain";
import "./pform.css";
import { MuiTelInput } from "mui-tel-input";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [phone, setPhone] = React.useState("+9239699999");
  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  return (
    <>
      <div className="row m-0" id="estatelogin">
        <div className="p-left p-0">
          <div className="p-left-sub">
            <p className="text-skin font-56 font-weight-800 pb-3">
              Sign <span className="text-light-black">Up</span>
            </p>
            <div className="orangeline"></div>
            <form action="" className="text-light-black">
              <div className="d-flex flex-column mb-3">
                <label
                  className="font-16 font-weight-600 pb-2 "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="p-input-style font-16 font-weight-500 w-100"
                  required
                  id="email"
                  placeholder="abcd@gmail.com"
                  name="email"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label
                  className="font-16 font-weight-600 pb-2 "
                  htmlFor="email"
                >
                  Phone Number <span className="text-skin">*</span>
                </label>
                <MuiTelInput
                  value={phone}
                  onChange={handleChange}
                  className="p-input-style w-100 bg-white font-weight-500 muiphone"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between align-items-center font-16 font-weight-600 pb-2 ">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="password"
                  className="p-input-style font-16 font-weight-500 w-100"
                  required
                  id="password"
                  placeholder="Atlease 8 characters"
                  minLength={8}
                  name="password"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between align-items-center font-16 font-weight-600 pb-2 ">
                  <label htmlFor="password">Re-Enter Password</label>
                </div>
                <input
                  type="password"
                  className="p-input-style font-16 font-weight-500 w-100"
                  required
                  id="password"
                  placeholder="Atlease 8 characters"
                  minLength={8}
                  name="password"
                />
              </div>

              <button className="e-btn-style bg-skin mt-5 text-white font-weight-600 mb-5 w-100 ">
                Sign Up
              </button>
            </form>

            <div className="estate-or-divider mb-5">
              <span className="text-light-black font-weight-500">
                Or Login With
              </span>
            </div>

            <div className="justify-content-between d-flex align-items-center text-light-black mb-5 ">
              <button className="e-btn-style mr-4 bg-white font-weight-600 w-100">
                <Facebook /> <span className="pl-2">Facebook</span>
              </button>
              <button className="e-btn-style bg-white font-weight-600 w-100">
                <Google /> <span className="pl-2">Google</span>
              </button>
            </div>
            <div className="text-light-black mb-220px" >
              <p className="text-center font-weight-500 "> Already have an account? <NavLink to='/' className="text-skin cr-p">Login</NavLink></p>
            </div>

            <p className="pt-5 text-light-black font-weight-500 copyright">
              © Copyright 2022 Estate Book. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="p-right  p-0">
          <div className="p-right-sub">
            <p className="text-skin font-56 font-weight-800">
              <span className="text-light-black">Create Your</span> New Account
            </p>
            <p className="pt-4 text-light-black font-weight-500 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-100 d-flex align-items-center ">
              <Signupnewmain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
