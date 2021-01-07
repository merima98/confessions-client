import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

const StyledPost = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const Time = styled.span`
  color: #65676b;
  font-size: 13px;
  font-family: Segoe UI Historic;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.colors.background};
`;

const Body = styled.p`
  margin-bottom: 2rem;
  font-size: 24px;
  font-family: Segoe UI Historic;
  color: ${(props) => props.theme.colors.color};
`;

const Likes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
`;
const Like = styled.span`
  color: #65676b;
  text-align: center;
  font-size: 15px;
  font-family: Segoe UI Historic;
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
      <Time>{time}</Time>
      <Body>{body}</Body>
      <Likes>
        <Like>Approved: {totalUpvotes}</Like>
        <Like>Condemn: {totalDownvotes}</Like>
      </Likes>
    </StyledPost>
  );
}

export default Post;
