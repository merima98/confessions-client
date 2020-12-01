import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tile = styled.footer`
  padding: 10px;
  border-radius: 1px;
  padding: 64px 20px;
  @media (min-width: 992px) {
    display: grid;
    grid-gap: 20px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
  padding: 2px;
  cursor: pointer;

  &:hover {
    background-color: #4d4d4d;
    opacity: 0.5;
    transition: 0.5s;
    border-radius: 7%;
  }
`;

const Copyright = styled.span`
  font-size: 0.8rem;
  text-align: center;
  display: block;
  color: white;
  opacity: 0.5;
`;

function Footer() {
  return (
    <Tile>
      <LinksWrapper>
        <Links>
          <StyledLink to="/sort/upvoted">Upvotes</StyledLink>
          <StyledLink to="/sort/downvoted">Downvotes</StyledLink>
          <StyledLink to="/sort/lastadded">Last added</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/sort/random">Random</StyledLink>
        </Links>
      </LinksWrapper>
      <Copyright>© Confessions, Inc. All rights reserved</Copyright>
    </Tile>
  );
}

export default Footer;