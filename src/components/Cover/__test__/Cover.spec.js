import React from "react";
import ReactDOM from "react-dom";
import Cover from "../Cover";

describe("Cover Tests ", function() {
  it("Should render without an image", function() {
    const div = document.createElement("div");
    ReactDOM.render(<Cover title="Sample title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
