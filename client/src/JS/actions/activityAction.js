import { GET_ACTIVITIES } from "../constantes/activityActionType";
import axios from "axios";

export const get_activities = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/Activity/activities");
    dispatch({ type: GET_ACTIVITIES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const add_activity = (newActivity) => (dispatch) => {
  axios
    .post("http://localhost:5000/Activity/activities", newActivity)
    .then(() => dispatch(get_activities()))
    .catch((err) => console.log(err));
};

export const delete_activity = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/Activity/activities/${_id}`)
    .then(() => dispatch(get_activities()))
    .catch((err) => console.log(err));
};
export const editActivity = (_id, EditedActivity) => (dispatch) => {
  axios
    .put(`http://localhost:5000/Activity/activities/${_id}`, EditedActivity)
    .then(() => dispatch(get_activities()))
    .catch((err) => console.log(err));
};
