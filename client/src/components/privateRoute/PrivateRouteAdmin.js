import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const PrivateRouteAdmin = ({ component: RouteComponent }) => {
  const token = localStorage.getItem("token");
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const userClient = useSelector((state) => state.userReducer.user);

  if (!token) return <Navigate to="/" />;
  else if (isAuth && userClient.role === 1)
    return <Navigate to="/profilClient" />;

  return (
    <div>
      {" "}
      <RouteComponent />
    </div>
  );
};

export default PrivateRouteAdmin;
