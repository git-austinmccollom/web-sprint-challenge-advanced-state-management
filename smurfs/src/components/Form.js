import React, { useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios';


const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

function Form (props) {

    const [ formValues, setFormValues ] = useState(initialFormValues)

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateForm( name, value )
    }

    const updateForm = (inputName, inputValue) => {
        setFormValues( { ...formValues, [inputName]: inputValue } );
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        submitForm();
    }

    const submitForm = () => {
        const newSmurf = {
          id: Date.now(),
          name: formValues.name.trim(),
          age: formValues.age.trim(),
          height: formValues.height.trim()
        }
        console.log(newSmurf);
        axios.post(`http://localhost:3333/smurfs`, newSmurf)
            .then( (res) => {
                console.log(res)
            })
            .catch( (err) => {
                console.error(err)
            })
      }
    
    return(
        <form className={'smurf-form'} onSubmit={handleSubmit}>
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
            <input type='submit'></input>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
  }
export default connect( mapStateToProps, {  })(Form);