import PropTypes from "prop-types";

export default function ContactList({ contacts,onDeleteClick }) {
    
  
    return <>
        <ul>
            {contacts.map(contact => {
                return <li key={contact.id}>
                    <span>{contact.name}: {contact.number}</span>
                    <button type="button" onClick={()=>onDeleteClick(contact.id)}>Delete</button>
                    </li>
                
            })}
        </ul>
    </>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    })),
    
    onDeleteClick: PropTypes.func.isRequired,
}