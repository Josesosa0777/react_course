import React from "react";
import ReactDOM from "react-dom/client";
// import createRoot from 'react-dom/client';
 
const name = "Jose"
const date = new Date();
const hour = date.getHours()
const currentyear = date.getFullYear();
const img = "https://picsum.photos/200"
const customStyle = { color: "green" };

const root = ReactDOM.createRoot(document.getElementById("root"));

let greeting = [];

if (hour < 12) {
  greeting = "good morning"
  customStyle.color = "yellow"
} else {
  greeting = "good afternoon/night"
  customStyle.color = "brown"
}


root.render(
  <div>
    <h1 className="heading" spellCheck="false">Helloo {name}! </h1>
    <p>Your lucky number is {10+Math.floor(Math.random()*10)}</p>
    <ul>
      <li>One</li>
    </ul>
    <h1 className="heading" contentEditable="true" spellCheck="false">My favourite food</h1>
    <img className="food-img" alt="random" src={img + "?grayscale"}/>
    <p>Copyright {currentyear} at {date.getHours()}:{date.getMinutes()}</p>
    <div>
      <h1 style={{background: "red", fontSize: 34, margin: "1% 10%", padding: "30% 45%"}}>
        Hello
      </h1>
      <h2 style={customStyle}>{greeting}</h2>
    </div>
  </div>
  
);
