import React, { useState } from 'react';
import { connect } from "react-redux";

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

export default function (props) {

    const [ formValues, setFormValues ] = useState(initialFormValues)

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateForm( name, value )
    }

    const updateForm = (inputName, inputValue) => {
        setFormValues( { ...formValues, [inputName]: inputValue } );
    }
    
    return(
        <form className={'smurf-form'}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={handleChange}
                />
            </label>
            <label>
                Height:
                <input
                    type='text'
                    name='height'
                    value={formValues.height}
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}