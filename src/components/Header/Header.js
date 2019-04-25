import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import PageTitle from "../PageTitle/";

import { withRouter } from "react-router";

function Header({ location }) {
  let title = "Popular Titles";

  if (location.pathname === "/movies/") {
    title = "Popular Movies";
  }

  if (location.pathname === "/series/") {
    title = "Popular Series";
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <strong>DEMO Streaming</strong>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mr-3">
                <strong>Log in</strong>
              </Nav.Link>
              <Button variant="dark">Start your free trial</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PageTitle title={title} />
    </>
  );
}

export default withRouter(Header);
