import React from 'react';
import { connect } from "react-redux";

export default function Smurf(props) {
    
    return(
        <div>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}