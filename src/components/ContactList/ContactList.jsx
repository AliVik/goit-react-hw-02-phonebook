

export default function ContactList({ contacts }) {

    return <>
        <ul>
            {contacts.map(contact => {
                return <li key={contact.id}>{contact.inputName}:{contact.inputNumber}</li>
            })}


        </ul>
    </>
}