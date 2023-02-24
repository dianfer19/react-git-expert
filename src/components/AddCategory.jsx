import React, {useState} from 'react';

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value)
    }
    const onSubmitForm = (event) => {
        event.preventDefault()
        if (inputValue.trim()<=1) return
        onAddCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                // onChange={(event) => onInputChange(event)} //cuando es un unico parametro se obvia
                onChange={onInputChange}
            />
        </form>

    )
}

