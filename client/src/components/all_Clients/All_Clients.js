import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_clients } from "../../JS/actions/userActions";
import Client from "./Client";
import "./all_clients.css";
const All_Clients = () => {
  const clients = useSelector((state) => state.userReducer.clients);

  const dispatch = useDispatch();
  const get_clt = () => {
    dispatch(get_clients());
  };
  useEffect(() => {
    get_clt();
  }, []);
  return (
    <div className="clients">
      {clients.map((el) => (
        <Client clients={el} />
      ))}
    </div>
  );
};

export default All_Clients;
