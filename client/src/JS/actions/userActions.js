// Register

import {
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
import axios from "axios";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });
  try {
    console.log(newUser);
    const res = await axios.post(
      "http://localhost:5000/Client/registerClient",
      newUser
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data });
  }
};

export const userLogin = (userCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });
  try {
    const res = await axios.post(
      "http://localhost:5000/Client/login",
      userCred
    );
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED });
    console.log(error);
  }
};

export const get_profile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:5000/Client/currentuser",
      config
    );
    dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data });
  }
};

export const log_out = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};

export const get_clients = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/Client/clients");
    dispatch({ type: GET_CLIENTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const delete_client = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/Client/clients/${_id}`)
    .then(() => dispatch(get_clients()))
    .catch((err) => console.log(err));
};
