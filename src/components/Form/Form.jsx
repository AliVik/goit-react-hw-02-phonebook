import React, { Component } from "react";
import { nanoid } from 'nanoid'


class Form extends Component {
    state = {}
    onFormSubmit = (evt) => {
        evt.preventDefault();
        const inputName = evt.currentTarget.elements.input.value;
        const form = evt.currentTarget;
        const id = nanoid();
        this.props.onSubmit({ inputName, id });
        form.reset();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="input"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <button type="submit" name="button">Add contact</button>
            </form>
        )
    }

}

export default Form;