import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Posts from "./features/posts/components/Posts";
import RandomPosts from "./features/posts/components/RandomPosts";
import UpvotedPosts from "./features/posts/components/UpvotedPosts";
import DownvotedPosts from "./features/posts/components/DownvotedPosts";
import LastAddedPosts from "./features/posts/components/LastAddedPosts";
import Header from "./features/header/components/Header";
import { darkTheme, lightTheme } from "./themes/themes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  console.log("isDarkMode - ", isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <BrowserRouter>
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Posts isDarkMode={setIsDarkMode} />}
            />
            <Route
              path="/sort/random"
              component={() => <RandomPosts isDarkMode={setIsDarkMode} />}
            />
            <Route
              path="/sort/upvoted"
              component={() => <UpvotedPosts isDarkMode={setIsDarkMode} />}
            />
            <Route
              path="/sort/downvoted"
              component={() => <DownvotedPosts isDarkMode={setIsDarkMode} />}
            />
            <Route
              path="/sort/lastadded"
              component={() => <LastAddedPosts isDarkMode={setIsDarkMode} />}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
