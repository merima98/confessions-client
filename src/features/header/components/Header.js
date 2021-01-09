import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import {
  Home,
  Sun,
  Moon,
  ArrowUp,
  ArrowDown,
  Filter,
  RefreshCcw,
  Menu,
} from "react-feather";

import { BREAKPOINTS } from "../../../constants";
import { useDarkMode } from "../../../state";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
`;

const StyledNavLink = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    max-width: 500px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
  }
`;
const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 18px;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: none;
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

function Header() {
  let history = useHistory();
  const location = useLocation();
  const setIsDarkMode = useDarkMode((state) => state.setIsDarkMode);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  function onChange() {
    setIsDarkMode(!isDarkMode);
  }

  function handleBookmarks() {
    if (location.pathname === "/bookmarks") {
      return history.goBack();
    }
    return history.push("/bookmarks");
  }

  return (
    <StyledHeader>
      <Container>
        <StyledMenu>
          <Menu
            onClick={handleBookmarks}
            style={{
              height: "20px",
              width: "20px",
              color: `#8B8D90`,
              marginRight: "1rem",
            }}
          />
          {isDarkMode ? (
            <Sun
              style={{ cursor: "pointer", color: "#8B8D90" }}
              onClick={onChange}
            />
          ) : (
            <Moon
              style={{ cursor: "pointer", color: "#8B8D90" }}
              onClick={onChange}
            />
          )}
        </StyledMenu>
        <StyledNavLink>
          <Links exact to="/">
            <Home
              to="/"
              style={{ height: "20px", width: "20px", color: `#1877F2` }}
            />
          </Links>
          <DatkTheme>
            {isDarkMode ? (
              <Sun
                style={{ cursor: "pointer", color: "#8B8D90" }}
                onClick={onChange}
              />
            ) : (
              <Moon
                style={{ cursor: "pointer", color: "#8B8D90" }}
                onClick={onChange}
              />
            )}
          </DatkTheme>
          <Links exact to="/sort/lastadded">
            <RefreshCcw
              to="/sort/lastadded"
              style={{ height: "20px", width: "20px", color: "#8B8D90" }}
            />
          </Links>
          <Links exact to="/sort/upvoted">
            <ArrowUp
              to="/sort/upvoted"
              style={{ height: "20px", width: "20px", color: "#8B8D90" }}
            />
          </Links>{" "}
          <Links exact to="/sort/downvoted">
            <ArrowDown
              to="/sort/downvoted"
              style={{ height: "20px", width: "20px", color: "#8B8D90" }}
            />
          </Links>
          <Links exact to="/sort/random">
            <Filter
              to="/sort/random"
              style={{ height: "20px", width: "20px", color: "#8B8D90" }}
            />
          </Links>
        </StyledNavLink>
      </Container>
    </StyledHeader>
  );
}

export default Header;
