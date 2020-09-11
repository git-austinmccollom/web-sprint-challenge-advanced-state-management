import React from 'react';
import { connect } from "react-redux";

export default function Smurf(props) {
    
    return(
        <div className={'smurf'}>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}