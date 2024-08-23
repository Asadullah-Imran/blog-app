import React, { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi"; // Import icons
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { logout } from "../services/authenticationsServices";

const Navbar = () => {
  const { user, logoutWithContext } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    logoutWithContext();
    logout();
  };

  const handleProfileClick = () => {
    if (user && user._id) {
      navigate(`/profile/${user._id}`);
    }
  };

  const getDisplayName = (fullName) => {
    if (!fullName) return "";
    const nameParts = fullName.split(" ");
    let n = nameParts.length;
    const lastName = nameParts[n - 1];
    const firstName = nameParts[0];

    // Ensure the name displayed is at least 3 characters long
    return lastName.length >= 3 ? lastName : firstName;
  };

  return (
    <nav className="bg-cusLightBG dark:bg-cusDarkBG px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-cusPrimaryColor">
        My Blog
      </Link>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <span
              className="text-cusPrimaryColor cursor-pointer capitalize "
              onClick={handleProfileClick}
            >
              {getDisplayName(user.fullname)}
            </span>
            <button
              onClick={handleLogout}
              className="text-cusSecondaryColor hover:text-cusSecondaryLightColor"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-cusSecondaryColor hover:text-cusSecondaryLightColor"
          >
            Login
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className="text-cusPrimaryColor hover:text-cusSecondaryColor"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
