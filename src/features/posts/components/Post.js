import React from "react";
import { format } from "date-fns";
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
  border-bottom: 0.5px solid ${(props) => props.theme.colors.lineColor};
  height: 100%;
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

  let time = `${format(Date.parse(date), "dd.MM.yyyy")}. at ${format(
    Date.parse(date),
    "kk:mm"
  )}`;

  if (
    format(Date.now(), "yyyy/MM/dd") === format(Date.parse(date), "yyyy/MM/dd")
  ) {
    if (
      Number(format(Date.parse(date), "kk")) < Number(format(Date.now(), "kk"))
    ) {
      time = `Before ${Number(
        format(Date.now(), "kk") - Number(format(Date.parse(date), "kk"))
      )} hours`;
    }
    if (
      Number(format(Date.parse(date), "kk")) ===
      Number(format(Date.now(), "kk"))
    ) {
      if (
        Number(format(Date.parse(date), "mm")) >
        Number(format(Date.now(), "mm"))
      ) {
        time = `Before ${
          Number(format(Date.now(), "mm")) +
          (60 - Number(format(Date.parse(date), "mm")))
        } minuts`;
      } else if (
        Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm")) <
        1
      ) {
        time = `Just now`;
      } else {
        time = `Before ${
          Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm"))
        } minuts`;
      }
    }
  }
  return (
    <StyledPost>
      <Header>
        <Time>{time}</Time>
      </Header>
      <Main>
        <Body>{body}</Body>
      </Main>
    </StyledPost>
  );
}

export default Post;
