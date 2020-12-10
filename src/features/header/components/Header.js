import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdComment } from "react-icons/md";

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
  &:hover {
    background-color: #48494a;
    padding: 0px 0px 6px 2px;

    border-radius: 5px;
  }

  &.active {
    color: white;
    text-decoration: none;
    width: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid white;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    height: 20px;
    width: 20px;
    left: 0;
    &:hover {
      background-color: #48494a;
      padding: 0px 4px 0px 6px;
      border-radius: 5px;
    }
    &.active {
      padding-bottom: 0px;
    }
  }
`;
const Button = styled.button`
  height: 20px;
  width: 50px;
  color: white;
  text-decoration: none;
  align-items: center;
  &:hover {
    background-color: #48494a;
    padding: 0px 0px 6px 2px;

    border-radius: 5px;
  }

  &.active {
    color: white;
    text-decoration: none;
    width: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid white;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    height: 20px;
    width: 200px;
    left: 0;
    &:hover {
      background-color: #48494a;
      padding: 0px 4px 0px 6px;
      border-radius: 5px;
    }
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
          <MdComment to="/" />
        </Home>
        <Button
          onClick={() => {
            props.setIsDarkMode(!props.isDarkMode);
          }}
        >
          {`${props.isDarkMode ? `Light` : `Dark`}`}
        </Button>
      </Container>
    </StyledHeader>
  );
}

export default Header;
