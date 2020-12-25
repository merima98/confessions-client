import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  MdAutorenew,
  MdFilterTiltShift,
  MdHome,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdWbIncandescent,
} from "react-icons/md";

import { BREAKPOINTS } from "../../../constants";

const StyledHeader = styled.header`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #808080;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 0 20px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Home = styled(NavLink)`
  margin-right: 0.5rem;
  color: black;
  text-decoration: none;
  align-items: center;

  &.active {
    color: black;
    text-decoration: none;
    width: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid #1877f2;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    height: 20px;
    width: 20px;
    left: 0;
    &.active {
      padding-bottom: 0px;
    }
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <Container>
        <Home exact to="/">
          <MdHome to="/" style={{ color: `#1877F2` }} />
        </Home>
        <MdWbIncandescent
          onClick={() => {
            props.setIsDarkMode(!props.isDarkMode);
          }}
          style={{ color: `#65676b` }}
        ></MdWbIncandescent>
        <Home exact to="/sort/lastadded">
          <MdAutorenew to="/sort/lastadded" style={{ color: `#65676b` }} />
        </Home>
        <Home exact to="/sort/upvoted">
          <MdKeyboardArrowUp to="/sort/upvoted" style={{ color: `#65676b` }} />
        </Home>{" "}
        <Home exact to="/sort/downvoted">
          <MdKeyboardArrowDown
            to="/sort/downvoted"
            style={{ color: `#65676b` }}
          />
        </Home>
        <Home exact to="/sort/random">
          <MdFilterTiltShift to="/sort/random" style={{ color: `#65676b` }} />
        </Home>
      </Container>
    </StyledHeader>
  );
}

export default Header;
