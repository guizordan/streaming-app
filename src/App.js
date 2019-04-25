import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* pages */
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
/* pages */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container className="container content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
