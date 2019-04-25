import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { MemoryRouter } from "react-router";

describe("Header Tests ", function() {
  it("Should render without errors inside a Router", function() {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
