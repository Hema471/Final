import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import "../stylee.css";

const NavBar = () => {
  const myFAv = useSelector(state => state.favorites)
  return (
    <div id="Nav_main">
      <Navbar expand="lg" >
        <Container className="nav_main" >
          <Link  className="navbar-brand" to="home"><b>MovieVerse</b></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/MyFav" className="nav-link">
                MyFav - {myFAv.length}
              </Link>
              <Link to="/SignUp" className="nav-link">
              SignUp
              </Link>
              <Link to="/LogIn" className="nav-link">
              Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
