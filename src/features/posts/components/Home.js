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
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 10px;
  color: white;
`;

const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: white;
`;

const Submit = styled(Link)`
  font-size: 0.8rem;
  padding: 6px 16px;
  cursor: pointer;
  color: #fff;
  display: block;
  text-align: center;
  background-color: #454545;
  border-radius: 1px solid #454545;
  text-decoration: none;
`;

function Home() {
  return (
    <Tile>
      <Title>Home</Title>
      <Description>
        Your personal frontpage. Come here to check in with your favorite posts.
      </Description>
      <Submit to="/confessions">Create post</Submit>
    </Tile>
  );
}

export default Home;
