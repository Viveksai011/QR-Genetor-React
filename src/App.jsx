import React, { useState,useEffect } from "react";
import "./App.css";

const App = () => {
  const [temp, setTemp] = useState(" ");
  const [size, setSize] = useState(400);
  const [word, setWord] = useState("");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(()=>{
    setQrCode  (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
    console.log("upddated")

  },[word,size,bgColor])
  function handleClick(e) {
    e.preventDefault(); 
    setWord(temp);
    console.log("progress"); 
  }


  return (
    <div className="main">
      <h1>QR Code Generator</h1>
      <div className="inner">
        <div className="one">
          
          <input
            type="text"
            placeholder="Enter Text to generate"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="two">
        <h5>Background Color:</h5> 
          <input type="color" onChange={(e) =>  
          { setBgColor(e.target.value.substring(1)) }} /> 
          
          <h5>Dimension:</h5>
          <input id="Bar" type="range" min="200" max="600"
           value={size} onChange={(e) =>  
           {setSize(e.target.value)}} /> 
        </div> 
      </div>
      <div className="QR_box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
};

export default App;
