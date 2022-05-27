import React from "react";
import "./client.css";
// import avatar from "../../avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { delete_client } from "../../JS/actions/userActions";

const Client = ({ clients }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-c">
      <img
        src="https://thumbs.dreamstime.com/z/caract%C3%A8re-courant-d-avatar-de-jeune-homme-sportif-132300133.jpg"
        alt="avatar"
        className="avatar_client"
      />
      <div className="card-text">
        <div className="title-total">
          <h3>
            <span>Client : </span>
            <span>{clients.first_Name} </span>
            <span>{clients.last_Name}</span>
          </h3>
          <h5>
            <span>Phone : </span>
            <span>{clients.phone}</span>
          </h5>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className="delete_client"
        onClick={() => dispatch(delete_client(clients._id))}
      />
    </div>
  );
};

export default Client;
