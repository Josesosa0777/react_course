import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function App() {
    console.log(contacts)
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://i1.rgstatic.net/ii/profile.image/725175947501576-1549906827489_Q128/Jose_Sosa23.jpg"/>
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />
        </div>
    )
}

export default App;