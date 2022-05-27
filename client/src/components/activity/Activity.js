import React from "react";
import "./activity.css";
import { Link } from "react-router-dom";

const Activity = ({ sport }) => {
  return (
    <div className="container-AC">
      <Link to={`/about_activity/${sport._id}`}>
        <div className="card">
          <div className="card_header">
            <img
              src={sport.image}
              alt="card__image"
              className="card_image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">{sport.nom}</span>
            <h4>{sport.categorie}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Activity;
