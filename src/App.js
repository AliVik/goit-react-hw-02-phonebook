import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Throttle } from 'react-throttle';


class App extends Component {
    state = {
        contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        { id: 'id-5', name: 'Rasie Simpson', number: '459-12-56' },
        { id: 'id-6', name: 'Hurmione Kline', number: '443-89-12' },
        { id: 'id-7', name: 'Ejen Clements', number: '645-17-79' },
        { id: 'id-8', name: 'Aknie Copeland', number: '227-91-26' },],
        filter: '',

    }



    handleFormDatas = (data) => {

        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, data]
            }
        })
    }

    handleFilterDatas = (evt) => {
        this.setState({ filter: evt.currentTarget.value })
        const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().startsWith(evt.currentTarget.value));
        console.log(filteredContacts)
        console.log(evt.currentTarget.value)
        return filteredContacts ? this.setState({ contacts: filteredContacts }) : this.state.contacts;


    }

    render() {
        const { filter, contacts } = this.state;
        return <>
            <Form onSubmit={this.handleFormDatas} />

            <Filter value={filter} onChange={this.handleFilterDatas} />


            <ContactList contacts={contacts} />
        </>
    }
}

export default App;
