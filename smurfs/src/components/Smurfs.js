import React from 'react';
import Smurf from './Smurf';
import { connect } from "react-redux";

//actions
import { getSmurfs } from '../actions/actions'

function Smurfs(props) {
    
    return(
        <div className={'smurfs'}>
            <button onClick={() => props.getSmurfs()}> Get Smurfs </button>
            {console.log('checking props for Smurfs component: ', props)}
            {   
                props.smurfs.map( (each) => {
                    return <Smurf key={each.id} smurf={each} />
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
  }
  
  export default connect( mapStateToProps, { getSmurfs })(Smurfs);
  