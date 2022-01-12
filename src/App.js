import React, { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";


class App extends Component {
    state = {
        contacts: [],
        filter: '',

    }



    handleFormDatas = (data) => {
        console.log(data)

        this.setState(prevState => {
            // console.log(prevState)
            // console.log(this.state.name)
            // return {
            //     name: [...prevState.name, data.inputName],
            //     contacts: [...prevState.contacts, data.inputNumber]
            // }

            return {
                contacts: [...prevState.contacts, data]
            }
        })
    }

    render() {
        return <>
            <Form onSubmit={this.handleFormDatas} />
            <ContactList contacts={this.state.contacts} />
        </>
    }
}

export default App;
