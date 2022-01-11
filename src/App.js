import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";


class App extends Component {
    state = {
        contacts: [],
        name: '',
    }
   
    handleFormDatas = (data) => {
        
        this.setState(prevState => {
            return { name: [...prevState.name, data.inputName] }
        })
      
    }
   
    render() {
        return <>
            <Form onSubmit={this.handleFormDatas} />
            <ContactList names={this.state.name}/>
        </>
    }
}

export default App;
