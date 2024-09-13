import "../App.css";
import React, { useState } from 'react';
import Christine from "/src/assets/Christine.png";
import "./Profile.css";

export const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Menus = ['Profile', 'Docs', 'Settings', 'Logout'];

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <img 
          src={Christine} 
          alt="user" 
          className="profile-img" 
          onClick={toggleMenu} 
        />
        <div className="profile-details">
          <p className="profile-name">Christine Lai</p>
          <p className="profile-email">cmlai@usc.edu</p>
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              {Menus.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
