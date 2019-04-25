import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle/";

/* pages */
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
/* pages */

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <PageTitle />
      <Container className="container content">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={Movies} />
            <Route path="/users/" component={Series} />
          </Switch>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
