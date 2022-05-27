import React from "react";
import "./planning.css";

const Planning = () => {
  return (
    <div className="img_plan">
      {" "}
      <div className="planning">
        <h1 className="planning-title">Planning</h1>
        <div className="days_go">
          <h2 className="days">Go_Gym is open 7 days a week</h2>
        </div>
        <div className="days_go_o">
          <div>
            {" "}
            <span className="span-d">Monday to Friday</span>
          </div>

          <div>
            {" "}
            <span className="span-d">07:00 - 22:00</span>
          </div>
        </div>
        <br />
        <div className="days_go">
          {" "}
          <div>
            <span className="span-d">Saturday</span>
          </div>
          <div>
            {" "}
            <span className="span-d">07:00 - 18:00</span>
          </div>
        </div>

        <br />
        <div className="days_go">
          <div>
            <span className="span-d">Sunday</span>
          </div>
          <div>
            {" "}
            <span className="span-d">07:00 - 14:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
