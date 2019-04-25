import React from "react";
import ReactDOM from "react-dom";
import PageTitle from "../PageTitle";

describe("PageTitle Tests ", function() {
  it("Should render without errors", function() {
    const div = document.createElement("div");
    ReactDOM.render(<PageTitle title="sample title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
