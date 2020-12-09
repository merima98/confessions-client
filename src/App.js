import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Posts from "./features/posts/components/Posts";
import RandomPosts from "./features/posts/components/RandomPosts";
import UpvotedPosts from "./features/posts/components/UpvotedPosts";
import DownvotedPosts from "./features/posts/components/DownvotedPosts";
import LastAddedPosts from "./features/posts/components/LastAddedPosts";
import Header from "./features/header/components/Header";

import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const app = (props) => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/sort/random" component={RandomPosts} />
            <Route path="/sort/upvoted" component={UpvotedPosts} />
            <Route path="/sort/downvoted" component={DownvotedPosts} />
            <Route path="/sort/lastadded" component={LastAddedPosts} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default app;
