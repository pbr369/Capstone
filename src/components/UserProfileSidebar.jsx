import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
//icon
import { Link } from "react-router-dom";

export default function UserProfileSidebar({ name, roles = [], closeUserProfile }) {
  const closeUserProfileMenu = () => {
    closeUserProfile(); // Close the modal
  };

  useEffect(() => {
    console.log("User roles:", roles);
  }, [roles]);

  const menuItems = [
    {
      title: "Change Name",
      link: "/Changename",
    },
    {
      title: "Change Address",
      link: "/Changeaddress",
    },
    {
      title: "Change Password",
      link: "/Changepass",
    },
    // Add the "Admin Panel" link conditionally based on the user's role
    ...(roles.includes("admin")
      ? [
          {
            title: "Admin Panel",
            link: "/Adminpanel",
          },
        ]
      : []),
  ];

  return (
    <div>
      <div>
        <div
          className="w-82 bg-white fixed h-full shadow-2xl
   xl:max-w-[30vw] transition-all duration-300
  z-20 px-4 lg:px-[5vw]"
        >
          <div className="flex items-center py-6 border-b">
            <div className="cursor-pointer flex items-center">
              <span className="flex text-black text-lg px-4 mx-auto font-semibold font-heading">
                {name}'s User Profile
              </span>
              <IoMdArrowForward
                onClick={closeUserProfileMenu}
                className="text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col text-black text-md px-4 mx-auto font-semibold font-heading">
            {menuItems.map((item, idx) => (
              <Link key={idx} to={item.link} onClick={closeUserProfileMenu}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
