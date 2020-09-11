import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START});
    axios.get(`http://localhost:3333/smurfs`)
        .then( (res) => {
            console.log(res);
            console.log(res.data);
            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch( (err) => {
            console.error(err);
            dispatch({type: GET_SMURFS_FAILURE, payload: err})
        })
    
}

export const postSmurfs = () => dispatch => {
    dispatch({type: POST_SMURF_START});
    axios.post(`http://localhost:3333/smurfs`,)
        .then( (res) => {
            console.log(res);
            console.log(res.data);
            dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch( (err) => {
            console.error(err);
            dispatch({type: POST_SMURF_FAILURE, payload: err})
        })
    
}

// export const setSmurfs = (smurfArray) => {
//     console.log('setSmurfs function in actions file', smurfArray)
//     return {
//         type: SET_SMURFS,
//         payload: smurfArray
//     }
// }