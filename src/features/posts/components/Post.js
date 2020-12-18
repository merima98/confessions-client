import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

import { BREAKPOINTS } from "../../../constants";

const StyledPost = styled.div`
  background-color: #ffffff;
`;

const Header = styled.header`
  margin: 0.3rem 0;
  height: 0.1rem;
  width: 5rem;
  background-color: #ffffff;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 24rem;
    margin: -0.5rem 0;
    height: 1.6rem;
  }
`;
const Body = styled.p`
  width: 100%;
  margin-bottom: 2rem;

  font: 13px Segoe UI Historic;
  color: #050505;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 24px;
    font-family: Segoe UI Historic;
  }
`;
const Time = styled.span`
  color: #65676b;
  font-size: 7.5px;
  font-family: Segoe UI Historic;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 13px;
  }
`;

const Likes = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const Like = styled.span`
  width: 50%;
  color: #65676b;
  text-align: center;
  margin-right: 1rem;
  font-size: 7px;
  font-family: Segoe UI Historic;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 15px;
  }
`;

function Post(props) {
  const { body, date, totalDownvotes, totalUpvotes } = props;

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
      time = `${Number(
        format(Date.now(), "kk") - Number(format(Date.parse(date), "kk"))
      )}h`;
    }
    if (
      Number(format(Date.parse(date), "kk")) ===
      Number(format(Date.now(), "kk"))
    ) {
      if (
        Number(format(Date.parse(date), "mm")) >
        Number(format(Date.now(), "mm"))
      ) {
        time = `${
          Number(format(Date.now(), "mm")) +
          (60 - Number(format(Date.parse(date), "mm")))
        } min`;
      } else if (
        Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm")) <
        1
      ) {
        time = `Just now`;
      } else {
        time = `${
          Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm"))
        } min`;
      }
    }
  }
  return (
    <StyledPost>
      <Header>
        <Time>{time}</Time>
      </Header>
      <Body>{body}</Body>
      <Likes>
        <Like>Approved: {totalUpvotes}</Like>
        <Like>Condemn: {totalDownvotes}</Like>
      </Likes>
    </StyledPost>
  );
}

export default Post;
