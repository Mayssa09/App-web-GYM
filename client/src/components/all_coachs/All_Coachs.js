import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_coachs } from "../../JS/actions/coachAction";
import { Coach } from "./Coach";
import "./all_coachs.css";
const All_Coachs = () => {
  const coachs = useSelector((state) => state.coachReducer.coachs);

  const dispatch = useDispatch();

  const get_co = () => {
    dispatch(get_coachs());
  };
  useEffect(() => {
    get_co();
  }, []);
  return (
    <div className="all_coach">
      {coachs.map((el) => (
        <Coach coachInfo={el} />
      ))}
    </div>
  );
};

export default All_Coachs;
