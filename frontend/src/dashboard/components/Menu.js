import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("USER");
  const [userInitials, setUserInitials] = useState("U");

  const navigate = useNavigate();

  // ⭐ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  // ⭐ TOKEN + AUTO LOGOUT CHECK
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserEmail(decoded.email || "User");
      const initials = (decoded.email || "U").substring(0, 2).toUpperCase();
      setUserInitials(initials);

      if (decoded.exp) {
        const expiryTime = decoded.exp * 1000 - Date.now();
        if (expiryTime <= 0) {
          handleLogout();
        } else {
          setTimeout(() => {
            handleLogout();
          }, expiryTime);
        }
      }
    } catch (err) {
      console.error("Token decode error");
      handleLogout();
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* 1. Navigation Links Section */}
      <div className="menus">
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* 2. Divider & Profile Section */}
      <div className="profile-section">
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{userInitials}</div>
          <p className="username">{userEmail}</p>
        </div>

        {/* ⭐ DROPDOWN */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div onClick={handleLogout} className="dropdown-item">
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;