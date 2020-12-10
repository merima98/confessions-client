import React from "react";
import { formatDistanceToNow, format } from "date-fns";
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
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid #808080;
  height: 100%;
  // color: red;
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
  color: ${(props) => props.theme.colors.postColor};
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font: 7px Segoe UI Historic;
  }
`;

const Time = styled.span`
  color: ${(props) => props.theme.colors.color};
  font: 7px Segoe UI Historic;
`;

function Post(props) {
  const { body, date } = props;
  // const dateToConvert = formatDistanceToNow(Date.parse(date));
  // const dateToConvert = Date.parse(date);
  // const monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const month = monthNames[dateToConvert.getMonth()];
  console.log(format(Date.parse(date), "yyyy/MM/dd kk:mm:ss"));
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
