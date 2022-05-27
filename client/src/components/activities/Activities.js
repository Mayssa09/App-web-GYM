import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../activity/Activity";
import { get_activities } from "../../JS/actions/activityAction";
import Search from "../search/Search";

const Activities = () => {
  const activities = useSelector((state) => state.activityReducer.activities);

  const [myinput, setMyinput] = useState("");

  const dispatch = useDispatch();

  const get_act = () => {
    dispatch(get_activities());
  };
  useEffect(() => {
    get_act();
  }, []);
  return (
    <div>
      <Search myinput={myinput} setMyinput={setMyinput} />
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          marginLeft: "15%",
          flexWrap: "wrap",
        }}
      >
        {activities
          .filter((el) =>
            el.categorie.toLowerCase().includes(myinput.toLowerCase().trim())
          )
          .map((el) => (
            <Activity sport={el} />
          ))}
      </div>
    </div>
  );
};

export default Activities;
