import React from "react";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  border-radius: 1px solid #454545;
  background-color: #262626;
  border-bottom: 1px solid #808080;
  height: 100%;
  color: white;
  width: 100%;
`;

const Header = styled.header`
  margin-bottom: 8px;
`;

const Main = styled.main`
  margin-bottom: 8px;
`;

const Body = styled.p`
  word-wrap: break-word;
  color: white;
`;

const Time = styled.span`
  font-size: 0.8rem;
  color: white;
`;

function Post(props) {
  const { body, date } = props;
  return (
    <StyledPost>
      <Header>
        <Time>{formatDistanceToNow(Date.parse(date))} ago</Time>
      </Header>
      <Main>
        <Body>{body}</Body>
      </Main>
    </StyledPost>
  );
}

export default Post;
