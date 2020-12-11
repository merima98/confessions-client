import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";

import { BREAKPOINTS } from "../../../constants";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid #808080;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 576px;
  width: 50%;
  height: 20px;
  padding: 0 20px;
  display: flex;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 1px 40px;
  }
`;

const Home = styled(NavLink)`
  height: 10px;
  width: 10px;
  color: white;
  text-decoration: none;
  align-items: center;

  &.active {
    color: white;
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
const Button = styled.button`
  height: 10px;
  width: 10px;
  margin-top: 5px;
  margin-left: 10px;
  border-radius: 100%;
  border-color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => props.theme.colors.color};
  text-decoration: none;
  &.active {
    color: white;
    text-decoration: none;
    width: 20px;
    padding-bottom: 8px;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    height: 10px;
    width: 10px;
    left: 0;
    margin-top: 5px;
    &.active {
      padding-bottom: 0px;
    }
  }
`;

function Header(props) {
  console.log("props bro - ", props);

  return (
    <StyledHeader>
      <Container>
        <Home exact to="/">
          <MdHome to="/" style={{ color: `#1877F2` }} />
        </Home>
        <Button
          onClick={() => {
            props.setIsDarkMode(!props.isDarkMode);
          }}
        ></Button>
      </Container>
    </StyledHeader>
  );
}

export default Header;
