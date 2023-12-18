import React, { useState } from "react";
import axios from "axios";

const Updatepassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    // Validate the input fields
    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match");
      return;
    }

    // Make an API call to update the password
    try {
      const token = localStorage.getItem("token");

      console.log("Token:", token);
      const response = await axios.put(
        "http://localhost:8000/api/update-password",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if the response is not JSON
      if (!response.ok) {
        throw new Error(
          `Failed to update password. HTTP status: ${response.status}`
        );
      }

      const result = await response.json();

      // Password updated successfully
      setErrorMessage("");
      // You may want to redirect or display a success message
    } catch (error) {
      console.error("Error updating password:", error);
      setErrorMessage(
        "An error occurred while updating the password. Please try again later."
      );
    }
  };

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Update Password</h2>
          <form onSubmit={handleUpdatePassword}>
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Current Password:
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-600"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Update Password
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
};

export default Updatepassword;
