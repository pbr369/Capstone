import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
      
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [redirect, setRedirect] = useState(false);
      const navigate = useNavigate();
      const roles = "user";

      const submit = async (e) => {
        e.preventDefault();

        console.log("Submitting:", { name, email, password, roles });

        try {
          const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
              roles, // Assuming "user" is the default role for registration
            }),
          });

          const content = await response.json();
          console.log("Registration Response:", content);

          if (response.ok) {
            // Registration successful, you might want to handle this differently
            console.log("Registration successful");
            navigate("/Login");
          } else {
            // Handle registration failure
            console.error("Registration failed");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Error during registration:", error);
        }

        closeModal();
      };

  if (redirect) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div
          className="
    flex flex-col
    bg-white
    shadow-md
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-50
    max-w-md
  "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>
          <div className="mt-10">
            <form onSubmit={submit}>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name:
                </label>
                <div className="relative">
                  <div
                    className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                  >
                    <i className="fas fa-user text-bg-[#1d1d1d]" />
                  </div>
                  <input
                    id="name"
                    type="name"
                    name="name"
                    className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                  >
                    <i className="fas fa-at text-bg-[#1d1d1d]" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                  >
                    <span>
                      <i className="fas fa-lock text-bg-[#1d1d1d]" />
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="
            flex
            mt-2
            items-center
            justify-center
            focus:outline-none
            text-white text-sm
            sm:text-base
            bg-[#1d1d1d]
            hover:bg-blue-600
            rounded-2xl
            py-2
            w-full
            transition
            duration-150
            ease-in
          "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            className="
      inline-flex
      items-center
      text-gray-700
      font-medium
      text-xs text-center
    "
          >
            <span className="ml-2">You have an account?</span>
          </a>
          <Link
            to="/Login"
            className="text-xs ml-2 text-blue-500 font-semibold"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}
