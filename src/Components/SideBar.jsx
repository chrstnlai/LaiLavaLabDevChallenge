import "../App.css";
import React from 'react';
import { SideBarInfo } from './SideBarInfo'; 
import AroLogo from '/src/assets/AroLogo.svg'


export default function SideBar() {
  return (
    <main className="SideBarMain">
      <div className="SideBar">
        <ul className = "SideBarList">
          <img src = {AroLogo} alt = "Aro Logo"></img>
          {SideBarInfo.map((val, key) => (
            <li key={key}
              className = "row"
              >
              <a href={val.link}>
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
