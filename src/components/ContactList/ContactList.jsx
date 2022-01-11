
export default function ContactList({ names, id }) {
    return <>
        <ul>
            {names ? names.map(name => {
                return <li key={id}>{ name}</li>
            }) : ''}
        </ul>
    </>
}