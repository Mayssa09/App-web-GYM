import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITIES,
} from "../constantes/activityActionType";

const initialState = {
  loading: false,
  activities: [],
};
const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        loading: false,
        activities: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (el) => el._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default activityReducer;
