import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle/";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <PageTitle />
      <Container className="container content" />
      <Footer />
    </>
  );
}

export default App;
