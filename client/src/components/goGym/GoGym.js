import React from "react";
import "./gogym.css";
import ppp from "../../ppp.webp";

const GoGym = () => {
  return (
    <div className="com-gym">
      <img className="gogym-img" src={ppp} alt="goGym" />
      <div className="go_gym">
        <p className="description-gogym">
          GO GyM is a gym covering a unique 2500m² space with its Indoor and
          Out-door distribution.
          <br />
          Rich in Technogym equipment latest generation, coaches involved in
          listening, professional courses Approved Reebok the Mills intensely
          beneficial.
          <br />
          Our room and our team invite you to live a special daily life with a
          mission your well-being.
        </p>
      </div>
    </div>
  );
};

export default GoGym;
