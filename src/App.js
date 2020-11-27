import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Posts from "./features/posts/components/Posts";
import RandomPosts from "./features/posts/components/RandomPosts";
import CreatePost from "./features/posts/components/CreatePost";
import UpvotedPosts from "./features/posts/components/UpvotedPosts";
import DownvotedPosts from "./features/posts/components/DownvotedPosts";
import LastAddedPosts from "./features/posts/components/LastAddedPosts";
import ModeratePost from "./features/posts/components/ModeratePost";
import Header from "./features/header/components/Header";

import "./App.css";

const app = (props) => {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/confessions" component={CreatePost} />
            <Route path="/sort/random" component={RandomPosts} />
            <Route path="/sort/upvoted" component={UpvotedPosts} />
            <Route path="/sort/downvoted" component={DownvotedPosts} />
            <Route path="/sort/lastadded" component={LastAddedPosts} />
            <Route path="/moderate" component={ModeratePost} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default app;
