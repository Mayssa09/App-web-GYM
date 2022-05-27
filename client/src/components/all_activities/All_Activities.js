import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_activities } from "../../JS/actions/activityAction";
import ACTIVITY_COPY from "../activity/ACTIVITY_COPY";
import Add from "../Add/Add";
import "./all_activities.css";

const All_Activities = () => {
  const activities = useSelector((state) => state.activityReducer.activities);

  const dispatch = useDispatch();
  const get_act = () => {
    dispatch(get_activities());
  };
  useEffect(() => {
    get_act();
  }, []);
  return (
    <div className="all-ac">
      <Add />
      {activities.map((el) => (
        <ACTIVITY_COPY sport={el} />
      ))}
    </div>
  );
};

export default All_Activities;
