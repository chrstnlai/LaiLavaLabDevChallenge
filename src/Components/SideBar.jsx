import "../App.css";
import React from 'react';
import { SideBarInfo } from './SideBarInfo'; 
import AroLogo from '/src/assets/AroLogo.svg';
import "./SideBar.css";
import { Link } from "react-router-dom";

//calls on SideBarInfo to return data for the different tabs of the sidebar

export default function SideBar() {
  return (
    <main className="SideBarMain">
      <div className="SideBar">
        <ul className="SideBarList">
          <Link>
            <img src={AroLogo} alt="Aro Logo" className = "ArcLogo" />
          </Link>
          <div className ="list">
          {SideBarInfo.map((val, key) => (
            <li
              key={key}
//for higlighting the information when you are on the URL 
              className={`row ${location.pathname === val.link ? 'active' : ''}`} 
            >
              <a href={val.link}>
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </a>
            </li>
          ))}
            </div>
          <button>+ New</button>
        </ul>
      </div>
    </main>
  );
}
