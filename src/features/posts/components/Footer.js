import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINTS } from "../../../constants";

const Tile = styled.footer`
  padding: 10px;
  border-radius: 1px;
  padding: 64px 0px;

  @media (min-width: 992px) {
    font: 10px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
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
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2px;
  cursor: pointer;
  font: 8px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #4d4d4d;
    opacity: 0.5;
    transition: 0.5s;
    border-radius: 7%;
  }
`;

const Copyright = styled.span`
  font: 8px Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
  text-align: center;
  display: block;
  color: white;
  opacity: 0.5;
  border-top: 0.5px solid #b0b3b8;
  padding-top: 2px;
`;
const Filters = styled.div`
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 20px;
    padding-bottom: 5px;
    color: #b0b3b8;
    text-align: center;
    font: 9px Segoe UI Historic;
  }
`;
function Footer(props) {
  return (
    <Tile>
      <Filters>Filters</Filters>

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
