import React from "react";
import "./activity.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delete_activity } from "../../JS/actions/activityAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Edit from "../edit/Edit";

const ACTIVITY_COPY = ({ sport }) => {
  const dispatch = useDispatch();
  return (
    <div className="container-AC">
      <div className="ccc">
        <Link to={`/about_activity/${sport._id}`}>
          <div className="card">
            <div className="card__header">
              <img
                src={sport.image}
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">{sport.nom}</span>
              <h4>{sport.categorie}</h4>
            </div>
          </div>
        </Link>
        <div>
          {" "}
          <FontAwesomeIcon
            className="delete"
            icon={faTrash}
            onClick={() => dispatch(delete_activity(sport._id))}
          />
          <div className="edit_com">
            {" "}
            <Edit el={sport} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACTIVITY_COPY;
