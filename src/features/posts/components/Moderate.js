import React from "react";

import styled from "styled-components";

function Moderate(props) {
  const StyledPost = styled.div`
    display: flex;
    padding: 10px;

    opacity: 0.8;
    margin-top: 90px;
    margin-left: 9rem;
    width: 25rem;
    height: 5rem;
    padding: 5rem;
    position: relative;
    background-color: #454545;
  `;

  const Header = styled.header`
    margin-bottom: 8px;
  `;

  const Main = styled.main`
    margin-bottom: 8px;
    margin-left: 0.7rem;
    padding: 16px;
    background-color: black;
    border: 3px solid white;
    text-align: center;
    width: 100%;
    opacity: 0.5;
    &:hover {
      color: black;
      background-color: #262626;
    }
  `;

  const Body = styled.p`
    word-wrap: break-word;
    color: white;
    display: block;
  `;

  const { body } = props;
  return (
    <StyledPost>
      <Header></Header>
      <Main>
        <Body>{body}</Body>
      </Main>
    </StyledPost>
  );
}

export default Moderate;
