import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

 
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
    <App />
);
