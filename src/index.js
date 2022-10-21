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
    <div>
      <h1>My Contacts</h1>
      <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+1 3456789876"
      email="b@byonce.com"/>
      <input id="fName" />
    </div>
);
