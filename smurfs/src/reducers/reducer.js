import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
} from "../actions/actions";

export const initialState = {
  smurfs: [],
  error: '',
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
        console.log('GET_SMURFS_START')
        return {
            ...state
        }
    case GET_SMURFS_SUCCESS:
      console.log("reducer!!!!! case for SET_SMURFS: ", action.payload);
      return {
        smurfs: action.payload,
      }
    case GET_SMURFS_FAILURE:
      console.log('GET_SMURFS_FAILURE')
    default:
      console.log("default reducer case!!!!!!");
      return { ...state };
  }
};
