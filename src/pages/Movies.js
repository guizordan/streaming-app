import React, { Component } from "react";
import { _getTitles } from "../_DATA";

import { Row, Col } from "react-bootstrap";
import Cover from "../components/Cover/Cover";

class Movies extends Component {
  state = {
    loading: true,
    movies: []
  };

  componentDidMount() {
    _getTitles().then(res => {
      const movies = res.entries
        .filter(entry => entry.programType === "movie")
        .filter(entry => entry.releaseYear >= 2010)
        .filter((entry, index) => index < 21)
        .sort((a, b) => a.title.localeCompare(b.title));
      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <Row className="justify-content-center">
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <Col lg="2" md="3" sm="4" xs="6" className="mb-3">
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

        {movies.length === 0 && !loading && (
          <Col md="12" className="text-center">
            No movies available for display.
          </Col>
        )}
      </Row>
    );
  }
}

export default Movies;
