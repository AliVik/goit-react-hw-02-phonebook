import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";


class App extends Component {
    state = {
        contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
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
        this.state.contacts.filter(contact => { 
            console.log(Array.from(contact.name)===evt.currentTarget.value);
            // return contact.name.splice('') === evt.currentTarget.value;
        })
    }

    render() {
        return <>
            <Form onSubmit={this.handleFormDatas} />
            <Filter value={this.state.filter} onChange={this.handleFilterDatas} />
            <ContactList contacts={this.state.contacts}/>
        </>
    }
}

export default App;
