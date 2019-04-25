import React from "react";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <Row>
      <Col md="auto">
        <Link to="/series/">
          <img src="/images/series.png" alt="series" />
          <br />
          <p className="pt-1">Popular Series</p>
        </Link>
      </Col>
      <Col md="auto">
        <Link to="/movies/">
          <img src="/images/movies.png" alt="movies" />
          <br />
          <p className="pt-1">Popular Movies</p>
        </Link>
      </Col>
    </Row>
  );
}

export default Footer;
