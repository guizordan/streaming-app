import React from "react";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import Cover from "../components/Cover/Cover";

function Footer() {
  return (
    <Row>
      <Col xs="auto">
        <Link to="/series">
          <Cover image="images/series.png" title="Popular Series" />
        </Link>
      </Col>
      <Col xs="auto">
        <Link to="/movies">
          <Cover image="images/movies.png" title="Popular Movies" />
        </Link>
      </Col>
    </Row>
  );
}

export default Footer;
