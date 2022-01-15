import React, { Component } from "react";
import { nanoid } from 'nanoid';



class Form extends Component {

    onFormSubmit = (evt) => {
        evt.preventDefault();
        const name = evt.currentTarget.elements.name.value;
        const number = evt.currentTarget.elements.number.value;
        const form = evt.currentTarget;
        const id = nanoid();

        this.props.onSubmit({ name, id, number });
        form.reset();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" name="button">Add contact</button>
            </form>
        )
    }

}

export default Form;