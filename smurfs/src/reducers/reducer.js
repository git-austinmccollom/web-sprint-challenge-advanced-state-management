import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
} from "../actions/actions";

export const initialState = {
  smurfs: [],
  error: "",
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      console.log("GET_SMURFS_START");
      return {
        ...state,
        loading: true,
      };
    case GET_SMURFS_SUCCESS:
      console.log("reducer!!!!! case for SET_SMURFS: ", action.payload);
      return {
        smurfs: action.payload,
        error: "",
        loading: false,
      };
    case GET_SMURFS_FAILURE:
      console.log("GET_SMURFS_FAILURE");
      return {
        ...state,
        error: action.payload,
      };
    case POST_SMURF_START:
      return {
        ...state,
        loading: true,
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      console.log("default reducer case!!!!!!");
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};
