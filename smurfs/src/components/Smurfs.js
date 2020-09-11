import React from 'react';
import Smurf from './Smurf';
import { connect } from "react-redux";

export default function Smurfs(props) {
    
    return(
        <ul className={'smurfs'}>
            <Smurf />
        </ul>
    )
}