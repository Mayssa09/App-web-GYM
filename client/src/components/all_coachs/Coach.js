import React from "react";
import "./coach.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { delete_coach } from "../../JS/actions/coachAction";
import { useDispatch } from "react-redux";
export const Coach = ({ coachInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src="https://cdn4.vectorstock.com/i/1000x1000/07/18/young-sexy-woman-fitness-vector-2210718.jpg"
              />
            </div>
            <div className="team-content">
              <h2>
                <span>Coach : </span>
                <span>{coachInfo.first_Name} </span>
                <span>{coachInfo.last_Name}</span>
              </h2>
              <h4>
                <span> Phone : </span>
                <span>{coachInfo.phone}</span>
              </h4>
              <h4>
                <span>speciality : </span>
                <span>{coachInfo.speciality}</span>
              </h4>
              <h4>
                <span> Availability : </span>
                <span>{coachInfo.availability}</span>
              </h4>
            </div>
            <ul className="social">
              <li>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete_coach"
                  onClick={() => dispatch(delete_coach(coachInfo._id))}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
