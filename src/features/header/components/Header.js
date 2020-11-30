import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #262626;
  border-bottom: 1px solid #808080;
`;

const Container = styled.div`
  max-width: 576px;
  margin: 0 auto;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  display: flex;
  @media (min-width: 992px) {
    max-width: 992px;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  width: 100%;
  @media (min-width: 992px) {
    width: 20%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  &.active {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid white;
  }
  margin-left: 120px;
`;
const MeniStyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  &.active {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid white;
  }
`;
const Home = styled.div`
  height: 20px;
  width: 20px;
  color: white;
  text-decoration: none;
`;

const Submit = styled.div`
  height: 20px;
  width: 20px;
  color: white;
  display: block;
`;
const MeniNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background-color: #191970;
  margin-top: 15px;
  &:hover {
    background-color: #d3d3d3;
  }
`;

const Meni = styled.div`
  height: 20px;
  width: 20px;
  color: white;
  display: block;
  margin-left: 30px;
  padding-top: 6px;
  display: block;
  cursor: pointer;
`;
const Navigation = styled.div`
  height: 20px;
  color: black;
  text-decoration: none;
  padding-top: 10px;
  background-color: grey;
  width: 100px;
  &:hover {
    color: #191970;
  }
`;

function Header(props) {
  const [showState, setShowState] = useState(false);

  function showMenu() {
    setShowState(!showState);
  }
  function exitMenu() {
    setShowState(false);
  }

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Meni>
            <Meni onClick={showMenu}>Meni</Meni>
            {showState ? (
              <Meni>
                <MeniStyledNavLink exact to="/sort/upvoted">
                  <MeniNavigation>
                    <Navigation>Upvotes</Navigation>
                  </MeniNavigation>
                </MeniStyledNavLink>{" "}
                <MeniStyledNavLink exact to="/sort/downvoted">
                  <MeniNavigation>
                    <Navigation>Downvotes</Navigation>
                  </MeniNavigation>
                </MeniStyledNavLink>{" "}
                <MeniStyledNavLink exact to="/sort/random">
                  <MeniNavigation>
                    <Navigation>Random</Navigation>
                  </MeniNavigation>
                </MeniStyledNavLink>{" "}
                <MeniStyledNavLink exact to="/sort/lastadded">
                  <MeniNavigation>
                    <Navigation>Lastadded</Navigation>
                  </MeniNavigation>
                </MeniStyledNavLink>
              </Meni>
            ) : null}
          </Meni>
          <StyledNavLink onClick={exitMenu} exact to="/">
            <IconWrapper>
              <Home>Home</Home>
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink onClick={exitMenu} exact to="/confessions">
            <IconWrapper>
              <Submit>Confession</Submit>
            </IconWrapper>
          </StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
