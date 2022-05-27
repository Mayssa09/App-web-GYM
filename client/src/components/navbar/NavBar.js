import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { log_out, get_clients } from "../../JS/actions/userActions";
import "./navbar.css";

const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const userClient = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  return (
    <div>
      {isAuth && userClient.role === 0 ? (
        <Navbar>
          <button className="nav-btn">Go GyM</button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {" "}
              <Link to="/">
                <Nav.Link>Home</Nav.Link> --{" "}
              </Link>
              <Nav.Link>Coachs</Nav.Link>
              <Nav.Link>Contacts</Nav.Link>
              <Nav.Link>Planning</Nav.Link>
            </Nav>
            <NavDropdown title="Manage All" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/allclients">Clients</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/all_coachs">Coachs</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/all_activities">Activities</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => dispatch(log_out())}>
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      ) : isAuth && userClient.role === 1 ? (
        <Navbar>
          <button className="nav-btn">Go GyM</button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Coachs</Nav.Link>
              <Nav.Link>Planning</Nav.Link>
              <Nav.Link>Contacts</Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/activities" style={{ color: "darkslategray" }}>
                  Activities
                </Link>
              </Nav.Link>
            </Nav>

            <Link to="/">
              <Nav.Link
                style={{ color: "darkslategray" }}
                onClick={() => dispatch(log_out())}
              >
                LogOut
              </Nav.Link>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar>
          <Navbar.Brand>
            {" "}
            <button className="nav-btn">Go GyM</button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Coachs</Nav.Link>
              <Nav.Link>Planning</Nav.Link>
              <Nav.Link>Contacts</Nav.Link>
            </Nav>
            <div
              style={{
                marginLeft: "60%",
                display: "flex",
              }}
            >
              <Link to="/register">
                <button className="nav-btn">JOIN US</button>
              </Link>
              <Link to="/login">
                <button className="log-btn">LOGIN</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
