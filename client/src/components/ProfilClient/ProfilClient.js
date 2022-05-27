import React from "react";
import { useSelector } from "react-redux";

import "./profilclient.css";

const ProfilClient = () => {
  const client = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <div className="photo_gym">
        {" "}
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/07/18/young-sexy-woman-fitness-vector-2210718.jpg"
          alt="avatar"
          className="avatar"
        />
        <div className="client_info">
          <h2>{client.first_Name}</h2>
          <h3>{client.last_Name}</h3>
          <p>{client.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilClient;
