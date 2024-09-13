import "../App.css";
import React from 'react';
import Display from "/src/assets/Display.png";
import "./Documents.css"

export const Documents = ({text1, text2}) => {
  return (
    <div className = "documentcontainer">
      <img src = {Display} alt = "docdisplay" className = "docimage"></img>
      <p>{text1}</p>
      <p>{text2}</p>
      
    </div>



  );
}
