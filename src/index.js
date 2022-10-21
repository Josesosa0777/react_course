import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img"/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);
