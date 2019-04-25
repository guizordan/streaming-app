import React from "react";
import { Container } from "react-bootstrap";

function PageTitle() {
  return (
    <div className="bg-dark text-white">
      <Container className="pt-2 pb-2">
        <strong>Popular Movies</strong>
      </Container>
    </div>
  );
}

export default PageTitle;
