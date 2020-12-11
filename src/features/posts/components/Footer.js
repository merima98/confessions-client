import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tile = styled.footer`
  border-radius: 1px;
  @media (min-width: 992px) {
    font: 10px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.color};
  text-decoration: none;
  padding: 2px;
  cursor: pointer;
  font: 8px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    opacity: 0.6;
    transition: 0.5s;
    border-radius: 7%;
  }
`;

const Copyright = styled.span`
  font: 8px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
  text-align: center;
  display: block;
  color: ${(props) => props.theme.colors.color};
  opacity: 0.8;
  border-top: 0.5px solid #b0b3b8;
  padding-top: 2px;
`;

function Footer(props) {
  return (
    <Tile>
      <LinksWrapper>
        <Links>
          <StyledLink to="/sort/upvoted">Upvotes</StyledLink>
          <StyledLink to="/sort/downvoted">Downvotes</StyledLink>
          <StyledLink to="/sort/lastadded">Last added</StyledLink>
          <StyledLink to="/sort/random">Random</StyledLink>
        </Links>
      </LinksWrapper>
      <Copyright>© Confessions, Inc. All rights reserved</Copyright>
    </Tile>
  );
}

export default Footer;
