import { GET_COACHS } from "../constantes/coachActionTypes";
import axios from "axios";

export const get_coachs = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/coach/coachs");
    dispatch({ type: GET_COACHS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const delete_coach = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/coach/coachs/${_id}`)
    .then(() => dispatch(get_coachs()))
    .catch((err) => console.log(err));
};
