import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";

export default function Register() {
      
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [registerErrors, setRegisterErrors] = useState({});

    const validateRegister = () => {
      let errors = {};

      const emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!registerEmail) {
        errors.email = "Please enter a valid email address";
      } else if (!emailreg.test(registerEmail)) {
        errors.email = "Include @ on the email address";
      } else {
        errors.email = "";
      }

      if (!registerPassword) {
        errors.password = "Create a unique password ";
      } else if (registerPassword.length < 8) {
        errors.password = "Passwords must be at least 8 characters long";
      } else {
        errors.password = "";
      }

      if (confirmPassword != registerPassword) {
        errors.confirmPassword = "Confirm Password ";
      }

      setRegisterErrors(errors);

      return Object.keys(errors).length === 0;
    };

    useEffect(() => {
      const timeout = setTimeout(() => {
        validateRegister();
      }, 100);

      return () => clearTimeout(timeout);
    }, [, registerEmail, registerPassword]);

    const handleRegisterSubmit = (e) => {
      e.preventDefault();

      const isValid = validateRegister();

      if (isValid) {
        // submit form
      }
    };
  return (
    <div>
      <div className="text-white h-[100vh] flex justify-center bg-cover items-center bg-white">
        <div>
          <div
            className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg 
        backdrop-filter backdrop-blur-sm bg-opacity-30 relative"
          >
            <h1 className="text-4xl text-black font-bold text-center mb-6">
              Register
            </h1>
            <form action="" onSubmit={handleRegisterSubmit}>
              <div className="relative my-4">
                <input
                  type="email"
                  className="block w-72 py-2.3 text-sm 
                    text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black
                    focus:border-blue-600 peer "
                  placeholder=""
                  name="regsiter-email"
                  id="register-email"
                  value={registerEmail}
                  onInput={(e) => setRegisterEmail(e.target.value)}
                />

                <label
                  htmlFor=""
                  className="absolute text-sm text-black duration-300
                    transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Register Email
                </label>
                <BiUser className="text-black absolute top-1 right-1" />
              </div>
              {registerErrors.email && (
                <p className="text-sm text-red-500 -mt-3">
                  {registerErrors.email}
                </p>
              )}
              <div className="relative my-4">
                <input
                  type="password"
                  className="block w-72 py-2.3 text-sm 
                    text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black
                    focus:border-blue-600 peer "
                  placeholder=""
                  name="register-password"
                  id="register-password"
                  value={registerPassword}
                  onInput={(e) => setRegisterPassword(e.target.value)}
                />

                <label
                  htmlFor=""
                  className="absolute text-sm text-black duration-300
                    transform -translate-y-6 scale-75 top-1 -z-100 origin-[0] peer-focus:left-0
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-6
                    "
                >
                  Your Password
                </label>
                <AiOutlineUnlock className="text-black absolute top-1 right-1" />
              </div>
              {registerErrors.password && (
                <p className="text-sm text-red-500 -mt-3">
                  {registerErrors.password}
                </p>
              )}

              <div className="relative my-4">
                <input
                  type="password"
                  className="block w-72 py-2.3 text-sm 
                    text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black
                    focus:border-blue-600 peer "
                  placeholder=""
                  name="register-password"
                  id="register-password"
                  value={confirmPassword}
                  onInput={(e) => setconfirmPassword(e.target.value)}
                />

                <label
                  htmlFor=""
                  className="absolute text-sm text-black duration-300
                    transform -translate-y-6 scale-75 top-1 -z-100 origin-[0] peer-focus:left-0
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-6
                    "
                >
                  Confirm Password
                </label>
                <AiOutlineUnlock className="text-black absolute top-1 right-1" />
              </div>
              {registerErrors.confirmPassword && (
                <p className="text-sm text-red-500 -mt-3">
                  {registerErrors.confirmPassword}
                </p>
              )}

              <button
                value="Send"
                className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black
                hover:bg-black hover:text-white py-2 transition-color duration-300"
                type="submit"
              >
                Create an Account
              </button>

              <div>
                <span className="m-4 text-black">
                  Already Create an Account?{" "}
                  <Link to="/Login" className="text-blue-500">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
