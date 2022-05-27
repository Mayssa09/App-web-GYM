import { DELETE_COACH, GET_COACHS } from "../constantes/coachActionTypes";

const initialState = {
  loading: false,

  coachs: [],
};

const coachReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COACHS:
      return { ...state, loading: false, coachs: action.payload };

    case DELETE_COACH:
      return {
        ...state,
        coachs: state.coachs.filter((el) => el._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default coachReducer;
