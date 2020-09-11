import React, { Component, useReducer } from "react";
import "./App.css";

import { initialState, reducer } from './reducers/reducer'
import { connect } from "react-redux";

//components
import Form from './components/Form';
import Smurfs from './components/Smurfs';



function App() {

  const [ state, dispatch ] = useReducer( reducer, initialState )

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form />
        <Smurfs />
      </div>
    );
}

export default App;
