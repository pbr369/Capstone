import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ name, handleLogout, showSidebar }) => {
  return (
    <div>
      <div className="user-profile">
        <span className="text-white ml-1 mx-2 text-xl" onClick={showSidebar}>
          Hi, <FontAwesomeIcon icon={faUserCircle} className="mr-1 text-xl" />
          {name}
        </span>
        <Link to="/Allproducts" className="text-white" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-1 text-xl" />

        </Link>
        {/* Add more profile information or actions as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
