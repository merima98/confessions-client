import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Posts from "./features/posts/components/Posts";
import CreatePost from "./features/posts/components/CreatePost";

import "./App.css";

const app = (props) => {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/confessions" component={CreatePost} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default app;
