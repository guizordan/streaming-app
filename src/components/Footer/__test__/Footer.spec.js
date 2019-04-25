import React from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";

describe("Footer Tests ", function() {
  it("Should render without errors", function() {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
