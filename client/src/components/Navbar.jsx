import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { logout } from "../services/authenticationsServices";

const Navbar = () => {
  const { user, logoutWithContext } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  console.log("Navbar user:", user);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  const handleLogout = () => {
    logoutWithContext();
    logout();
  };

  return (
    <nav className="bg-cusLightBG dark:bg-cusDarkBG px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold text-cusPrimaryColor">My Blog</div>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <span className="text-cusPrimaryColor">Welcome, {user}</span>
            <button
              onClick={handleLogout}
              className="text-cusSecondaryColor hover:text-cusSecondaryLightColor"
            >
              Logout
            </button>
          </div>
        ) : (
          <button className="text-cusSecondaryColor hover:text-cusSecondaryLightColor">
            Profile
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className="text-cusPrimaryColor hover:text-cusSecondaryColor"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
