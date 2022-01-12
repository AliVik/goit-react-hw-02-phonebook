

function Filter ({value,onChange}){
   
        return <label>
                    Find contacts by name
                    <input
                        type="text"
                        name="filter"
                        value={value}
                        onChange={onChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
            </label>
    
}

export default Filter;