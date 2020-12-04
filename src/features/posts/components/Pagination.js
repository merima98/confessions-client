import React from "react";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";
import { BREAKPOINTS } from "../../../constants";

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
  color: #b0b3b8;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font: 7px Segoe UI Historic;
  }
`;

const Time = styled.span`
  color: white;
  font: 7px Segoe UI Historic;
`;

function Pagination(props) {
  const { number } = props;
  return (
    <StyledPost>
      <Header>
        {/* <Time>{formatDistanceToNow(Date.parse(date))} ago</Time> */}
      </Header>
      <Main>
        <Body>{number}</Body>
      </Main>
    </StyledPost>
  );
}

export default Pagination;
