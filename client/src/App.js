import "./App.css";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Acceuil from "./components/acceuil/Acceuil";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_profile } from "./JS/actions/userActions";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ProfilClient from "./components/ProfilClient/ProfilClient";
import Activities from "./components/activities/Activities";
import Footer from "./components/footer/Footer";
import GoGym from "./components/goGym/GoGym";
import Trainers from "./components/trainers/Trainers";
import Planning from "./components/planning/Planning";
import About_Activity from "./components/about_activity/About_Activity";
import PrivateRouteAdmin from "./components/privateRoute/PrivateRouteAdmin";
import All_Clients from "./components/all_Clients/All_Clients";
import All_Activities from "./components/all_activities/All_Activities";
import All_Coachs from "./components/all_coachs/All_Coachs";

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(get_profile());
  }, [isAuth, dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Acceuil />
              <GoGym />
              <Trainers />
              <Planning />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profilClient"
          element={<PrivateRoute component={ProfilClient} />}
        />
        <Route
          path="/activities"
          element={<PrivateRoute component={Activities} />}
        />
        <Route
          path="/about_activity/:_id"
          element={<PrivateRoute component={About_Activity} />}
        />
        <Route
          path="/allclients"
          element={<PrivateRouteAdmin component={All_Clients} />}
        />{" "}
        <Route
          path="/all_activities"
          element={<PrivateRouteAdmin component={All_Activities} />}
        />
        <Route
          path="/all_coachs"
          element={<PrivateRouteAdmin component={All_Coachs} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
