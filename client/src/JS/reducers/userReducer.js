import {
  DELETE_CLIENT,
  GET_CLIENTS,
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOG_OUT,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../constantes/userActionTypes";

const initialState = {
  loading: false,
  isAuth: false,
  user: [],
  clients: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_PROFILE:
      return { ...state, loading: false };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, msg: action.payload };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        isAuth: true,
      };
    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, user: action.payload, isAuth: true };

    case GET_CLIENTS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };

    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((el) => el._id !== action.payload._id),
      };

    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
    case GET_PROFILE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case LOG_OUT:
      return { ...state, loading: false, isAuth: false };
    default:
      return state;
  }
};

export default userReducer;
