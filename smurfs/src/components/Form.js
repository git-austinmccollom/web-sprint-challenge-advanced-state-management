import React from 'react';
import { connect } from "react-redux";

export default function (props) {
    
    return(
        <form className={'smurf-form'}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                />
            </label>
        </form>
    )
}