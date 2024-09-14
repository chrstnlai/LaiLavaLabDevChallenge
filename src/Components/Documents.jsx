import "../App.css";
import React from 'react';
import Display from "/src/assets/Display.png";
import "./Documents.css";

//Box with Document Display, insert text in App.jsx
export const Documents = ({ text1, text2, viewMode }) => {
  return (
    <div className={`documentcontainer ${viewMode}`}>
        <img src={Display} alt="docdisplay"   className="docimage" />
        <p className = "manropefont">{text1}</p>
        <p className = "manropefont">{text2}</p>
    </div>
  );
};
