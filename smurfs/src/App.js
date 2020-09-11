import React, { Component, useReducer, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import { initialState, reducer } from './reducers/reducer'
import { connect } from 'react-redux';


//components
import Form from './components/Form';
import Smurfs from './components/Smurfs';

function App() {

//   useEffect( () => {
//     axios.get(`http://localhost:3333/smurfs`)
//         .then( (res) => {
//             console.log('axios GET', res);
//             dispatch(setSmurfs(res.data));
//         })
//         .catch( (err) => {
//             console.error(err);
//         })
// }, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form />
        <Smurfs />
      </div>
    );
}

export default connect(
  () => {
    return {};
  },
  { }
  )(App);