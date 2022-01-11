import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";


class App extends Component {
    state = {
        contacts: [],
        name: ''
    }

    render() {
        return <>
            <Form onSubmit={value => console.log(value)} />
            <ContactList />
        </>
    }
}

export default App;
