import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BREAKPOINTS, HEADER_NAVIGATION } from "../../constants";

import { Home, ArrowUp, ArrowDown, Filter, RefreshCcw } from "react-feather";

const Container = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  margin: 0 auto;
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.bookmarksTextColor};
  font-size: 15px;
  text-decoration: none;
  overflow-wrap: anywhere;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

function Bookmarks() {
  return (
    <Container>
      <Nav>
        {HEADER_NAVIGATION.map(
          (item) =>
            !item.hidden && (
              <StyledNavLink key={item.value} to={item.value}>
                {item.icon === "1" ? (
                  <Home style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "2" ? (
                  <RefreshCcw style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "3" ? (
                  <ArrowUp style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "4" ? (
                  <ArrowDown style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "5" ? (
                  <Filter style={{ marginRight: "1rem" }} />
                ) : null}
                {item.label}
              </StyledNavLink>
            )
        )}
      </Nav>
    </Container>
  );
}

export default Bookmarks;
