import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
    return (
        <Card 
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.tel}
            email={contact.email}
        />
    )
}

function App() {
    console.log(contacts)
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://i1.rgstatic.net/ii/profile.image/725175947501576-1549906827489_Q128/Jose_Sosa23.jpg"/>
            {contacts.map(createCard)}
        </div>
    )
}

export default App;