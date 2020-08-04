import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HelloWorld from "./components/HellowWorld";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HelloWorld} />
    </BrowserRouter>
  );
}

export default Routes;
