import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../actions/authActions";

const initState = {
  authError: null,
  credentials: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return {
            ...state,
            credentials: action.credentials,
            authError: null,
        }
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: "Login failed"
      };
     case LOGOUT:
      return state
     case SIGN_UP_SUCCESS : 
      return {
        ...state,
        authError: null
      }
      case SIGN_UP_FAILURE:
        return {
          ...state,
          authError: action.err.message
        } 
    default:
      return state;
  }
};

export default authReducer;
