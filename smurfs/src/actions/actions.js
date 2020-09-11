import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

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

// export const setSmurfs = (smurfArray) => {
//     console.log('setSmurfs function in actions file', smurfArray)
//     return {
//         type: SET_SMURFS,
//         payload: smurfArray
//     }
// }