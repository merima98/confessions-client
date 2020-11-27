import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tile = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 1px solid #454545;
  background-color: #454545;
  display: block;
  opacity: 0.5;
  background-color: black;
`;

const Button = styled(Link)`
  font-size: 0.8rem;
  padding: 10px 26px;
  cursor: pointer;
  color: white;
  display: block;
  text-align: center;
  background-color: #454545;
  border-radius: 1px solid #454545;
  text-decoration: none;
  &:hover {
    background-color: #a3a2a2;
    opacity: 0.8;
  }
`;

const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: white;
`;

// const Submit = styled(Link)`
//   font-size: 0.8rem;
//   padding: 6px 16px;
//   cursor: pointer;
//   color: #fff;
//   display: block;
//   text-align: center;
//   background-color: #454545;
//   border-radius: 1px solid #454545;
//   text-decoration: none;
// `;

function Home() {
  return (
    <Tile>
      <Button to="/moderate">Be admin! </Button>
      <Description>Do you want this confession to be published?</Description>
    </Tile>
  );
}

export default Home;
