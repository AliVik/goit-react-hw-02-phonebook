

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