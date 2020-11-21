import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Posts from "./features/posts/components/Posts";

import "./App.css";

const app = (props) => {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" component={Posts} />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default app;
