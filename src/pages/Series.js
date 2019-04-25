import React, { Component } from "react";
import { _getTitles } from "../_DATA";

import { Row, Col } from "react-bootstrap";
import Cover from "../components/Cover/Cover";

class Series extends Component {
  state = {
    loading: true,
    error: false,
    series: []
  };

  componentDidMount() {
    _getTitles()
      .then(res => {
        const series = res.entries
          .filter(entry => entry.programType === "series")
          .filter(entry => entry.releaseYear >= 2010)
          .filter((entry, index) => index < 21)
          .sort((a, b) => a.title.localeCompare(b.title));

        this.setState({ series, loading: false });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { series, loading, error } = this.state;
    return (
      <Row className="justify-content-center">
        {series.length > 0 &&
          series.map((movie, index) => {
            return (
              <Col key={index} lg="2" md="3" sm="4" xs="6" className="mb-3">
                <Cover
                  image={movie.images["Poster Art"].url}
                  title={movie.title}
                />
              </Col>
            );
          })}

        {loading && (
          <Col md="12" className="text-center">
            Loading...
          </Col>
        )}

        {error && (
          <Col md="12" className="text-center">
            Oops, something went wrong...
          </Col>
        )}
      </Row>
    );
  }
}

export default Series;
