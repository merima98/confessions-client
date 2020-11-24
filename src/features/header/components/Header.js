import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as homeIcon } from "../../../icons/home.svg";

// import { ReactComponent as bellIcon } from "../../../../icons/home.svg";
// import { ReactComponent as editIcon } from "../../../../icons/home.svg";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
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
  color: ${(props) => props.theme.primary};
  &.active {
    color: ${(props) => props.theme.brand};
    border-bottom: 2px solid ${(props) => props.theme.brand};
  }
  &:hover ${IconWrapper} {
    background-color: ${(props) => props.theme.brand}19;
    svg {
      stroke: ${(props) => props.theme.brand};
    }
  }
`;

const Home = styled.div`
  height: 20px;
  width: 20px;
  color: ${(props) => props.theme.secondary};
`;

// const Notifications = styled.div`
//   height: 20px;
//   width: 20px;
//   color: ${(props) => props.theme.secondary};
// `;

const Submit = styled.div`
  height: 20px;
  width: 20px;
  color: ${(props) => props.theme.secondary};
`;

function Header(props) {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <StyledNavLink exact to="/">
            <IconWrapper>
              <Home>Home</Home>
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink exact to="/confessions">
            <IconWrapper>
              <Submit>Submit</Submit>
            </IconWrapper>
          </StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
