import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import Navbar from "../components/Navbar";

export default function Login({ closeLoginModal }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});
  // const [modalOpen, setModalOpen] = useState(false);

  const validateLogin = () => {
    let errors = {};

    if (!loginEmail) {
      errors.email = "Please enter your email";
    } else {
      errors.email = "";
    }

    if (!loginPassword) {
      errors.password = "Please enter your password";
    } else {
      errors.password = "";
    }

    setLoginErrors(errors);

    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      validateLogin();
    }, 100);

    return () => clearTimeout(timeout);
  }, [loginEmail, loginPassword]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const isValid = validateLogin();

    if (isValid) {
      // submit form
    }
  };

  const modalOpenFunction = () => {
    closeLoginModal(); // Close the modal
  };

  return (
    <div>
      <div
        className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="loginModal"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0" />
        <div className="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
          <div className="text-xl cursor-pointer flex justify-end">
            <IoMdClose
              onClick={modalOpenFunction}
              className="text-gray-500 
              hover:text-red-500 transition"
            />
          </div>
          <div className="flex w-auto justify-center items-center bg-white space-y-8">
            <div className="w-auto px-8 md:px-32 lg:px-24">
              <form className="bg-white rounded-md shadow-2xl p-6">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
                <p className="text-sm font-normal text-gray-600 mb-8"></p>
                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      strokewidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    id="email"
                    className=" pl-2 w-full outline-none border-none"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillrule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      cliprule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 w-full outline-none border-none"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full btn-color mt-5 py-2 rounded-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  Login
                </button>
                <div className="flex justify-between mt-4">
                  <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    Forgot Password
                  </span>
                  <Link
                      to="/Register"
                      onClick={modalOpenFunction}
                      className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                    >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
