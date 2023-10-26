import { Link } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import React, {useState,useEffect} from "react";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginErrors, setLoginErrors] = useState({});
  
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
    return(
        <div className="text-white h-[100vh] flex justify-center bg-cover items-center bg-white">
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg 
        backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                 <h1 className="text-4xl text-black font-bold text-center mb-6">
                    Register
                </h1>
             <form action="" onSubmit={handleLoginSubmit}>
             <div className="relative my-4">
                    <input type="email"    
                    className="block w-72 py-2.3 text-sm 
                    text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-black
                    focus:border-blue-600 peer "
                    placeholder=""
                    name="regsiter-email"
                    id="register-email"
                    value={loginEmail}
                    onInput={(e) => setLoginEmail(e.target.value)} 
                    />

                    <label htmlFor="" 
                    className="absolute text-sm text-black duration-300
                    transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email</label>
                    <BiUser className="text-black absolute top-1 right-1"/>
                </div> 
                {loginErrors.email && (
                    <p className="text-sm text-red-500 -mt-3">
                      {loginErrors.email}
                    </p>
                  )} 
                <div className="relative my-4">
                    <input type="password" 
                    className="block w-72 py-2.3 text-sm 
                    text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black
                    focus:border-blue-600 peer " 
                    placeholder=""
                    name="register-password"
                    id="register-password"
                    value={loginPassword}
                    onInput={(e) => setLoginPassword(e.target.value)}
                    />

                    <label htmlFor="" className="absolute text-sm text-black duration-300
                    transform -translate-y-6 scale-75 top-1 -z-100 origin-[0] peer-focus:left-0
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-6
                    ">
                         Password</label>
                        <AiOutlineUnlock className="text-black absolute top-1 right-1"/>
                </div> 
                {loginErrors.password && (
                    <p className="text-sm text-red-500 -mt-3">
                      {loginErrors.password}
                    </p>
                  )}
                <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black
                hover:bg-black hover:text-white py-2 transition-color duration-300" 
                type ="submit">Create an Account</button>
                
                <div>
                    <span className="m-12 text-black  ">New here? <Link to='/Register' className="text-blue-500">Create an Account</Link></span> 
                </div>
             </form>
            </div>
        </div>
        </div>
    );
};

export default Login