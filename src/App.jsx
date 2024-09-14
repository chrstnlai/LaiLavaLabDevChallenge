import "./App.css";
import React, { useState } from 'react';
import SideBar from "./Components/SideBar";
import { SearchBar } from "./Components/SearchBar";
import { Profile } from "./Components/Profile";
import { Documents } from "./Components/Documents";
import viewtoggle from '/src/assets/viewstoggle.png';


export default function App() {

  return (
    <main className="App">
      <div className="SideBarflex">
        <SideBar />
      </div>
      <div className="MainContent">
        <div className="SearchProfileflex">
          <div className="Searchflex">
            <SearchBar />
          </div>
          <div className="Profileflex">
            <Profile />
          </div>
        </div>
        <div className="ProjectsHeader">
          <h1 className="AllProjectText">All Projects</h1>
          <img src={viewtoggle} alt="viewtoggle" className="ViewToggleIcon" />
        </div>
        <div className="DocumentsSection">
        <div>
          <Documents 
            text1="Assignment 1"
            text2="1m ago" 
            />
        </div>
        <div >
          <Documents 
            text1="Lab 3"
            text2="40m ago" 
            />
        </div>
        <div>
          <Documents 
            text1="Workbook Ch3."
            text2="40m ago" 
            />
        </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          
          </div>
      </div>
    </main>
  );
}
