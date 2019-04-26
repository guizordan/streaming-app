import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-dark footer">
      <div className="container text-light">
        <Row className="mb-3">
          <Col className="mb-2" md="12">
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </Col>
          <Col md="12">
            <small>Copyright 2016 DEMO Streaming. All Rights Reserved</small>
          </Col>
        </Row>
        <Row className="no-gutters justify-content-between">
          <Col md="6">
            <img src="images/social_icons.png" alt="Social Icons" />
          </Col>
          <Col md="auto">
            <img src="images/appstore_icon.png" alt="App Store" />
          </Col>
          <Col md="auto">
            <img src="images/playstore_icon.png" alt="Play Store" />
          </Col>
          <Col md="auto">
            <img src="images/msstore_icon.png" alt="Microsoft Store" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
