import "../App.css";
import React, { useState } from 'react';
import Christine from "/src/assets/Christine.png";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

//Click on the profile picture and a drop down menu will appear 

export const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menunavigate = useNavigate();
  const Menus = [{name:'Profile', path:'/profile'}, {name:'Settings', path:'/setting'}, {name:'Logout', path:'/logout'}];

  const dropdownMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const menuClick = (path) => {
    menunavigate(path);
    setIsMenuOpen(false);
  }


  return (
    <div className="profile-container">
      <div className="profile-box">
        <img 
          src={Christine} 
          alt="user" 
          className="profile-img" 
          onClick={dropdownMenu} 
        />
        <div className="profile-details">
          <p className="profile-name">Christine Lai</p>
          <p className="profile-email">cmlai@usc.edu</p>
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
      {/* iterates through the menu  */}
              {Menus.map((menu) => (
                <li key={menu.name} onClick={() => menuClick(menu.path)}>{menu.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
