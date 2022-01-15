import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";



class App extends Component {
    state = {
        contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
       ],
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
    }

    render() {
        const { filter, contacts } = this.state;
         const normalizedFilter = filter.toLowerCase();
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
       
        return <>
            <Form onSubmit={this.handleFormDatas} />
            <Filter value={filter} onChange={this.handleFilterDatas} />
            <ContactList contacts={filteredContacts} />
        </>
    }
}

export default App;
