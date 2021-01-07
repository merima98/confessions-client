import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  Home,
  Sun,
  Moon,
  ArrowUp,
  ArrowDown,
  Filter,
  RefreshCcw,
} from "react-feather";

import { BREAKPOINTS } from "../../../constants";
import { useDarkMode } from "../../../state";

const StyledHeader = styled.header`
  /* border-bottom: 1px solid #808080; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
  height: 3.5rem;
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-gap: 1rem;
  }
`;

const Links = styled(NavLink)`
  padding: 14px;
  color: black;
  text-decoration: none;

  display: flex;
  justify-content: center;

  &.active {
    color: black;
    border-bottom: 2px solid #1877f2;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    left: 0;
    &.active {
      padding-bottom: 0px;
    }
  }
`;

const DatkTheme = styled.div`
  padding: 16px;
  color: black;
  text-decoration: none;

  display: flex;
  justify-content: center;

  &.active {
    color: #1877f2;
    border-bottom: 2px solid #1877f2;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    left: 0;
    &.active {
      padding-bottom: 0px;
    }
  }
`;

function Header(props) {
  const setIsDarkMode = useDarkMode((state) => state.setIsDarkMode);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  function onChange() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <StyledHeader>
      <Container>
        <Links exact to="/">
          <Home to="/" style={{ color: `#1877F2` }} />
        </Links>
        <DatkTheme>
          {isDarkMode ? (
            <Sun style={{ cursor: "pointer" }} onClick={onChange} />
          ) : (
            <Moon style={{ cursor: "pointer" }} onClick={onChange} />
          )}
        </DatkTheme>
        <Links exact to="/sort/lastadded">
          <RefreshCcw to="/sort/lastadded" />
        </Links>
        <Links exact to="/sort/upvoted">
          <ArrowUp to="/sort/upvoted" />
        </Links>{" "}
        <Links exact to="/sort/downvoted">
          <ArrowDown to="/sort/downvoted" />
        </Links>
        <Links exact to="/sort/random">
          <Filter to="/sort/random" />
        </Links>
      </Container>
    </StyledHeader>
  );
}

export default Header;
