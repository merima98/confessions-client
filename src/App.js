import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Posts from "./features/posts/components/Posts";
import Bookmarks from "./features/posts/components/Bookmarks";
import { darkTheme, lightTheme } from "./themes/themes";
import GlobalStyle from "./globalStyles";

import { useDarkMode } from "./state";

function App() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/sort/random" component={Posts} />
          <Route path="/sort/upvoted" component={Posts} />
          <Route path="/sort/downvoted" component={Posts} />
          <Route path="/sort/lastadded" component={Posts} />
          <Route path="/bookmarks" component={Bookmarks} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
